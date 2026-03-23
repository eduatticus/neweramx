document.addEventListener("DOMContentLoaded", () => {
    const opiniones = [
        { nombre: "Claudio Castillo", comentario: "¡Me encantó mi gorra! El diseño es tal cual se ve en la foto y la calidad es excelente. Definitivamente volveré a comprar aquí.", imagen: "img/testimonios/IMG_188683211434122.jpeg" },
        { nombre: "Gabriela Garcia Flores ", comentario: "El envío fue súper rápido y la gorra llegó en perfectas condiciones. El material se siente muy bien, de inmedianto sabes que es la real", imagen: "img/testimonios/2.jpg" },
        { nombre: "Mario Guadalupe Mojica", comentario: "Servicio al cliente de 10. Tuve una duda con mi pedido y me respondieron de inmediato y de forma muy amable. La gorra, por cierto, es fantástica", imagen: "img/testimonios/3.jpg" },
        { nombre: "Christian Riveros", comentario: "Justo lo que buscaba! El ajuste es perfecto y los colores son muy vivos. Gran relación calidad-precio", imagen: "img/testimonios/4.jpg" },
        { nombre: "Lili Rosas ", comentario: "Es mi segunda compra en esta tienda y, como siempre, todo perfecto. El paquete llegó a tiempo y la gorra es hermosa", imagen: "img/testimonios/8.jpg" },
        { nombre: "Jhonny Alaniz Arguelles", comentario: "La atención fue genial y el proceso de compra muy sencillo. Estoy muy contento con mi gorra, se ha convertido en mi favorita", imagen: "img/testimonios/5.jpg" },
        { nombre: "Rogelio Munguia", comentario: "El empaque es muy cuidado, lo que me dio confianza de que el producto llegaría bien. Y así fue, mi gorra es espectacular", imagen: "img/testimonios/6.jpg" },
        { nombre: "Mariana Calvo Hdz", comentario: "Compré un par de gorras para un regalo y a la persona le encantaron. El diseño es original y la calidad se nota", imagen: "img/testimonios/7.jpg" },
        { nombre: "Guillermo Velasco", comentario: "Me sorprendió la rapidez del envío. La gorra me llegó mucho antes de lo esperado y es exactamente lo que pedí", imagen: "img/testimonios/10.jpg" },
        { nombre: "Martin Zamudio", comentario: "La tela es muy cómoda y transpirable, ideal para el calor. La gorra es de muy buena calidad y se ve muy duradera", imagen: "img/testimonios/11.jpg" },
        { nombre: "Antonio Quezada", comentario: "No duden en comprar aquí. El seguimiento del pedido fue muy claro y la gorra superó mis expectativas", imagen: "img/testimonios/12.jpg" },
        { nombre: "Lucero Baltazar", comentario: "El detalle del logo bordado es impecable Muy feliz con mi compra", imagen: "img/testimonios/9.jpg" }
    ];

    let startIndex = 0;
    const container = document.getElementById("opinionContainer");

    function mostrarOpiniones() {
        if (!container) return; // avoid error if element not found
        container.innerHTML = ""; 

        for (let i = 0; i < 3; i++) {
            const index = (startIndex + i) % opiniones.length;
            const { nombre, comentario, imagen } = opiniones[index];

            const div = document.createElement("div");
            div.className = "opinion";
            div.innerHTML = `
                <img src="${imagen}" alt="${nombre}">
                <h3>${nombre}</h3>
                <p>"${comentario}"</p>
            `;
            container.appendChild(div);
        }

        startIndex = (startIndex + 3) % opiniones.length;
    }

    mostrarOpiniones();
    setInterval(mostrarOpiniones, 8000);
});
