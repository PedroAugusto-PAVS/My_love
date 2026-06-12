const DATA_NAMORO = new Date("2024-12-20T00:00:00");

function abrirSite() {
  document.querySelector(".hero").style.display = "none";
  document.getElementById("conteudo").style.display = "block";

  const musica = document.getElementById("musica");

  musica.play().catch(() => {
    console.log("Autoplay bloqueado pelo navegador");
  });

  atualizarContador();

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

function atualizarContador() {

  const agora = new Date();

  let diferenca = agora - DATA_NAMORO;

  const segundos = Math.floor(diferenca / 1000);
  const minutos = Math.floor(segundos / 60);
  const horas = Math.floor(minutos / 60);
  const dias = Math.floor(horas / 24);

  const anos = Math.floor(dias / 365);
  const meses = Math.floor((dias % 365) / 30);

  const diasRestantes =
    dias - (anos * 365) - (meses * 30);

  document.getElementById("contador").innerHTML = `
    <div class="tempo-box">
      <strong>${anos}</strong>
      <span>Anos</span>
    </div>

    <div class="tempo-box">
      <strong>${meses}</strong>
      <span>Meses</span>
    </div>

    <div class="tempo-box">
      <strong>${diasRestantes}</strong>
      <span>Dias</span>
    </div>

    <div class="tempo-box">
      <strong>${dias}</strong>
      <span>Total de Dias</span>
    </div>
  `;
}

setInterval(atualizarContador, 1000);

function abrirImagem(src) {

  const modal =
    document.getElementById("modal");

  const imagem =
    document.getElementById("imagemModal");

  imagem.src = src;

  modal.style.display = "flex";
}

function fecharImagem() {

  document.getElementById(
    "modal"
  ).style.display = "none";
}

window.addEventListener(
  "click",
  (e) => {

    const modal =
      document.getElementById(
        "modal"
      );

    if (e.target === modal) {

      fecharImagem();

    }
  }
);

function criarCoracao() {

  const heart =
    document.createElement("div");

  heart.classList.add("heart");

  heart.innerHTML = "❤";

  heart.style.left =
    Math.random() * 100 + "vw";

  heart.style.fontSize =
    Math.random() * 20 + 15 + "px";

  heart.style.animationDuration =
    Math.random() * 3 + 4 + "s";

  document
    .querySelector(".hearts")
    .appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 7000);
}

setInterval(criarCoracao, 450);

const observer =
  new IntersectionObserver(
    (entries) => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          entry.target.style.opacity = 1;

          entry.target.style.transform =
            "translateY(0)";

        }

      });

    },
    {
      threshold: 0.1
    }
  );

window.addEventListener(
  "load",
  () => {

    const elementos =
      document.querySelectorAll(
        "section:not(.hero)"
      );

    elementos.forEach(el => {

      el.style.opacity = 0;

      el.style.transform =
        "translateY(40px)";

      el.style.transition =
        "all .8s ease";

      observer.observe(el);

    });

  }
);