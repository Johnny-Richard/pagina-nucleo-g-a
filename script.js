// Selecionando o ícone do hambúrguer e o menu
const hamburguer = document.querySelector('.menu__hamburguer');
const menuList = document.querySelector('#menu__list');

// Adicionando um evento de clique ao ícone de hambúrguer
hamburguer.addEventListener('click', () => {
    // Toggling da classe 'show' para exibir/ocultar o menu
    menuList.classList.toggle('show');
});
