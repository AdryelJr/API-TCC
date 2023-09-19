document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const nomeMedicamento = urlParams.get('nome');
    const descricaoMedicamento = urlParams.get('descricao');
    const imagemMedicamento = urlParams.get('imagem');

    const infoMedicamento = document.getElementById('infoMedicamento');
    infoMedicamento.innerHTML = `
        <img>${imagemMedicamento}</img>
        <h2>${nomeMedicamento}</h2>
        <p>${descricaoMedicamento}</p>
    `;
});
