### Nike Website Showcase

Este proyecto es un sitio web moderno y responsivo para Nike, diseñado con efectos 3D, animaciones fluidas y una interfaz de usuario atractiva. El sitio presenta productos de calzado Nike con una experiencia de usuario inmersiva y visualmente impactante.

## Características Principales

- **Diseño Inmersivo 3D**: Efectos tridimensionales en tarjetas de productos, testimonios y elementos interactivos
- **Carrusel Interactivo**: Presentación dinámica de productos destacados
- **Secciones Completas**: Incluye About Us, Products, Testimonials, FAQs, Contact, Blog y Footer
- **Efectos Glassmorphism**: Diseño moderno con efectos de cristal y transparencia
- **Totalmente Responsivo**: Adaptado para dispositivos móviles, tablets y escritorio
- **Animaciones Fluidas**: Transiciones y animaciones suaves en toda la interfaz
- **Formularios Interactivos**: Contacto y suscripción a newsletter con validación
- **Navegación Intuitiva**: Menú de navegación y botón de regreso al inicio


## Tecnologías Utilizadas

- HTML5
- CSS3 (con variables personalizadas y efectos avanzados)
- JavaScript (vanilla)
- VanillaTilt.js para efectos 3D
- Font Awesome para iconografía
- Google Fonts (Poppins y League Gothic)


## Estructura del Proyecto

```plaintext
nike-website/
│
├── index.html              # Estructura principal del sitio
├── style.css               # Estilos y animaciones
├── app.js                  # Funcionalidad e interactividad
├── vanilla-tilt.js         # Biblioteca para efectos 3D
│
└── images/                 # Directorio de imágenes
```

## Secciones del Sitio

1. **Header**: Logo y navegación principal
2. **Carousel**: Presentación de productos destacados con animaciones
3. **About Us**: Historia y valores de Nike
4. **Products**: Catálogo de productos con efectos 3D y opciones de selección
5. **Testimonials**: Opiniones de clientes con carrusel interactivo
6. **FAQs**: Preguntas frecuentes con acordeón interactivo
7. **Contact**: Formulario de contacto y datos de la empresa
8. **Blog**: Artículos y noticias recientes
9. **Footer**: Enlaces de navegación, newsletter, redes sociales y derechos de autor


## Instalación y Uso

1. Clona este repositorio:

```shellscript
git clone https://github.com/tu-usuario/nike-website.git
```


2. Navega al directorio del proyecto:

```shellscript
cd nike-website
```


3. Abre el archivo `index.html` en tu navegador preferido o utiliza un servidor local:

```shellscript
# Usando Python
python -m http.server

# Usando Node.js con http-server
npx http-server
```


4. Para desarrollo, puedes editar los archivos CSS y JavaScript según tus necesidades.


## Personalización

- **Colores**: Modifica las variables CSS en `:root` dentro de `style.css`
- **Productos**: Actualiza las imágenes y descripciones en la sección de productos
- **Contenido**: Reemplaza los textos de ejemplo con contenido real


## Efectos 3D

El sitio utiliza VanillaTilt.js para crear efectos 3D en tarjetas y elementos interactivos. Estos efectos se aplican a elementos con el atributo `data-tilt`. Puedes personalizar los parámetros en `app.js`:

```javascript
VanillaTilt.init(document.querySelectorAll("[data-tilt]"), {
    max: 15,
    speed: 400,
    glare: true,
    "max-glare": 0.5,
    scale: 1.05,
    perspective: 1000,
});
```

## Compatibilidad con Navegadores

- Chrome (última versión)
- Firefox (última versión)
- Safari (última versión)
- Edge (última versión)
- Opera (última versión)


## Capturas de Pantalla

*[Incluir capturas de pantalla del sitio en diferentes dispositivos]*

## Rendimiento y Optimización

- Imágenes optimizadas para carga rápida
- CSS y JavaScript minificados para producción
- Efectos visuales optimizados para no afectar el rendimiento


## Créditos y Atribuciones

- Diseño e implementación: [Bruno Chiodelli]
- Imágenes: Nike (con fines demostrativos)
- Iconos: Font Awesome
- Fuentes: Google Fonts (Poppins, League Gothic)
- Efectos 3D: VanillaTilt.js


## Licencia

Este proyecto es solo para fines educativos y de demostración. Las marcas, logotipos y nombres de productos de Nike son propiedad de Nike, Inc.

## Contacto

Para preguntas, sugerencias o colaboraciones, contacta a:

- Email: [[bruno17chiodelli@gmail.com](mailto:bruno17chiodelli@gmail.com)]
- GitHub: [chiodelli-bruno]
