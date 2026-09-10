// Pequeno efeito: destaca o botão flutuante caso o usuário role até o final da página
document.addEventListener('DOMContentLoaded', () => {
  const zapFlutuante = document.querySelector('.zap-flutuante');

  window.addEventListener('scroll', () => {
    const pertoDoFim = (window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 60);
    zapFlutuante.style.transform = pertoDoFim ? 'scale(1.08)' : 'scale(1)';
  });
});