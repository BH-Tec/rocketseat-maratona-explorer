const elementoResposta = document.querySelector('#resposta');
const inputPergunta = document.querySelector('#pergunta');
const buttonPerguntar = document.querySelector('#buttonPerguntar');
const respostas = [
  "Certeza!",
  "Não tenho tanta certeza.",
  "É decididamente assim.",
  "Não conte com isso.",
  "Sem dúvidas!",
  "Pergunte novamente mais tarde.",
  "Sim, definitivamente!",
  "Minha resposta é não.",
  "Você pode contar com isso.",
  "Melhor não te dizer agora.",
  "A meu ver, sim.",
  "Minhas fontes dizem não.",
  "Provavelmente.",
  "Não é possível prever agora.",
  "Perspectiva boa.",
  "As perspectivas não são tão boas.",
  "Sim.",
  "Concentre-se e pergunte novamente.",
  "Sinais apontam que sim.",
]
// frases cavaleiros do zódiaco
const respostasCdZ = [
  "Você é bonito só por fora, mas o seu coração é horrível como de uma besta. Deveria ver o que na realidade, você é.",
  "Só aqueles que desistiram de viver acham que os sonhos são impossíveis.",
  "Nenhum golpe funciona duas vezes no mesmo Cavaleiro.",
  "Como você pode falar de coração e sentimentos, quando suas entranhas estão podres.",
  "Somos separados daqueles que amamos, e enfrentar essa dor nos torna ainda mais fortes.",
  "Não importa quantas vezes eu morra, como a Fênix, eu renasço das cinzas",
  "Quando se quer enganar o inimigo é preciso começar enganando os amigos",
  "O céu, o mar e as estrelas. Tudo isso é insignificante perto da minha força.",
  "Eu vou sim para o inferno, e você será meu guia. Avê Fenix!",
  "Só porque você é uma criança, não significa que pode ser mimado.",
  "Os mais fortes têm o privilégio especial de atacar os fracos e indefesos.",
]

// clicar em fazer pergunta
function fazerPergunta() {

  // valida se o input está vazio
  if(inputPergunta.value == "") {
    alert("Digite a sua pergunta");
    return
  }

  // desabilita o botão
  buttonPerguntar.setAttribute('disabled', true);

  // exibe a pergunta
  const pergunta = "<div>" + inputPergunta.value + "</div>";

  // gerar um número aleatório
  // const totalRespostas = respostas.length;
        //base respostas de cavaleiros do zodiaco
  const totalRespostas = respostasCdZ.length;

  const numeroAleatorio = Math.floor(Math.random() * totalRespostas);

  // exibir a resposta
  // elementoResposta.innerHTML = pergunta + respostas[numeroAleatorio];
        // exibir a resposta cavaleiro do zodiaco
  elementoResposta.innerHTML = pergunta + respostasCdZ[numeroAleatorio];
  
  elementoResposta.style.opacity = 1;

  // sumir a resposta apos 3 segundos
  setTimeout(function() {
    elementoResposta.style.opacity = 0;
    buttonPerguntar.removeAttribute('disabled');
  }, 7000);
}