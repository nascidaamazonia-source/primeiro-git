const menuToggle = document.querySelector('#menuToggle');
const navLinks = document.querySelector('#navLinks');
const demoButton = document.querySelector('#demoButton');
const demoResult = document.querySelector('#demoResult');
const contactForm = document.querySelector('#contactForm');
const formFeedback = document.querySelector('#formFeedback');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.setAttribute('aria-label', 'Abrir menu');
    });
  });
}

const demoMessages = [
  'Lead interessado no plano Pro. Necessidade: automatizar atendimento e planilha de pedidos.',
  'Cliente pediu orçamento. A IA coletou nome, serviço desejado, prazo e enviou resumo para a equipe.',
  'Pedido recebido. Dados registrados na planilha, responsável avisado e próxima etapa criada.',
  'Resumo diário pronto: novos contatos, oportunidades abertas e pendências que precisam de resposta.'
];

let demoIndex = 0;

if (demoButton && demoResult) {
  demoButton.addEventListener('click', () => {
    demoIndex = (demoIndex + 1) % demoMessages.length;
    demoResult.textContent = demoMessages[demoIndex];
  });
}

if (contactForm && formFeedback) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.querySelector('#name')?.value.trim();
    const contact = document.querySelector('#contactInfo')?.value.trim();
    const message = document.querySelector('#message')?.value.trim();

    if (!name || !contact || !message) {
      formFeedback.textContent = 'Preencha todos os campos para receber uma sugestão de automação.';
      return;
    }

    formFeedback.textContent = `Obrigado, ${name}! Seu interesse foi registrado localmente. Próximo passo: conectar este formulário a WhatsApp, email ou CRM.`;
    contactForm.reset();
  });
}
