// Inicialização do Swiper para criar um carrossel/slider com efeito de "cards"
var swiper = new Swiper(".mySwiper", {
  effect: "cards", // Configura o efeito de transição para 'cards'
  grabCursor: true, // Altera o cursor para 'grab' ao passar pelo carrossel
});

// Função que manipula a visibilidade de elementos e rotação da seta
function liga(div, caret){
  // Obtém referência para o elemento HTML com o ID fornecido como 'div'
  let objetivo = document.getElementById(div);
  
  // Obtém referência para o elemento HTML com o ID fornecido como 'caret'
  let seta = document.getElementById(caret);
  
  // Alterna a classe 'fade-in-out' no elemento 'objetivo' e armazena o resultado
  let escondido = objetivo.classList.toggle('fade-in-out');
  
  // Verifica se a classe 'fade-in-out' foi adicionada ou removida
  if (escondido) { // Se foi adicionada...
    // Aguarda 300 milissegundos antes de executar o próximo passo
    setTimeout(() => {
      objetivo.classList.toggle('esconde'); // Alterna a classe 'esconde' em 'objetivo' após o atraso
    }, 300);
  } else { // Se foi removida...
    objetivo.classList.toggle('esconde'); // Alterna imediatamente a classe 'esconde' em 'objetivo'
  }
  seta.classList.toggle('caret-rotate'); // Alterna a classe 'caret-rotate' no elemento 'seta'
}




