const menuToggle = document.querySelector('#menuToggle');
const navLinks = document.querySelector('#navLinks');
const demoButton = document.querySelector('#demoButton');
const demoResult = document.querySelector('#demoResult');
const contactForm = document.querySelector('#contactForm');
const formFeedback = document.querySelector('#formFeedback');

menuToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});

navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});

const demoMessages = [
  'Lead qualificado: cliente quer automatizar atendimento no WhatsApp.',
  'Tarefa criada: enviar proposta do plano Pro até hoje às 18h.',
  'Resumo gerado: 12 conversas, 4 oportunidades e 2 pendências.',
  'Automação pronta: dados enviados para planilha e equipe notificada.'
];

let demoIndex = 0;

demoButton.addEventListener('click', () => {
  demoResult.textContent = demoMessages[demoIndex];
  demoIndex = (demoIndex + 1) % demoMessages.length;
});

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.querySelector('#name').value.trim();
  const contact = document.querySelector('#contact').value.trim();
  const message = document.querySelector('#message').value.trim();

  if (!name || !contact || !message) {
    formFeedback.textContent = 'Preencha todos os campos para continuar.';
    return;
  }

  formFeedback.textContent = `Obrigado, ${name}! Sua solicitação foi registrada localmente.`;
  contactForm.reset();
});
