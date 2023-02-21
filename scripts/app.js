/* ===== FUNCIONES PARA EL MENU DE NAVEGACION ===== */
window.addEventListener('scroll', function () {
    const header = MenuNavegacion;
    // const header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 0)
});

function menuToggle() {
    const menuToggle = document.querySelector('.menuToggle');
    const navigation = document.querySelector('.navigation');
    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');
}

/* ===== FUNCIONES LA VENTANA MODAL DE TECNOLOGIAS ===== */

const storeStudies = [
    {
        _id: 1,
        name: 'titulo',
        src: '',
    },
    {
        _id: 2,
        name: 'titulo 2',
        src: '',
    },
    {
        _id: 3,
        name: 'titulo 3',
        src: '',
    },
    {
        _id: 4,
        name: 'titulo 4',
        src: '',
    },
    {
        _id: 5,
        name: 'titulo 5',
        src: './images/R.jpg',
    },
];

function abrirModal(id) {
    MiModal.classList.add('active');

    const estudio = storeStudies.find(e => e._id === id);
    document.querySelector('#MiModal h3').innerHTML = estudio.name;

    document.querySelector('#MiModal img').src ='./images/background_baner.jpg';
}

function cerrarModal() {
    MiModal.classList.remove('active');
}