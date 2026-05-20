'use client';

import { useEffect } from 'react';

export default function HealthCheck() {
  useEffect(() => {
    const wakeUpBackend = async () => {
      try {
        // Leer configuración desde config.json
        const configResponse = await fetch('/config.json');
        const config = await configResponse.json();
        const apiUrl = config.apiUrl;

        const response = await fetch(`${apiUrl}/api/health`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (response.ok) {
          const data = await response.json();
          console.log('✅ Backend despierto:', data);
        }
      } catch (error) {
        console.log('⚠️ Health check falló (esperado en dev local):', error.message);
      }
    };

    // Llamar inmediatamente cuando carga la página
    wakeUpBackend();
  }, []);

  // Este componente no renderiza nada
  return null;
}
