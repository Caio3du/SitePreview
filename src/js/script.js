const images = document.querySelectorAll('.imagem');
let currentIndex = 0;

function showImage(index) {
  images.forEach((image, i) => {
    image.style.opacity = i === index ? 1 : 0;
  });
}

function rotateImages() {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
}

setInterval(rotateImages, 4000);








// Função para verificar quando um elemento está visível no viewport
function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Função para adicionar a classe 'visivel' aos elementos visíveis
function animateElementsOnScroll() {
  const elementsToAnimate = document.querySelectorAll('.animar');

  elementsToAnimate.forEach((element) => {
    if (isElementInViewport(element)) {
      element.classList.add('visivel');
    }
  });
}

// Adicione um evento de rolagem para acionar a animação
window.addEventListener('scroll', animateElementsOnScroll);

// Chame a função uma vez para animar elementos que já estão visíveis ao carregar a página
animateElementsOnScroll();








document.addEventListener("DOMContentLoaded", function() {
  var scrollButton = document.getElementById("scrollButton");
  var contato = document.getElementById("contato");

  scrollButton.addEventListener("click", function() {

      document.body.style.overflow = "initial"

      // Rola a tela até a div com suavidade
      contato.scrollIntoView({ behavior: "smooth" });

      // Adicione um destaque à div (por exemplo, uma classe CSS)
      contato.classList.add("destacado");

      // Remova o destaque após um certo período (opcional)
      setTimeout(function() {
          contato.classList.remove("destacado");
      }, 3000); // 3000 milissegundos (3 segundos) - ajuste conforme necessário
  });
});
