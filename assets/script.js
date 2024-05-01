
document.addEventListener('DOMContentLoaded', function() {

  const navList = document.querySelector('.nav-list');
  const container = document.querySelector('.navbar');
  
  let isTouching = false;
  let startX;
  let scrollLeft;
  let hasMoved = false;
  
  // Fonction pour obtenir la position du toucher
  function getTouchPosition(e) {
    return e.touches ? e.touches[0].pageX : e.pageX;
  }
  
  container.addEventListener('touchstart', handleTouchStart);
  container.addEventListener('touchmove', handleTouchMove);
  container.addEventListener('touchend', handleTouchEnd);
  
  function handleTouchStart(e) {
    isTouching = true;
    startX = getTouchPosition(e) - navList.offsetLeft;
    scrollLeft = navList.scrollLeft;
    hasMoved = false;
  }
  
  function handleTouchMove(e) {
    if (!isTouching) return;
    e.preventDefault();
    const x = getTouchPosition(e) - navList.offsetLeft;
    const walk = (x - startX) * 3; // Vous pouvez ajuster ce coefficient pour changer la vitesse de défilement
    navList.scrollLeft = scrollLeft - walk;
    hasMoved = true;
  }
  
  function handleTouchEnd() {
    isTouching = false;
    if (!hasMoved) return; // Ne pas effectuer de défilement si le déplacement est négligeable
    hasMoved = false;
  }

  let typing = false; // Ajoutez cette variable pour suivre l'état de l'effet de frappe

    function typeWriterEffect(words, targetElement, index = 0) {
    if (typing) return; // Vérifiez si l'effet de frappe est déjà en cours

    typing = true; // Marquez que l'effet de frappe a commencé
    const textElement = targetElement;
    const cursorElement = document.querySelector(".cursor");
    const currentWord = words[index];
    let i = 0;

    // Fonction pour afficher chaque caractère avec un délai
    function typeCharacter(resolve) {
        if (i < currentWord.length) {
            textElement.textContent += currentWord.charAt(i);
            i++;
            setTimeout(() => typeCharacter(resolve), Math.random() * 250 + 50); // Délai aléatoire pour l'effet de frappe
        } else {
            resolve(); // Résoudre la promesse une fois que tous les caractères sont affichés
        }
    }

    // Fonction pour effacer le mot précédent
    function eraseCharacter(resolve) {
        if (i >= 0) {
            textElement.textContent = currentWord.substring(0, i);
            i--;
            setTimeout(() => eraseCharacter(resolve), 100); // Délai pour l'effet d'effacement
        } else {
            resolve(); // Résoudre la promesse une fois que l'effacement est terminé
        }
    }

    // Démarrer l'effet de frappe
    new Promise(resolve => typeCharacter(resolve))
        .then(() => {
            // Une fois que tous les caractères sont affichés, clignoter la barre verticale
            cursorElement.style.display = "inline-block";
            function blinkCursor() {
                cursorElement.style.visibility = (cursorElement.style.visibility === "hidden") ? "visible" : "hidden";
                setTimeout(blinkCursor, 500); // Délai pour le clignotement
            }
            blinkCursor();
        })
        .then(() => new Promise(resolve => setTimeout(() => eraseCharacter(resolve), 1000))) // Effacer le mot actuel après un délai
        .then(() => {
            typing = false; // Marquez que l'effet de frappe est terminé
            // Passer au mot suivant après un délai
            typeWriterEffect(words, targetElement, (index + 1) % words.length);
        });
}

// Exemple d'utilisation avec des mots
const wordsOne = ["Développeur Web", "Militaire", "Comptable"];
const multipleTextElem = document.querySelector(".multiple-text");
typeWriterEffect(wordsOne, multipleTextElem);

//pour faire apparaître les sections au fur et à mesure

let sections = document.querySelectorAll('.section');

  function checkViewport() {
    sections.forEach(section => {
      let sectionTop = section.getBoundingClientRect().top;
      let sectionBottom = section.getBoundingClientRect().bottom;

      // Check if section is in viewport
      if (sectionTop < window.innerHeight && sectionBottom >= 0) {
        section.classList.add('actif');
      } else {
        section.classList.remove('actif');
      }
    });

  }

  window.addEventListener('scroll', checkViewport);

});

const menuHamburger = document.querySelector(".menu-hamburger")
        const navLinks = document.querySelector(".nav-links")
        const links = document.querySelectorAll(".nav-links a");
 
        menuHamburger.addEventListener('click',()=>{
        navLinks.classList.toggle('mobile-menu')
        })

        links.forEach(link => {
          link.addEventListener('click', () => {
              // Enlève la classe 'mobile-menu' lorsque vous cliquez sur un lien
              navLinks.classList.remove('mobile-menu');
          });
        });