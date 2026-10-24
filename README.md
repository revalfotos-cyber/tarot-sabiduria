# Tarot y Sabiduría — web inicial gratuita

Sitio estático adaptable a móviles, sin servidor propio ni suscripción de hosting. Incluye portada, catálogo, información del método de estudio y editor local para generar la configuración del catálogo.

## Qué es y qué no es
- `index.html`: web pública.
- `editor.html`: editor que se ejecuta en tu navegador y descarga un nuevo `config.js`. No es un panel de administración remoto; al editar cursos, tendrás que volver a publicar el archivo.
- `config.js`: marca, correo y cursos de ejemplo. Cambia los cursos y los enlaces antes de publicar.
- `styles.css` y `app.js`: diseño y funcionamiento de la página.

**Todavía no procesa pagos ni crea matrícula automática.** Para empezar sin mensualidades puedes crear enlaces de pago con un proveedor que opere en Chile, como Flow, sujeto a aprobación y sus tarifas, y pegarlos en cada curso mediante `editor.html`. Luego tendrás que gestionar la entrega del acceso manualmente. La cuenta bancaria se registra directamente con el proveedor de pagos; nunca la pongas en estos archivos.

## Publicar gratis en GitHub Pages
1. Crea una cuenta en https://github.com/ si no tienes una.
2. Crea un repositorio nuevo, por ejemplo `tarot-y-sabiduria`. Para la primera prueba puedes hacerlo público.
3. Sube todos los archivos de esta carpeta a la raíz del repositorio: `index.html`, `styles.css`, `app.js`, `config.js`, `editor.html` y `README.md`.
4. En el repositorio entra en **Settings → Pages**.
5. En **Build and deployment**, elige **Deploy from a branch**, selecciona la rama `main` y la carpeta `/ (root)`, y guarda.
6. Espera a que GitHub Pages publique la URL que aparece en esa misma sección. No se necesita comprar dominio; se utilizará una dirección gratuita de GitHub Pages.
7. Abre la URL pública y prueba todos los enlaces.

## Cómo añadir cursos
1. Abre `editor.html` en tu computador.
2. Edita el nombre, correo, cursos, precios y enlaces de pago.
3. Descarga `config.js`.
4. Reemplaza el `config.js` del repositorio por el nuevo archivo y confirma los cambios. GitHub Pages publicará la actualización.

## Videos y PDF
Para esta versión gratuita, aloja los videos en una plataforma de video y los PDF en un servicio de archivos. Pega enlaces en el proveedor o correo de inscripción. No uses enlaces públicos si el material debe ser confidencial: esta versión no protege contenido por compra y no es un aula virtual con usuarios y matrículas.

## Cobros
1. Crea una cuenta comercial directamente en el proveedor elegido (por ejemplo, https://www.flow.cl/), completa la validación y registra tu cuenta bancaria en su panel.
2. Genera un enlace de pago para cada curso si tu cuenta/proveedor ofrece esa función.
3. Pega el enlace en el campo **Enlace de pago** del editor.
4. Haz una compra de prueba y comprueba la confirmación antes de ofrecerlo a alumnos.

No pongas claves de API, contraseñas, datos bancarios ni secretos en `config.js`: los archivos de una web estática son públicos. Para automatizar cobros, validar pagos y dar acceso seguro a cada alumno se necesita una integración de servidor; no está incluida en esta versión gratuita.
