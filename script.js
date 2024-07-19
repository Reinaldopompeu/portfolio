const texts = ["site", "projeto", "currículo", "portfólio"];
let index = 0;
const changingTextintroElement = document.getElementById("changing-text-intro");
function animateText() {
    let text = texts[index];
    let interval = setInterval(() => {
        changingTextintroElement.textContent += text.charAt(0);
        text = text.substring(1);
        if (text === "") {
            clearInterval(interval);
            setTimeout(() => {
                changingTextintroElement.textContent = "";
                index = (index + 1) % texts.length;
                animateText();
            }, 2000);
        }
    }, 150);
}
animateText();
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.nav-computador > ul > li > a');
    const sections = Array.from(links)
        .map(link => document.getElementById(link.getAttribute('href').substring(1)))
        .filter(Boolean);

    if (sections.length === 0) return;

    // Esconder todas as seções inicialmente
    sections.forEach(section => section.style.display = 'none');

    // Definir o link e a seção de introdução como ativos inicialmente
    const introLink = links[0];
    const introSection = sections[0];
    if (introLink && introSection) {
        introLink.classList.add('active');
        introSection.style.display = 'flex';
    }

    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();

            // Remover a classe 'active' de todos os links
            links.forEach(l => l.classList.remove('active'));

            // Adicionar a classe 'active' ao link clicado
            this.classList.add('active');

            // Esconder todas as seções
            sections.forEach(section => section.style.display = 'none');

            // Mostrar apenas a seção correspondente ao link clicado com display flex
            const sectionId = this.getAttribute('href').substring(1);
            const section = document.getElementById(sectionId);
            if (section) {
                section.style.display = 'flex';
            }
        });
    });
});
