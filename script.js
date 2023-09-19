// Array de medicamentos
const medicamentos = [
    {
        nome: "Medicamento 1",
        imagem: "imagem1.jpg",
        descricao: "Descrição do Medicamento 1."
    },
    {
        nome: "Medicamento 2",
        imagem: "imagem2.jpg",
        descricao: "Descrição do Medicamento 2."
    },
    {
        nome: "Medicamento 3",
        imagem: "imagem3.jpg",
        descricao: "Descrição do Medicamento 3."
    },
    {
        nome: "Medicamento 4",
        imagem: "imagem4.jpg",
        descricao: "Descrição do Medicamento 4."
    },
    {
        nome: "Medicamento 5",
        imagem: "imagem5.jpg",
        descricao: "Descrição do Medicamento 5."
    },
    {
        nome: "Medicamento 6",
        imagem: "imagem1.jpg",
        descricao: "Descrição do Medicamento 1."
    },
    {
        nome: "Medicamento 7",
        imagem: "imagem2.jpg",
        descricao: "Descrição do Medicamento 2."
    },
    {
        nome: "Medicamento 8",
        imagem: "imagem3.jpg",
        descricao: "Descrição do Medicamento 3."
    },
    {
        nome: "Medicamento 9",
        imagem: "imagem4.jpg",
        descricao: "Descrição do Medicamento 4."
    },
    {
        nome: "Medicamento 10",
        imagem: "imagem5.jpg",
        descricao: "Descrição do Medicamento 5."
    },
    {
        nome: "Medicamento 11",
        imagem: "imagem1.jpg",
        descricao: "Descrição do Medicamento 1."
    },
    {
        nome: "Medicamento 12",
        imagem: "imagem2.jpg",
        descricao: "Descrição do Medicamento 2."
    },
    {
        nome: "Medicamento 13",
        imagem: "imagem3.jpg",
        descricao: "Descrição do Medicamento 3."
    },
    {
        nome: "Medicamento 14",
        imagem: "imagem4.jpg",
        descricao: "Descrição do Medicamento 4."
    },
    {
        nome: "ozempic",
        imagem: "imagem5.jpg",
        descricao: "Descrição do Medicamento 5."
    },
    {
        nome: "Dipirona",
        imagem: "https://farma22.vtexassets.com/arquivos/ids/184751-800-450?v=638133589433970000&width=800&height=450&aspect=true",
        descricao:"Descrição da dipirona"
    }
];

function pesquisarMedicamento(event) {
    event.preventDefault();
    
    const medicamento = document.getElementById('medicamento').value.toLowerCase();
    const listaResultados = document.getElementById('listaResultados');
    listaResultados.innerHTML = '';

    if (medicamento.trim().length < 3) {
        listaResultados.style.display = 'none'; /* Esconde a lista se o campo estiver vazio */
        return;
    }

    const resultados = medicamentos.filter(med => med.nome.toLowerCase().includes(medicamento));

    if (resultados.length > 0) {
        resultados.forEach(med => {
            const li = document.createElement('li');
            li.textContent = med.nome;
            li.addEventListener('click', () => preencherCampo(med));
            listaResultados.appendChild(li);
        });
        listaResultados.style.display = 'block'; /* Mostra a lista de resultados */
    } else {
        listaResultados.style.display = 'none'; /* Esconde a lista se não houver resultados */
    }
}


function preencherCampo(medicamento) {
    document.getElementById('medicamento').value = medicamento.nome;
    window.location.href = `info_medicamento.html?nome=${medicamento.nome}&descricao=${medicamento.descricao}`;
}

const inputMedicamento = document.getElementById('medicamento');
inputMedicamento.addEventListener('input', pesquisarMedicamento);
