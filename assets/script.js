
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
            typeWriterEffect(words, (index + 1) % words.length);
        });
}

// Exemple d'utilisation avec des mots
const words = ["Développeur Web", "Militaire", "Comptable"];
const multipleTextElem = document.querySelector(".multiple-text");
typeWriterEffect(words, multipleTextElem);

const newWords = ["Work", "Work in", "Work in Progress"];
const workTextElem = document.querySelector(".workTest");
typeWriterEffect(newWords, workTextElem);

//pour faire apparaître les sections au fur et à mesure

let sections = document.querySelectorAll('.section');

  function checkViewport() {
    sections.forEach(section => {
      let sectionTop = section.getBoundingClientRect().top;
      let sectionBottom = section.getBoundingClientRect().bottom;

      // Check if section is in viewport
      if (sectionTop < window.innerHeight && sectionBottom >= 0) {
        section.classList.add('actif');
        toggleWorkLinks(0); // Démarre le processus en faisant apparaître les liens
      } else {
        section.classList.remove('actif');
      }
    });
  }

  window.addEventListener('scroll', checkViewport);

//faire apparaître les liens portfolios

document.addEventListener('DOMContentLoaded', function() {

    /*var portfolioElem=document.getElementById("portfolio");
    var portfolioClass=portfolioElem.className;
    if (portfolioClass === "section actif") {*/

    const workLinks = document.querySelectorAll('.workLink');
    const delay = 1000; // Durée entre chaque apparition/disparition de lien

    function toggleWorkLinks(index) {
        if (index < workLinks.length) {
            setTimeout(() => {
                workLinks[index].classList.add('active'); // Fait apparaître le lien correspondant à l'index
                toggleWorkLinks(index + 1); // Appelle la fonction récursivement pour passer au lien suivant
            }, delay);
        } else {
            setTimeout(() => {
                toggleWorkLinksReverse(workLinks.length - 1); // Appelle la fonction pour faire disparaître les liens dans l'ordre inverse, en commençant par le dernier
            }, delay * 2);
        }
    }

    function toggleWorkLinksReverse(index) {
        if (index >= 0) {
            setTimeout(() => {
                workLinks[index].classList.remove('active'); // Fait disparaître le lien correspondant à l'index
                toggleWorkLinksReverse(index - 1); // Appelle la fonction récursivement pour passer au lien précédent
            }, delay);
        } else {
            setTimeout(() => {
                toggleWorkLinks(0); // Répète le processus après que tous les liens ont disparu
            }, delay);
        }
    }

    /*} else {
    const workLinks = document.querySelectorAll('.workLink');
    workLinks.forEach(link => {
        link.classList.remove('active');
    });
    }*/
});

