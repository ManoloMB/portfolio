'use client';

import { useState, useRef, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

// Función auxiliar para generar un ID de sesión simple
const generateSessionId = () => {
  return Math.random().toString(36).substring(2) + Date.now().toString(36);
};

export default function EmbeddedChat() {
  const [messages, setMessages] = useState([
    { role: 'assistant', content: '¡Hola! Soy la IA de este portfolio. Pregúntame sobre mi experiencia, proyectos o tecnologías.' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [sessionId, setSessionId] = useState('');
  const [apiUrl, setApiUrl] = useState('http://localhost:8000');

  const chatContainerRef = useRef(null);

  useEffect(() => {
    setSessionId(generateSessionId());

    // Cargar configuración del backend desde config.json
    const loadConfig = async () => {
      try {
        const response = await fetch('./config.json');
        const config = await response.json();
        setApiUrl(config.apiUrl);
      } catch (error) {
        console.warn('No se pudo cargar config.json, usando localhost:', error);
        setApiUrl('http://localhost:8000');
      }
    };

    loadConfig();
  }, []);

  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      const container = chatContainerRef.current;
      container.scrollTo({
        top: container.scrollHeight,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim() || isTyping) return;

    const userMessage = { role: 'user', content: input };
    const currentInput = input;
    
    // Añadimos el mensaje del usuario Y el mensaje vacío del asistente (aquí saldrán los puntos)
    setMessages((prev) => [...prev, userMessage, { role: 'assistant', content: '' }]);
    setInput('');
    
    const textarea = document.querySelector('textarea[name="chat-input"]');
    if (textarea) textarea.style.height = '56px';

    setIsTyping(true);

    try {
      const recentHistory = messages.slice(-6).map(msg => ({
        role: msg.role,
        content: msg.content
      }));

      const response = await fetch(`${apiUrl}/api/chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: currentInput,
          session_id: sessionId,
          recent_history: recentHistory
        }),
      });

      if (!response.ok) {
        // Si el servidor responde con código 429, lanzamos la palabra clave
        if (response.status === 429) {
            throw new Error('RATE_LIMIT'); 
        }
        // Para cualquier otro error (500, 404, etc)
        throw new Error('Error en la respuesta del servidor');
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let assistantMessage = '';

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value, { stream: true });
        assistantMessage += chunk;

        setMessages((prev) => {
          const newMessages = [...prev];
          const lastMsg = newMessages[newMessages.length - 1];
          // Solo actualizamos si sigue siendo el asistente (seguridad)
          if (lastMsg.role === 'assistant') {
            lastMsg.content = assistantMessage;
          }
          return newMessages;
        });
      }

    } catch (error) {
      console.error('Error al conectar con la IA:', error);
      
      setMessages((prev) => {
        const newArr = [...prev];
        let errorMessage = 'Lo siento, he tenido un problema de conexión. Inténtalo de nuevo.';
        
        // AQUÍ CAMBIAMOS EL MENSAJE
        if (error.message === 'RATE_LIMIT') {
            errorMessage = '⛔ Has alcanzado el límite de mensajes por hora.';
        }
        
        newArr[newArr.length - 1] = { role: 'assistant', content: errorMessage };
        return newArr;
      });
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto my-10 font-sans">
      
      {/* CABECERA */}
      <div className="bg-slate-800/80 backdrop-blur border border-slate-700 border-b-0 rounded-t-xl p-4 flex items-center gap-3 shadow-lg">
        <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse custom-shadow-button"></div>
        <h3 className="font-bold text-lg text-shine tracking-wide text-white">
          ASISTENTE VIRTUAL
        </h3>
      </div>

      {/* CONTENEDOR PRINCIPAL */}
      <div className="border border-slate-700 bg-slate-900/60 backdrop-blur-sm rounded-b-xl shadow-2xl flex flex-col h-[600px] overflow-hidden">
        
        {/* ÁREA DE MENSAJES */}
        <div 
          ref={chatContainerRef} 
          className="flex-1 overflow-y-auto p-6 space-y-6 scroll-smooth custom-scrollbar"
        >
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex w-full ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[85%] px-5 py-3 rounded-2xl shadow-md text-sm md:text-base border ${
                  msg.role === 'user'
                    ? 'bg-cyan-600/20 border-cyan-500/50 text-cyan-50 rounded-br-none' 
                    : 'bg-slate-800/80 border-slate-600 text-slate-200 rounded-bl-none'
                }`}
              >
                {msg.role === 'assistant' ? (
                  // --- LÓGICA DE CARGA ---
                  // Si el contenido está vacío y estamos esperando, mostramos los puntos
                  (msg.content === '' && isTyping) ? (
                    <div className="flex items-center gap-1 h-6">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"></span>
                      <span className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                      <span className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                    </div>
                  ) : (
                    // Si ya hay contenido, mostramos el Markdown
                    <ReactMarkdown 
                      remarkPlugins={[remarkGfm]}
                      components={{
                        ul: ({node, ...props}) => <ul className="list-disc ml-4 space-y-1 my-2" {...props} />,
                        ol: ({node, ...props}) => <ol className="list-decimal ml-4 space-y-1 my-2" {...props} />,
                        li: ({node, ...props}) => <li className="pl-1" {...props} />,
                        p: ({node, ...props}) => <p className="mb-2 last:mb-0 leading-relaxed" {...props} />,
                        strong: ({node, ...props}) => <strong className="text-cyan-300 font-semibold" {...props} />,
                        a: ({node, ...props}) => <a className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2 transition-colors" target="_blank" rel="noopener noreferrer" {...props} />,
                        code: ({node, inline, ...props}) => 
                          inline 
                            ? <code className="bg-slate-700/50 px-1 py-0.5 rounded text-cyan-200 font-mono text-xs" {...props} />
                            : <code className="block bg-slate-950 p-3 rounded-lg text-cyan-200 font-mono text-xs overflow-x-auto my-2 border border-slate-700" {...props} />,
                        h1: ({node, ...props}) => <h1 className="text-xl font-bold mb-2 text-cyan-100" {...props} />,
                        h2: ({node, ...props}) => <h2 className="text-lg font-bold mb-2 text-cyan-100" {...props} />,
                      }}
                    >
                      {msg.content}
                    </ReactMarkdown>
                  )
                ) : (
                  <p className="whitespace-pre-wrap">{msg.content}</p>
                )}
              </div>
            </div>
          ))}
          {/* He eliminado el bloque de "loading" que tenías aquí abajo porque ya está integrado en la burbuja */}
        </div>

        {/* INPUT AREA */}
        <div className="p-4 bg-slate-800/90 border-t border-slate-700">
          <form onSubmit={handleSubmit} className="relative flex items-end gap-2">
            
            <textarea
              name="chat-input"
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
                e.target.style.height = 'auto';
                e.target.style.height = `${Math.min(e.target.scrollHeight, 150)}px`;
              }}
              onKeyDown={(e) => {
                // Si pulsa Enter
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault(); // Evitamos salto de línea siempre
                  
                  // Solo enviamos si NO está escribiendo la IA
                  if (!isTyping) {
                    handleSubmit(e);
                  }
                }
              }}
              placeholder="Escribe tu mensaje a la IA..."
              rows={1}
              className="w-full bg-slate-900 text-cyan-50 placeholder-slate-500 border border-slate-600 rounded-3xl pl-5 pr-12 py-4 focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all shadow-inner resize-none overflow-hidden min-h-[56px]"
            />
            
            <button
              type="submit"
              disabled={!input.trim() || isTyping}
              className={`
                absolute right-2 bottom-2 p-2 rounded-full transition-all duration-300 flex items-center justify-center mb-1
                ${!input.trim() || isTyping 
                  ? 'bg-slate-700 text-slate-500 cursor-not-allowed'
                  : 'bg-cyan-500 text-white hover:bg-cyan-400 custom-shadow-button transform hover:scale-105'
                }
              `}
            >
              {isTyping ? (
                <div className="w-5 h-5 flex items-center justify-center">
                   <span className="w-2 h-2 bg-slate-400 rounded-full animate-pulse"></span>
                </div>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
                </svg>
              )}
            </button>

          </form>
          <div className="text-center mt-2">
             <span className="text-xs text-slate-500">La IA puede cometer errores. Verifica la información importante.</span>
          </div>
        </div>

      </div>
    </div>
  );
}