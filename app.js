/* Função que direciona cada item da NavBar para sua secction */
$(document).ready(function () {
  // Seleciona todos os links da barra de navegação
  var links = $("nav a");

  // Adiciona um listener de clique a cada link
  links.on("click", function (event) {
    // Previne o comportamento padrão do link
    event.preventDefault();

    // Obtém o alvo da rolagem com base no atributo href do link
    var targetId = $(this).attr("href").substring(1);
    var targetElement = $("#" + targetId);

    // Rola suavemente até o elemento de destino
    if (targetElement.length) {
      $("html, body").animate(
        {
          scrollTop: targetElement.offset().top
        },
        "slow"
      );
    }
  });
});

/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////

/* Função que ao clicar no botão, ele ira jogar a tela para o TOPO */
$(document).ready(function () {
  const btn = $("#btnTop");

  btn.on("click", function () {
    smoothScrollTo(0, 0, 400);
  });

  // Função de rolagem suave
  function smoothScrollTo(endX, endY, duration) {
    const startX = $(window).scrollLeft() || $(window).scrollLeft();
    const startY = $(window).scrollTop() || $(window).scrollTop();
    const distanceX = endX - startX;
    const distanceY = endY - startY;
    const startTime = new Date().getTime();

    duration = typeof duration !== "undefined" ? duration : 400;

    const easeInOutQuart = (time, from, distance, duration) => {
      if ((time /= duration / 2) < 1)
        return (distance / 2) * time * time * time * time + from;
      return (-distance / 2) * ((time -= 2) * time * time * time - 2) + from;
    };

    const timer = setInterval(() => {
      const time = new Date().getTime() - startTime;
      const newX = easeInOutQuart(time, startX, distanceX, duration);
      const newY = easeInOutQuart(time, startY, distanceY, duration);
      if (time >= duration) {
        clearInterval(timer);
      }
      $(window).scrollLeft(newX);
      $(window).scrollTop(newY);
    }, 1000 / 60);
  }
});

/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////

/* Ao clicar em inscrever, o alert irá aparecer */
$(document).ready(function () {
  // Adiciona um evento de clique ao botão de inscrição
  $("#alerta").on("click", function () {
    // Mostra um alerta simples
    alert("Você foi inscrito na Newsletter!");
  });
});
