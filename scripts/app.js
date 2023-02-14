/* ============================== FUNCIONES PARA EL MENU DE NAVEGACION ============================== */
window.addEventListener('scroll', function () {
    const header = navBar;
    // const header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 0)
});

function menuToggle() {
    const menuToggle = document.querySelector('.menuToggle');
    const navigation = document.querySelector('.navigation');
    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');
}

/* ============================== STORE PARA LA VENTANA MODAL DE LOS ESTUDIOS ============================== */

const storeStudies = [
    {
        title: 'titulo 1',
        content: 'a',
    },
    {
        title: 'titulo 2',
        content: 'b',
    },
    {
        title: 'titulo 3',
        content: 'c',
    },
    {
        title: 'titulo 4',
        content: 'd',
    },
    {
        title: 'titulo 5',
        content: 'e',
    },
];

function openMyModal(params) {
    const modal = document.getElementById("myModal");
}

// Obtener la ventana modal


// Obtener el elemento span que cierra la ventana modal
var span = document.getElementsByClassName("close")[0];

// Cuando se hace clic en el botón, abrir la ventana modal 
btn.onclick = function () {
    modal.style.display = "block";
}

// Cuando se hace clic en el elemento span (x), cerrar la ventana modal
span.onclick = function () {
    modal.style.display = "none";
}

// Cuando se hace clic fuera de la ventana modal, cerrarla
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

/* ============================== VENTANA MODAL EN ESTUDIOS REALIZADOS  ============================== */


/* ============================== TARJETAS EXPANDIBLES PARA LA SECCION DE EXPERIENCIA LABORAL  ============================== */

const cardsExpand = document.querySelectorAll(".expand-card");

cardsExpand.forEach(function (expandButton) {
    expandButton.addEventListener("click", function () {
        let description = expandButton.querySelectorAll(":scope > .card-description");
        // description = this.previousElementSibling;
        if (description[0].style.maxHeight) {
            description[0].style.maxHeight = null;
        } else {
            description[0].style.maxHeight = description[0].scrollHeight + "px";
        }
    });
});
