var selecionaApp = document.querySelector('#app');
var selecionaBotaoSegundaFeira = document.querySelector('.container button#botaoSegundaFeira');
var selecionaBotaTercaFeira = document.querySelector('.container button#botaoTercaFeira');


axios.get('https://api.github.com/users/diego3g')
    .then(function(response) {
        console.log(response);
    })
    .catch(function(error) {
        console.log(error);
    });



function exibeSalasSegundaFeira()
{
    var segundaFeiraSalas = [
        'Sala 01',
        'Sala 02',
        'Sala 03',
        'Sala 04',
        'Sala 05',
        'Sala 06',
        'Sala 07',
        'Sala 08',
        'Sala 101',
        'Sala 103',
        'Sala 105',
        'Sala 106',
        'Sala 107',
        'Sala 108',
        'Sala 202',
        'Sala 205',
        'Sala 206',
        'Sala 207',
        'Sala 208'
    ];

    disciplina = [
        'DIREITOS E GARANTIAS FUNDAMENTAIS',
        'PROCESSO DE CONHECIMENTO',
        'SEMINARIO INTERDISCIPLINAR I',
        'TEORIA DA NORMA E DO CRIME',
        'ORGANIZACAO DO ESTADO',
        'SOCIOLOGIA JURIDICA',
        'DIREITO DO TRABALHO II',
        'OPTATIVA XVIII   DIREITO PROCESSUAL PENAL II',
        'PRÁTICA JURÍDICA - CLINICA CONSTITUCIONAL' ,
        'ORGANIZACAO DO ESTADO',
        'TEORIA GERAL DO PROCESSO',
        'EXECUCAO E CUMPRIMENTO DE SENTENCA',
        'PRÁTICA JURÍDICA - CLINICA ADVIGACIA',
        'POSSE E PROPRIEDADE',
        'DIREITO ADMINISTRATIVO I',
        'SISTEMA RECURSAL DO PROCESSO CIVIL',
        'DIREITO INTERNACIONAL PUBLICO',
        'METODOS DE SOLUCOES DE CONFLITOS',
        'DIREITOS E GARANTIAS FUNDAMENTAIS'
    ];
    criadorDeCards(segundaFeiraSalas);
};

function exibeSalasTercaFeira()
{
    var tercaFeira = ['Sala 01', 'Sala 02', 'Sala 03', 'Sala 04', 'Sala 05', 'Sala 06', 'Sala 07', 'Sala 08'];
    var disciplina = [
        'DIREITOS E GARANTIAS FUNDAMENTAIS',
        'PROCESSO DE CONHECIMENTO',
        'SEMINARIO INTERDISCIPLINAR I',
        'TEORIA DA NORMA E DO CRIME',
        'ORGANIZACAO DO ESTADO',
        'SOCIOLOGIA JURIDICA',
        'DIREITO DO TRABALHO II',
        'OPTATIVA XVIII   DIREITO PROCESSUAL PENAL II',
        'PRÁTICA JURÍDICA - CLINICA CONSTITUCIONAL' ,
        'ORGANIZACAO DO ESTADO',
        'TEORIA GERAL DO PROCESSO',
        'EXECUCAO E CUMPRIMENTO DE SENTENCA',
        'PRÁTICA JURÍDICA - CLINICA ADVIGACIA',
        'POSSE E PROPRIEDADE',
        'DIREITO ADMINISTRATIVO I',
        'SISTEMA RECURSAL DO PROCESSO CIVIL',
        'DIREITO INTERNACIONAL PUBLICO',
        'METODOS DE SOLUCOES DE CONFLITOS',
        'DIREITOS E GARANTIAS FUNDAMENTAIS'
    ];

    criadorDeCards(disciplina);
};


function criadorDeCards(variavel)
{
    selecionaApp.innerHTML = '';

    for(salas of variavel)
    {
        var posicao = variavel.indexOf(salas);

        var criaDiv = document.createElement('div');
        criaDiv.className = 'card my-3 shadow';
        criaDiv.style.borderRadius = '8 px';
            
        var criaTituloCard = document.createElement('h5');
        criaTituloCard.className = 'card-header bg-primary text-white';
        var textoTituloCard = document.createTextNode(salas);
        
        var divBody = document.createElement('div');
        divBody.className = 'card-body';
    
    
        var tituloCardBody = document.createElement('h5');
        tituloCardBody.className = 'card-title';
        var textoTituloCardBody = document.createTextNode('Nome da Disciplina e Nome do Professor');
    
    
        var primeiraLinha = document.createElement('div');
        primeiraLinha.className = 'row';
    
        var textoBody = document.createTextNode('Sala Aberta');

        
        var primeiraColuna = document.createElement('div');
        primeiraColuna.className = 'col'
    
        var segundaColuna = document.createElement('div');
        segundaColuna.className = 'col'


        //CheckBox Test
        var caixinhaSelecao = document.createElement('input');
        caixinhaSelecao.type = 'checkbox';
        caixinhaSelecao.className = 'mx-2';
    
        primeiraColuna.appendChild(textoBody);
        primeiraColuna.appendChild(caixinhaSelecao);
    
        primeiraLinha.appendChild(primeiraColuna);
    
        
        tituloCardBody.appendChild(textoTituloCardBody);
        
        divBody.appendChild(tituloCardBody);
    
        divBody.appendChild(primeiraLinha);
    
    
        criaTituloCard.appendChild(textoTituloCard);
        criaDiv.appendChild(criaTituloCard);
        criaDiv.appendChild(divBody);
    
        selecionaApp.appendChild(criaDiv);
    };
};

selecionaBotaoSegundaFeira.onclick = exibeSalasSegundaFeira;
selecionaBotaTercaFeira.onclick = exibeSalasTercaFeira;