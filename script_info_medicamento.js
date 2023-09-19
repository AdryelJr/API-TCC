document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const nomeMedicamento = urlParams.get('nome');
    const descricaoMedicamento = urlParams.get('descricao');

    const infoMedicamento = document.getElementById('infoMedicamento');
    infoMedicamento.innerHTML = `
        <h2>${nomeMedicamento}</h2>
        <p>${descricaoMedicamento}</p>
    `;
});
