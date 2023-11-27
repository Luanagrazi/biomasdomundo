let titulo     = document.querySelector('h1')
let instrucoes = document.querySelector('#instrucoes')
let aviso      = document.querySelector('#aviso')
let progresso  = document.querySelector('#progresso')
let pontos = 0 // pontos para o placar
let placar = 0 // placar

// AUDIO
let somAcerto   = document.querySelector('#somAcerto')
let somErro     = document.querySelector('#somErro')
let somAplausos = document.querySelector('#somAplausos')

// PERGUNTA
let numQuestao = document.querySelector('#numQuestao')
let pergunta   = document.querySelector('#pergunta')

// ALTERNATIVAS
let a = document.querySelector('#a')
let b = document.querySelector('#b')
let c = document.querySelector('#c')
let d = document.querySelector('#d')

// article com a class questoes
let articleQuestoes = document.querySelector('.questoes')
// ol li com as alternativas
let alternativas = document.querySelector('#alternativas')

const q0 = {
    numQuestao   : 0,
    pergunta     : "Pergunta",
    alternativaA : "Alternativa A",
    alternativaB : "Alternativa B",
    alternativaC : "Alternativa C",
    alternativaD : "Alternativa D",
    correta      : "0",
}
const q1 = {
    numQuestao   : 1,
    pergunta     : "De acordo com Indicadores do Desenvolvimento Sustentável 2012, do Instituto Brasileiro de Geografia e Estatística, o Pampa é o segundo bioma com maior índice de desmatamento do país, com cerca de 54% de sua cobertura vegetal removida até 2009. Sobre as causas e as consequências da degradação desse bioma, é correto afirmar:",
    alternativaA : "Mais de metade da soja produzida no Brasil é cultivada dentro dos limites originais desse bioma, fato que ajuda a explicar o desmatamento.",
    alternativaB : "A pecuária extensiva e a ampliação da área dedicada ao cultivo de arroz figuram entre as principais causas do desmatamento.",
    alternativaC : "O elevado índice de desmatamento resulta, principalmente, da exploração de madeiras de elevado valor comercial.",
    alternativaD : "Nos pampas de Santa Catarina, o desmatamento acelerado está associado à perda de fertilidade dos solos e à ocorrência de extensas manchas de arenização.",
    correta      : "A pecuária extensiva e a ampliação da área dedicada ao cultivo de arroz figuram entre as principais causas do desmatamento.",
}
const q2 = {
    numQuestao   : 2,
    pergunta     : "Qual é o principal fator determinante de um bioma?",
    alternativaA : "Fertilidade do solo.",
    alternativaB : "Altitude.",
    alternativaC : "Clima.",
    alternativaD : "População",
    correta      : "Clima.",
}
const q3 = {
    numQuestao   : 3,
    pergunta     : "(Unesp 2014) Mata de terra firme, mata de várzea e igapó são formações vegetais típicas deste bioma. Em razão do processo de uso e ocupação do território brasileiro e das ações dirigidas à preservação dos recursos naturais realizadas nas últimas décadas, este bioma constitui-se também naquele que guarda as maiores extensões de floresta nativa no Brasil, ainda que seu desmatamento não tenha sido completamente cessado. O texto refere-se ao bioma.",
    alternativaA : "Mata Atlântica.",
    alternativaB : "Pampa.",
    alternativaC : "Caatinga.",
    alternativaD : "Amazônico.",
    correta      : "Amazônico.",
}
const q4 = {
    numQuestao   : 4,
    pergunta     : "Onde você pode encontrar a maior parte das florestas temperadas?",
    alternativaA : "Europa",
    alternativaB : "África",
    alternativaC : "Ásia",
    alternativaD : "América do Sul",
    correta      : "Europa",
}
const q5 = {
    numQuestao   : 5,
    pergunta     : "O Pampa possui um tipo climático diferente de grande parte do território do Brasil. Esse clima é o",
    alternativaA : "semiárido, com elevados volumes anuais de chuvas.",
    alternativaB : "tropical úmido, com duas estações bem definidas.",
    alternativaC : "subtropical, com as quatro estações bem definidas.",
    alternativaD : "tropical, com forte influência da continentalidade.",
    correta      : "subtropical, com as quatro estações bem definidas.",
}
const q6 = {
    numQuestao   : 6,
    pergunta     : "Qual bioma é caracterizado por longos invernos frios, verões quentes e é o lar de coníferas resistentes?",
    alternativaA : "Floresta Tropical.",
    alternativaB : "Taiga.",
    alternativaC : "Deserto",
    alternativaD : "Tundra.",
    correta      : "Taiga.",
}
const q7 = {
    numQuestao   : 7,
    pergunta     : "Que bioma é conhecido por sua vegetação rasteira, precipitação moderada e frequentes incêndios?",
    alternativaA : "Floresta Temperada",
    alternativaB : "Deserto",
    alternativaC : "Padraria",
    alternativaD : "Savana",
    correta      : "Padraria",
}
const q8 = {
    numQuestao   : 8,
    pergunta     : "O bioma da Grande Barreira de Coral é predominantemente:",
    alternativaA : "Deserto.",
    alternativaB : "Mangue.",
    alternativaC : "Recife de coral.",
    alternativaD : "Floresta tropical.",
    correta      : "Recife de coral.",
}
const q9 = {
    numQuestao   : 9,
    pergunta     : "A Mata Atlântica é um bioma existente ao longo de grande parte do litoral brasileiro. Nesse sentido, as suas características geográficas sofrem forte influência da",
    alternativaA : "umidade.",
    alternativaB : "glaciação.",
    alternativaC : "longitude.",
    alternativaD : "radiação.",
    correta      : "radiação.",
}
const q10 = {
    numQuestao   : 10,
    pergunta     : "Assinale a alternativa que indica a melhor definição de bioma",
    alternativaA : "É uma unidade do espaço geográfico que possui características físicas em comum.",
    alternativaB : "É um espaço formado por plantas homogêneas que possuem estrutura semelhante.",
    alternativaC : "É uma área que tem um grande volume de espécies classificadas como endêmicas.",
    alternativaD : " É um recorte espacial que possui somente elementos das paisagens do tipo natural.",
    correta      : "É uma unidade do espaço geográfico que possui características físicas em comum.",
}

// CONSTANTE COM UM ARRAY DE OBJETOS COM TODAS AS QUESTOES
const questoes = [q0, q1, q2, q3, q4, q5, q6, q7, q8, q9, q10]

let numero = document.querySelector('#numero')
let total  = document.querySelector('#total')

numero.textContent = q1.numQuestao

let totalDeQuestoes = (questoes.length)-1
console.log("Total de questões " + totalDeQuestoes)
total.textContent = totalDeQuestoes

// MONTAR A 1a QUESTAO COMPLETA, para iniciar o Quiz
numQuestao.textContent = q1.numQuestao
pergunta.textContent   = q1.pergunta
a.textContent = q1.alternativaA
b.textContent = q1.alternativaB
c.textContent = q1.alternativaC
d.textContent = q1.alternativaD

// CONFIGURAR O VALUE INICIAL DA 1a QUESTAO COMPLETA
a.setAttribute('value', '1A')
b.setAttribute('value', '1B')
c.setAttribute('value', '1C')
d.setAttribute('value', '1D')

// PARA MONTAR AS PROXIMAS QUESTOES
function proximaQuestao(nQuestao) {
    numero.textContent = nQuestao
    numQuestao.textContent = questoes[nQuestao].numQuestao
    pergunta.textContent   = questoes[nQuestao].pergunta
    a.textContent = questoes[nQuestao].alternativaA
    b.textContent = questoes[nQuestao].alternativaB
    c.textContent = questoes[nQuestao].alternativaC
    d.textContent = questoes[nQuestao].alternativaD
    a.setAttribute('value', nQuestao+'A')
    b.setAttribute('value', nQuestao+'B')
    c.setAttribute('value', nQuestao+'C')
    d.setAttribute('value', nQuestao+'D')
    progresso.value = parseInt(progresso.value) + 1
    //console.log(progresso.value)
}

// VERIFICAR DUPLO CLICK NAS ALTERNATIVAS
alternativas.addEventListener('dblclick', () => {
    //console.log('Duplo clique')
    pontos -= 10 // tirar 10 pontos em caso de duplo click
    if(numQuestao.value == 10 && pontos == 110) { pontos = 100 }
})

function bloquearAlternativas() {
    alternativas.classList.add('bloqueado')
}

function desbloquearAlternativas() {
    alternativas.classList.remove('bloqueado')
}

function piscarNoAcerto() {
    articleQuestoes.classList.remove('errou')
    articleQuestoes.classList.add('acertou')
}

function piscarNoErro() {
    articleQuestoes.classList.remove('acertou')
    articleQuestoes.classList.add('errou')
}

function tirarPiscar() {
    articleQuestoes.classList.remove('acertou')
    articleQuestoes.classList.remove('errou')
}

function verificarSeAcertou(nQuestao, resposta) {

    let numeroDaQuestao = nQuestao.value
    console.log("Questão " + numeroDaQuestao)

    let respostaEscolhida = resposta.textContent
    //console.log("RespU " + respostaEscolhida)

    let certa = questoes[numeroDaQuestao].correta
    //console.log("RespC " + certa)

    if(respostaEscolhida == certa) {
        //console.log("Acertou")
        //respostaEsta.textContent = "Correta 😊"
        piscarNoAcerto()
        somAcerto.play()
        pontos += 10 // pontos = pontos + 10
        if(nQuestao.value == 1 && pontos == 20) { pontos = 10 }
    } else {
        //console.log("Errou!")
        //respostaEsta.textContent = "Errada 😢"
        piscarNoErro()
        somErro.play()
    }
    setTimeout(() => {
        tirarPiscar()
    }, 150);
    
    // atualizar placar
    placar = pontos
    instrucoes.textContent = "Pontos " + placar

    // bloquear a escolha de opcoes
    bloquearAlternativas()

    setTimeout(function() {

        proxima = numeroDaQuestao+1

        if(proxima > totalDeQuestoes) {
            console.log('Fim do Jogo!')
            fimDoJogo()
        } else {
            proximaQuestao(proxima)
        }
    }, 150)
    desbloquearAlternativas()
}

function fimDoJogo() {

    somAplausos.play()

    let s = 's'
    pontos == 0 ? s = '' : s = s
    instrucoes.textContent = "Fim de Jogo! Você conseguiu " + pontos + " ponto"+ s

    instrucoes.classList.add('placar')

    // OCULTAR O ARTICLE DA QUESTAO
    articleQuestoes.style.display = 'none'

    setTimeout(function() {
        pontos = 0 // zerar placar
        //location.reload();
        instrucoes.classList.remove('placar')
        // REINICIAR O JOGO
        articleQuestoes.style.display = 'block'
        proximaQuestao(1)
        instrucoes.textContent = 'Leia a questão e clique na resposta correta'
    }, 8000)

}