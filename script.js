const medicamentos = [
    {
        nome: "Paracetamol",
        imagem: "paracetamol.jpg",
        descricao: "Alívio de dores e redução da febre."
    },
    {
        nome: "Ibuprofeno",
        imagem: "ibuprofeno.jpg",
        descricao: "Anti-inflamatório e analgésico."
    },
    {
        nome: "Omeprazol",
        imagem: "https://santaluciadrogaria.vtexassets.com/arquivos/ids/159851-800-auto?v=637638047999330000&width=800&height=auto&aspect=true",
        descricao: "Redução da produção de ácido no estômago."
    },
    {
        nome: "Amoxicilina",
        imagem: "amoxicilina.jpg",
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
        imagem: "vitaminac.jpg",
        descricao: "Suplemento de vitamina C."
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
        listaResultados.style.display = 'block';
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

for(var i; medicamentos.length > i; i++){
    console.log(i);
}