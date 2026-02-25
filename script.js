const barra = document.getElementById("barra");
const textoNivel = document.getElementById("nivel");
const btnAumentar = document.getElementById("btnAumentar");
const btnResetar = document.getElementById("btnResetar");
const btnFinalizar = document.getElementById("btnFinalizar");
const container = document.getElementById("container");

const resultado = document.getElementById("resultado");
const mensagem = document.getElementById("mensagem");
const versiculo = document.getElementById("versiculo");
const imagemResultado = document.getElementById("imagemResultado");
const conselho = document.getElementById("conselho");

let nivel = localStorage.getItem("nivelAlegria");

if (nivel === null) {
  nivel = 0;
} else {
  nivel = parseInt(nivel);
}

atualizarTela();

btnAumentar.addEventListener("click", () => {
  if (nivel < 100) {
    nivel += 10;

    textoNivel.style.transform = "scale(1.2)";
    setTimeout(() => {
      textoNivel.style.transform = "scale(1)";
    }, 200);
  }

  if (nivel === 10) {
    mostrarNotificacao(
      "Deus ainda tem rios de alegria para derramar sobre você."
    );
  } else if (nivel === 40) {
    mostrarNotificacao("Deus está derramando paz e alegria neste momento.");
  }  else if (nivel === 80) {
    mostrarNotificacao("Hoje tem alegria suficiente para sustentar seu coração.");
  } else if (nivel === 100) {
    mostrarNotificacao("É oficial: estou 100% feliz!");
  }

  salvar();
  atualizarTela();
});

btnResetar.addEventListener("click", () => {
  nivel = 0;

  container.style.display = "block";
  textoNivel.style.display = "block";
  resultado.style.display = "none";

  salvar();
  atualizarTela();
});

btnFinalizar.addEventListener("click", () => {
  container.style.display = "none";
  textoNivel.style.display = "none";
  resultado.style.display = "block";

  alert(
    "O número não mede espiritualidade. Ele só nos ajuda a refletir de onde nossa alegria tem vindo."
  );

  if (nivel < 50) {
    mensagem.innerText =
      "Hoje percebemos que nossa alegria andou meio sensível às circunstâncias… e tudo bem reconhecer isso.";

    versiculo.innerText =
      "📖 Gálatas 5:22 — 'O fruto do Espírito é alegria...'";

    imagemResultado.src = "./imagens/triste.png";

    conselho.innerText =
      "🧭 Conselho prático:\n" +
      "• Separe 10 minutos diários para gratidão.\n" +
      "• Ore antes de reagir às situações difíceis.\n" +
      "• Lembre-se: alegria não é ausência de problema, é presença de Deus.";
  } else if (nivel >= 50 && nivel < 100) {
    mensagem.innerText =
      "Nossa alegria apareceu em vários momentos… mas ainda oscila quando as coisas apertam.";

    versiculo.innerText =
      "📖 Romanos 15:13 — 'Que o Deus da esperança os encha de toda alegria e paz.'";

    imagemResultado.src = "./imagens/medio.jpeg";

    conselho.innerText =
      "🧭 Conselho prático:\n" +
      "• Continue cultivando comunhão.\n" +
      "• Compartilhe testemunhos com frequência.\n" +
      "• Fortaleça hábitos espirituais nos dias comuns.";
  } else {
    mensagem.innerText =
      "Que coisa linda! Nossa alegria hoje mostrou firmeza e constância.";

    versiculo.innerText = "📖 Filipenses 4:4 — 'Alegrai-vos sempre no Senhor.'";

    imagemResultado.src = "./imagens/feliz.jpeg";

    conselho.innerText =
      "🧭 Conselho prático:\n" +
      "• Continue sendo fonte de encorajamento para outros.\n" +
      "• Proteja seu tempo com Deus.\n" +
      "• Lembre-se: alegria também é missão.";
  }
});

function salvar() {
  localStorage.setItem("nivelAlegria", nivel);
}

function atualizarTela() {
  barra.style.height = nivel + "%";
  textoNivel.innerText = "Nível: " + nivel;
  textoNivel.style.transform = "scale(1.15)";
  setTimeout(() => {
    textoNivel.style.transform = "scale(1)";
  }, 150);

  atualizarCor();
}

function atualizarCor() {
  if (navigator.vibrate) {
    navigator.vibrate(100);
  }

  let corAtual = "";
  if (nivel < 40) {
    corAtual = "#ef5350";
  } else if (nivel >= 40 && nivel < 80) {
    corAtual = "#ffca28";
  } else {
    corAtual = "#66bb6a";
  }

  barra.style.background = corAtual;
  container.style.borderColor = corAtual;

  container.style.boxShadow = `0 0 25px ${corAtual}44`;
}

function mostrarNotificacao(frase) {
  const notificacao = document.getElementById("notificacao");
  const texto = document.getElementById("textoNotificacao");

  texto.innerText = frase;

  notificacao.classList.add("mostrar");

  setTimeout(() => {
    notificacao.classList.remove("mostrar");
  }, 3500);
}
