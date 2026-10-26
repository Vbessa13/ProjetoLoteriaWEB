// Mostra o botão flutuante do WhatsApp quando o botão "Fale com nossos atendentes" sai da tela
document.addEventListener('DOMContentLoaded', () => {
  const zapFlutuante = document.querySelector('.zap-flutuante');
  const botaoAtendente = document.querySelector('.botoes .btn-zap:nth-child(2)');
  if (!zapFlutuante || !botaoAtendente) return;

  if (!('IntersectionObserver' in window)) {
    zapFlutuante.classList.add('visivel');
    return;
  }

  const observador = new IntersectionObserver(([entrada]) => {
    const passouDoBotao = !entrada.isIntersecting && entrada.boundingClientRect.top < 0;
    zapFlutuante.classList.toggle('visivel', passouDoBotao);
  });
  observador.observe(botaoAtendente);
});
