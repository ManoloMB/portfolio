export default function Contact() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold">Contacto</h1>
      <form className="mt-4 flex flex-col w-1/2">
        <label htmlFor="name" className="mb-2">Nombre:</label>
        <input type="text" id="name" name="name" required className="p-2 mb-4 border rounded-md" />
        <label htmlFor="email" className="mb-2">Correo Electrónico:</label>
        <input type="email" id="email" name="email" required className="p-2 mb-4 border rounded-md" />
        <label htmlFor="message" className="mb-2">Mensaje:</label>
        <textarea id="message" name="message" required className="p-2 mb-4 border rounded-md"></textarea>
        <button type="submit" className="p-2 bg-blue-500 text-white rounded-md">Enviar</button>
      </form>
    </div>
  );
}
