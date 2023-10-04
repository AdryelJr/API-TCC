const listaRemedios = [
    {
        nome: "Paracetamol",
        imagem: "paracetamol.jpg",
        descricao: "Alívio de dores e redução da febre.",
        textoDescricao: "...",
        composicao: "...",
        valor: "00.00",
    },
    {
        nome: "Ibuprofeno",
        imagem: "ibuprofeno.jpg",
        descricao: "Anti-inflamatório e analgésico.",
        categoria: ["dor", "inflamação"]
    },
    {
        nome: "Omeprazol",
        imagem: "https://santaluciadrogaria.vtexassets.com/arquivos/ids/159851-800-auto?v=637638047999330000&width=800&height=auto&aspect=true",
        descricao: "Redução da produção de ácido no estômago."
    },
    {
        nome: "Amoxicilina",
        imagem: "https://www.equipofarma.com.br/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/4/0/408358133183am.jpg",
        descricao: "Antibiótico de amplo espectro."
    },
    {
        nome: "Dipirona",
        imagem: "https://io.convertiez.com.br/m/drogal/shop/products/images/3970021/large/dipirona-1g-prati-donaduzzi-10-comprimidos_1726.png",
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
        imagem: "./img/vitaminac.png",
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


