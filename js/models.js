// Lógica de interacción para la sección de Modelos - Daky
document.addEventListener('DOMContentLoaded', () => {
    const botonesModelos = document.querySelectorAll('#modelos .btn-outline-dark');

    botonesModelos.forEach((boton, index) => {
        boton.addEventListener('click', (e) => {
            e.preventDefault();
            alert(`¡Has seleccionado ver las opciones detalladas del modelo #${index + 1}!`);
        });
    });
});