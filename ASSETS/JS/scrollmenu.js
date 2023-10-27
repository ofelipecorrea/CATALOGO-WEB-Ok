function redirectToImgDiv() {
    const imgDiv = document.getElementById('imgDiv');

    if (imgDiv) {
        imgDiv.scrollIntoView({ behavior: 'smooth' }); // Rolar suavemente até a div IMG
    }
}

// Adicionar um ouvinte de clique ao link "DESTAQUES"
const linkDestaques = document.querySelector('.destaquesMenu');

if (linkDestaques) {
    linkDestaques.addEventListener('click', redirectToImgDiv);
}