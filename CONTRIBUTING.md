# Guía de Contribución y Buenas Prácticas - Proyecto Jordan 1
**Universidad Técnica de Ambato | Facultad de Ingeniería en Sistemas, Electrónica e Industrial**

Bienvenido a la guía oficial de desarrollo y contribución para la Landing Page interactiva de las **Air Jordan 1 Retro High OG**. El cumplimiento estricto de este documento es de carácter obligatorio para todos los colaboradores del equipo con el fin de garantizar la integridad del código, trazabilidad en el control de versiones y homogeneidad de estilos.

---

## 1. Modelo de Ramificación (GitFlow)

El proyecto implementa el flujo de trabajo estandarizado **GitFlow**. Se opera bajo un esquema de ramas protegidas con las siguientes directrices:

* **Ramas Principales:**
  * `main`: Contiene el código de producción estable correspondiente a versiones liberadas. Nadie puede realizar commits directos ni fusiones sin un release previo.
  * `develop`: Rama base de integración continua. Agrupa el trabajo consolidado de todos los módulos. Los cambios únicamente ingresan mediante Pull Requests validados.

* **Ramas de Características (`feature/`):**
  * Toda nueva característica estructural, visual o lógica se origina obligatoriamente a partir de la versión actualizada de `develop`:
    ```bash
    git checkout develop
    git pull origin develop
    git flow feature start <nombre-feature>
    ```
  * **Regla estricta de trazabilidad:** Queda prohibido ejecutar el comando `git flow feature finish` de forma local, ya que elimina la rama tras el merge. La publicación de características debe realizarse mediante:
    ```bash
    git flow feature publish <nombre-feature>
    ```
  * En GitHub, al completarse el merge hacia `develop`, **nunca** se debe presionar el botón *"Delete branch"*. Todas las ramas deben conservarse para permitir la reconstrucción del grafo de red.

---

## 2. Convención de Mensajes de Commit (Conventional Commits 1.0.0)

Todos los mensajes de confirmación deben redactarse respetando el estándar internacional con estructura `tipo(alcance): descripción`:

### Tipos Permitidos
* `feat`: Nuevas características, maquetación de secciones HTML o componentes interactivos.
* `style`: Declaración de reglas CSS, diseño responsivo, tipografías y adaptación móvil.
* `fix`: Corrección de errores en código, validaciones o resolución de conflictos de integración.
* `docs`: Inclusión o modificación de documentación técnica (`README.md`, `CONTRIBUTING.md`).
* `chore`: Mantenimiento de configuración general, estructura de carpetas o vinculación de dependencias.

### Normas de Estilo en Commits
1. Redactar el verbo principal en modo imperativo y minúsculas (ejemplo: `feat: agregar...`, no `feat: agregando...`).
2. Longitud máxima recomendada de 50 caracteres para la primera línea.
3. No colocar punto final al cierre de la línea de descripción.

---

## 3. Matriz de Roles y Revisión Cruzada de Pull Requests (PR)

Para habilitar la fusión de cualquier Pull Request hacia la rama `develop`, se requiere un mínimo de **2 aprobaciones obligatorias (`Approved`)** otorgadas por los revisores designados:

| Integrante | Rol en el Proyecto | Componentes Asignados | Revisores Cruzados Oficiales |
| :--- | :--- | :--- | :--- |
| **Cristian** | Frontend / Hero | Header semántico, Navbar y Hero section | Daky / Sonia |
| **Snaider** | Frontend / Producto & Docs | Sección Jordan 1, `CONTRIBUTING.md` y `base.css` | Daky / Sonia |
| **Cesar** | Frontend / Características | Grid de especificaciones técnicas y `.gitignore` | Cristian / Snaider |
| **Joel** | Frontend / Galería | Grid de imágenes interactivas y visor | Cristian / Snaider |
| **Daky** | Frontend / Selector | Selector de colores/modelos y cálculo de precios | Cesar / Joel |
| **Sonia** | Frontend / CTA & Footer | Formulario de reserva, validación y Footer | Cesar / Joel |

### Criterios de Aceptación para Revisores
Los revisores deben auditar la pestaña **Files changed** y verificar:
* Que no se hayan modificado líneas fuera del bloque delimitado por comentarios asignado a cada desarrollador.
* Uso de etiquetas HTML5 semánticas y presencia obligatoria de atributos descriptivos `alt` en imágenes.
* Que los nombres de clases CSS no colisionen con componentes globales de Bootstrap.
* Que el código propuesto no genere desbordamiento (*overflow*) ni errores en consola del navegador.

---

## 4. Estructura de Directorios y Hojas de Estilo

Para prevenir colisiones en la integración de estilos, el repositorio se estructura de manera modular:

```text
├── assets/                  # Recursos gráficos (imágenes del producto y favicon)
├── css/
│   ├── base.css             # Tokens globales, variables de color y tipografías
│   ├── info.css             # Estilos de la sección principal del Jordan 1
│   ├── header-hero.css      # Estilos del encabezado y navegación
│   ├── features.css         # Estilos del grid técnico
│   ├── gallery.css          # Estilos de la galería de imágenes
│   ├── models.css           # Estilos del selector de variantes
│   └── footer.css           # Estilos del pie de página y formulario
├── js/                      # Lógica interactiva modular (.js específicos)
├── CONTRIBUTING.md           # Guía de contribución del repositorio
└── index.html               # Archivo base de integración estructurado por bloques