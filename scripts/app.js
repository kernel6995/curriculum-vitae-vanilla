/* ============================== FUNCIONES PARA EL MENU DE NAVEGACION ============================== */
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
