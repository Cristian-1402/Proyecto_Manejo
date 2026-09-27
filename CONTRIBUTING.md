# Guía de Contribución - Proyecto Landing Page Jordan 1 (UTA)

Para garantizar un flujo de trabajo ordenado y reproducible bajo la metodología GitFlow, todos los integrantes deben respetar las siguientes directrices:

## 1. Políticas de Ramas (GitFlow)
- Queda terminantemente prohibido realizar commits directos sobre las ramas `main` y `develop`.
- Toda nueva característica o ajuste estructural debe originarse a partir de la rama `develop` bajo el formato `feature/<nombre-feature>`.
- Ninguna rama `feature` debe eliminarse tras su integración para permitir la trazabilidad completa del árbol de red.

## 2. Convención de Mensajes de Commit (Conventional Commits 1.0.0)
Los mensajes deben estructurarse de la forma `tipo(alcance): descripción`:
- `feat:` Nuevas secciones o elementos estructurales.
- `style:` Reglas de diseño CSS, fuentes y adaptación responsive.
- `docs:` Cambios o anexos en la documentación (`README.md`, `CONTRIBUTING.md`).
- `chore:` Tareas de mantenimiento o configuración general.

*Reglas de formato:* Verbo imperativo, minúsculas tras los dos puntos, longitud máxima de 50 caracteres y sin punto final.

## 3. Revisión de Pull Requests (Revisión Cruzada por Pares)
- Todo Pull Request debe dirigirse obligatoriamente a la rama `develop`.
- Cada PR requiere un mínimo de **2 aprobaciones obligatorias** antes de habilitar la combinación (*merge*).
- Los revisores asignados deben examinar los cambios línea por línea y registrar retroalimentación técnica o validación de accesibilidad.