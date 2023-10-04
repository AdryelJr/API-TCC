const listaRemedios = [
    {
        nome: "Paracetamol",
        imagem: "https://i.pinimg.com/564x/af/bd/74/afbd74d79fe68f8c7386f8e0a1c780a7.jpg",
        descricao: "Alívio de dores e redução da febre.",
        textoDescricao: "...",
        composicao: "...",
        valor: "00.00",
    },
    {
        nome: "Ibuprofeno",
        imagem: "https://i.pinimg.com/564x/9d/21/a3/9d21a3f3ed09ddafe2ba6556f8cb9559.jpg",
        descricao: "Anti-inflamatório e analgésico.",
        categoria: ["dor", "inflamação"]
    },
    {
        nome: "Omeprazol",
        imagem: "https://i.pinimg.com/564x/69/f7/97/69f79736d111eb11b8d2268c9d5b98c6.jpg",
        descricao: "Redução da produção de ácido no estômago."
    },
    {
        nome: "Amoxicilina",
        imagem: "https://i.pinimg.com/564x/eb/13/1a/eb131a208382fa689d5e5cd21cade99b.jpg",
        descricao: "Antibiótico de amplo espectro."
    },
    {
        nome: "Dipirona",
        imagem: "https://i.pinimg.com/564x/67/dc/5b/67dc5bc48783733491107d76cb8f9a63.jpg",
        descricao: "Analgésico e antipirético."
    },
    {
        nome: "Cetirizina",
        imagem: "cetirizina.jpg",
        descricao: "Antialérgico."
    },
    {
        nome: "Aspirina",
        imagem: "aspirina.jpg",
        descricao: "Analgésico e anti-inflamatório."
    },
    {
        nome: "Sinvastatina",
        imagem: "sinvastatina.jpg",
        descricao: "Redução do colesterol."
    },
    {
        nome: "Losartana",
        imagem: "losartana.jpg",
        descricao: "Controle da pressão arterial."
    },
    {
        nome: "Metformina",
        imagem: "metformina.jpg",
        descricao: "Controle da glicose no sangue."
    },
    {
        nome: "Fluoxetina",
        imagem: "fluoxetina.jpg",
        descricao: "Antidepressivo."
    },
    {
        nome: "Atorvastatina",
        imagem: "atorvastatina.jpg",
        descricao: "Redução do colesterol."
    },
    {
        nome: "Cloridrato de Ciprofloxacino",
        imagem: "ciprofloxacino.jpg",
        descricao: "Antibiótico de amplo espectro."
    },
    {
        nome: "Dorflex",
        imagem: "dorflex.jpg",
        descricao: "Analgésico e relaxante muscular."
    },
    {
        nome: "Doril",
        imagem: "doril.jpg",
        descricao: "Analgésico e antipirético."
    },
    {
        nome: "Mylanta",
        imagem: "mylanta.jpg",
        descricao: "Alívio de azia e má digestão."
    },
    {
        nome: "Buscopan",
        imagem: "buscopan.jpg",
        descricao: "Alívio de cólicas e dores abdominais."
    },
    {
        nome: "Dramin",
        imagem: "dramin.jpg",
        descricao: "Antialérgico e antiemético."
    },
    {
        nome: "Rivotril",
        imagem: "rivotril.jpg",
        descricao: "Ansiolítico e antiepilético."
    },
    {
        nome: "Ranitidina",
        imagem: "ranitidina.jpg",
        descricao: "Redução da produção de ácido no estômago."
    },
    {
        nome: "Vitamina C",
        imagem: "https://i.pinimg.com/564x/9a/d0/fd/9ad0fde6748008f5005b15c327de614a.jpg",
        descricao: "Suplemento de vitamina C."
    },
    {
        nome: "Vitamina D",
        imagem: "vitaminad.jpg",
        descricao: "Suplemento de vitamina D."
    },
    {
        nome: "Vitamina D",
        imagem: "vitaminad.jpg",
        descricao: "Suplemento de vitamina D."
    },
    {
        nome: "Vitamina D",
        imagem: "vitaminad.jpg",
        descricao: "Suplemento de vitamina D."
    },
    {
        nome: "Vitamina D",
        imagem: "vitaminad.jpg",
        descricao: "Suplemento de vitamina D."
    }
];





function toggleListaResultados(visivel) {
    const listaResultados = document.getElementById('listaResultados');
    listaResultados.classList.toggle('visible', visivel);
}

function pesquisarMedicamento(event) {
    event.preventDefault();

    const inputPrincipal = document.getElementById('inputPrincipal').value.toLowerCase();
    const listaResultados = document.getElementById('listaResultados');
    listaResultados.innerHTML = "";

    if (inputPrincipal.trim().length < 3) {
        toggleListaResultados(false);
        return;
    }

    const resultados = listaRemedios.filter(med => med.nome.toLowerCase().includes(inputPrincipal));

    if (resultados.length > 0) {
        resultados.forEach(med => {
            const li = document.createElement('li');
            li.innerHTML = `
                <span class= "result-lista">${med.nome}</span>
                <img class="result-img" src="${med.imagem}" alt="${med.nome}" width="60px">
            `;
            li.addEventListener('click', () => exibirDetalhes(med));
            listaResultados.appendChild(li);
        });
        toggleListaResultados(true);
        document.querySelector('body').addEventListener('click', function () {
            toggleListaResultados(false);
        })
    } else {
        toggleListaResultados(false);
    }
}










document.getElementById('detalhesMedicamento').classList.add('mostrar');

const inputMedicamento = document.getElementById('inputPrincipal');
inputMedicamento.addEventListener('input', pesquisarMedicamento);

toggleListaResultados(false);


