# Objetivo del Proyecto
Crear una plataforma de simulación del ICFES de alto rendimiento, basada en web, utilizando Next.js, JavaScript y Supabase. Incluye gamificación (tablas de clasificación, récords, temporizadores), sistema de pago por suscripción con prueba de 7 días, y arquitectura escalable para futura transición a aplicación de escritorio vía Tauri.

# Stack Técnico
- Next.js 16 (App Router)
- Zustand (Global State Management)
- Tailwind CSS & Framer Motion (UI/UX)
- Supabase (Backend: PostgreSQL, Auth)
- Túneles: Cloudflare (Desarrollo).
- Despliegue Producción: Netlify.

# Decisiones Clave
1. **Transición a Netlify:** Se decidió abandonar los túneles locales para producción debido a inestabilidades de red y bloqueos de CORS de Supabase, optando por un despliegue oficial en Netlify.
2. **Sistema Híbrido de Preguntas:** Las preguntas viven localmente para latencia 0ms. Perfiles, XP e historial se guardan en Supabase.
3. **Muro de Autenticación (Auth Wall):** Redirección automática a `/login` al intentar simulacros sin sesión.
4. **UI Safety Mode:** Se desactivaron animaciones de opacidad inicial en elementos críticos para asegurar visibilidad en conexiones remotas.
5. **Formulario de Login Blindado:** Eliminación de etiquetas `<form>` y uso de disparadores manuales para evitar recargas del navegador.

# Bitácora de Errores
- **WebSocket HMR Failure:** Cloudflare bloquea websockets de Next.js (Inofensivo).
- **Supabase Key Mismatch:** Se detectó el uso de una clave `anon` incorrecta que impedía el login.

# Hitos Logrados
- [x] Recuperación de contraseña funcional.
- [x] Túnel de acceso para colaboradores activo.
- [x] Arreglo de visibilidad global (Pantallazos negros corregidos).
- [x] Inserción de banco de preguntas completo (182 preguntas).
- [x] Panel de configuración de simulacro rápido funcional.
