// =========================
// ABRIR SURPRESA
// =========================

function abrirSite() {

  document.querySelector(".hero").style.display = "none";

  document.getElementById("conteudo").style.display = "block";

  const musica =
    document.getElementById("musica");

  musica.play().catch(() => {
    console.log("Autoplay bloqueado");
  });

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}

// =========================
// CONTADOR
// =========================

const dataInicio =
new Date("2024-12-20T00:00:00");

function atualizarContador() {

  const agora =
  new Date();

  const diferenca =
  agora - dataInicio;

  const dias =
  Math.floor(
    diferenca /
    (1000 * 60 * 60 * 24)
  );

  const horas =
  Math.floor(
    (diferenca /
    (1000 * 60 * 60))
    % 24
  );

  const minutos =
  Math.floor(
    (diferenca /
    (1000 * 60))
    % 60
  );

  const segundos =
  Math.floor(
    (diferenca /
    1000)
    % 60
  );

  document.getElementById(
    "contador"
  ).innerHTML = `

    <div class="tempo-box">
      <strong>${dias}</strong>
      <span>Dias</span>
    </div>

    <div class="tempo-box">
      <strong>${horas}</strong>
      <span>Horas</span>
    </div>

    <div class="tempo-box">
      <strong>${minutos}</strong>
      <span>Minutos</span>
    </div>

    <div class="tempo-box">
      <strong>${segundos}</strong>
      <span>Segundos</span>
    </div>

  `;

}

setInterval(
  atualizarContador,
  1000
);

atualizarContador();

// =========================
// MODAL DE IMAGEM
// =========================

function abrirImagem(src) {

  const modal =
  document.getElementById(
    "modal"
  );

  const imagem =
  document.getElementById(
    "imagemModal"
  );

  imagem.src = src;

  modal.style.display =
  "flex";

}

function fecharImagem() {

  document.getElementById(
    "modal"
  ).style.display =
  "none";

}

// Fecha ao clicar fora

document.addEventListener(
  "click",
  (e) => {

    const modal =
    document.getElementById(
      "modal"
    );

    if (
      e.target === modal
    ) {
      fecharImagem();
    }

  }
);

// =========================
// CORAÇÕES FLUTUANDO
// =========================

function criarCoracao() {

  const hearts =
  document.querySelector(
    ".hearts"
  );

  const heart =
  document.createElement(
    "div"
  );

  heart.classList.add(
    "heart"
  );

  heart.innerHTML = "❤️";

  heart.style.left =
    Math.random() * 100 + "%";

  heart.style.fontSize =
    Math.random() * 20 + 15 + "px";

  heart.style.animationDuration =
    Math.random() * 3 + 4 + "s";

  hearts.appendChild(
    heart
  );

  setTimeout(() => {

    heart.remove();

  }, 7000);

}

setInterval(
  criarCoracao,
  500
);

// =========================
// ANIMAÇÃO AO ROLAR
// =========================

const observer =
new IntersectionObserver(

(entries) => {

  entries.forEach(
    (entry) => {

      if (
        entry.isIntersecting
      ) {

        entry.target.style.opacity =
        "1";

        entry.target.style.transform =
        "translateY(0)";

      }

    }
  );

},
{
  threshold: 0.15
}
);

window.addEventListener(
  "load",
  () => {

    document
    .querySelectorAll(
      "section"
    )
    .forEach(
      (sec) => {

        sec.style.opacity =
        "0";

        sec.style.transform =
        "translateY(50px)";

        sec.style.transition =
        "all .8s ease";

        observer.observe(
          sec
        );

      }
    );

  }
);

// =========================
// EFEITO PARALLAX
// =========================

window.addEventListener(
  "scroll",
  () => {

    const scroll =
    window.pageYOffset;

    const capa =
    document.querySelector(
      ".hero-bg"
    );

    if(capa){

      capa.style.transform =
      `translateY(${
        scroll * 0.4
      }px)`;

    }

  }
);

// =========================
// SLIDESHOW FINAL
// =========================

const fotosFinal = [

  "img/foto1.jpg",
  "img/foto2.jpg",
  "img/foto3.jpg",
  "img/foto4.jpg",
  "img/foto5.jpg",
  "img/foto6.jpg",
  "img/foto7.jpg",
  "img/foto8.jpg"

];

let indiceFoto = 0;

setInterval(() => {

  const final =
  document.querySelector(
    ".final"
  );

  if(!final) return;

  indiceFoto++;

  if(
    indiceFoto >=
    fotosFinal.length
  ){

    indiceFoto = 0;

  }

  final.style.backgroundImage =
  `url('${fotosFinal[indiceFoto]}')`;

}, 5000);

// =========================
// MENSAGEM ESPECIAL
// =========================

console.log(`
❤️ Feliz Dia dos Namorados ❤️

Pedro + Amor da Vida

Desde 20/12/2024
Até o infinito.
`);