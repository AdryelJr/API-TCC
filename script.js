const medicamentos = [
    {
        nome: "Paracetamol",
        imagem: "paracetamol.jpg",
        descricao: "Alívio de dores e redução da febre.",
        textoDescricao:"teste"
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

function pesquisarMedicamento(event) {
    event.preventDefault();

    const medicamento = document.getElementById('medicamento').value.toLowerCase();
    const listaResultados = document.getElementById('listaResultados');
    listaResultados.innerHTML = "";

    if (medicamento.trim().length < 3) {
        listaResultados.style.display = 'none';
        return;
    }

    const resultados = medicamentos.filter(med => med.nome.toLowerCase().includes(medicamento));

    if (resultados.length > 0) {
        resultados.forEach(med => {
            const li = document.createElement('li');
            li.textContent = med.nome;
            li.addEventListener('click', () => exibirDetalhes(med));
            listaResultados.appendChild(li);
        });
        listaResultados.style.display = 'flex';
    } else {
        listaResultados.style.display = 'none';
    }
}

function exibirDetalhes(medicamento) {
    const detalhesDiv = document.getElementById('detalhesMedicamento');
    detalhesDiv.innerHTML = `
        <div class="medicamentoSelect">
            <h2>${medicamento.nome}</h2>
            <img src="${medicamento.imagem}" alt="${medicamento.nome}" width="280px">
            <p>${medicamento.descricao}</p>        
        </div>
    `;
}

const inputMedicamento = document.getElementById('medicamento');
inputMedicamento.addEventListener('input', pesquisarMedicamento);




function displayAllMedicamentos() {
    const allMedicamentos = document.getElementById('allMedicamentos');

    // Ordena os medicamentos por nome
    medicamentos.sort(function(a,b){
        const nomeA = a.nome.toLocaleLowerCase();
        const nomeB = b.nome.toLocaleLowerCase();

        if(nomeA < nomeB) return -1;
        if(nomeA > nomeB) return 1;
        return 0;
    });

    let linhaAtual = document.createElement('div');
    linhaAtual.classList.add('linha');

    // Itera sobre os medicamentos
    medicamentos.forEach(function(med, index){
        const card = document.createElement('div');
        card.classList.add('medicamento-card');
        card.innerHTML = `
            <h3 class="cardNome">${med.nome}</h3>
            <img src="${med.imagem}" alt="${med.nome}">
            <p>${med.descricao}</p>
            <button class="btnCards">Saiba mais</button>
        `;

        card.addEventListener('click', function(){
            exibirDetalhes(med);
        });

        linhaAtual.appendChild(card);

        if ((index + 1) % 5 === 0 || index === medicamentos.length - 1) {
            allMedicamentos.appendChild(linhaAtual);
            linhaAtual = document.createElement('div');
            linhaAtual.classList.add('linha');
        }
    });

    allMedicamentos.style.display = 'flex';
}

displayAllMedicamentos();

const btnCard = document.getElementsByClassName('btnCards');

document.addEventListener('click', function(event) {
    if (event.target.classList.contains('btnCards')) {
        window.location.href = 'saibaMais.html';
    }
});


