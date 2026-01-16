console.log("Le script est chargé et prêt pour YR2I !");

// Exemple simple d'interaction
const bouton = document.getElementById('btn-info');

bouton.addEventListener('click', function() {
    alert("Les inscriptions ouvriront bientôt !");
});

// =========================================
// Gestion du diaporama (Slider)
// =========================================

function lancerDiaporama() {
    const slides = document.querySelectorAll('.hero-slideshow img');
    let indexActuel = 0; 

    if (slides.length === 0) return;

    setInterval(() => {
        slides[indexActuel].classList.remove('active');

        indexActuel = (indexActuel + 1) % slides.length;

        slides[indexActuel].classList.add('active');
    }, 5000); 
}

lancerDiaporama();