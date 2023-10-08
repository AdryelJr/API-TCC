
const profileIcon = document.getElementById('profileIcon');
const sidebar = document.querySelector('.sidebar');

profileIcon.addEventListener('click', function(){
    profileIcon.classList.toggle('active');
    sidebar.classList.toggle('active');
    const destaque = document.getElementById('destaque').addEventListener('click', function () {
        sidebar.classList.remove('active');
        profileIcon.classList.remove('active');
    });
    const formPrincipal = document.getElementById('form-principal').addEventListener('click', function () {
        sidebar.classList.remove('active');
        profileIcon.classList.remove('active');
    });
    const pesquisa = document.getElementById('pesquisa').addEventListener('click', function () {
        sidebar.classList.remove('active');
        profileIcon.classList.remove('active');
    });
});




