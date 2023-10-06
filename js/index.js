function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('active');
}
const sidebar = document.querySelector('.sidebar');
const pesquisa = document.getElementById('pesquisa').addEventListener('click', function () {
    sidebar.classList.remove('active');
});
const destaque = document.getElementById('destaque').addEventListener('click', function () {
    sidebar.classList.remove('active');
});
const formPrincipal = document.getElementById('form-principal').addEventListener('click', function () {
    sidebar.classList.remove('active');
});



