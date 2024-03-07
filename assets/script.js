
document.addEventListener('DOMContentLoaded', function() {

// Exemple d'utilisation avec des mots
const wordsOne = ["Développeur Web", "Militaire", "Comptable"];
const wordsTwo = ["Work", "Work in", "Work in Progress"];

const multipleTextElem = document.querySelector(".multiple-text");
const workTextElem = document.querySelector(".workTest");

// Lancer les deux effets de frappe en boucle
typeWriterEffect(wordsOne, multipleTextElem);
typeWriterEffect(wordsTwo, workTextElem);

function typeWriterEffect(words, targetElement, index = 0) {
  let typing = false;

  function typeCharacter(resolve) {
    if (typing) return;
    typing = true;
    const textElement = targetElement;
    const cursorElement = document.querySelector(".cursor");
    const currentWord = words[index];
    let i = 0;

    function typeChar() {
      if (i < currentWord.length) {
        textElement.textContent += currentWord.charAt(i);
        i++;
        setTimeout(typeChar, Math.random() * 250 + 50);
      } else {
        resolve();
      }
    }
    typeChar();
  }

  function eraseCharacter(resolve) {
    if (typing) return;
    typing = true;
    const textElement = targetElement;
    const currentWord = words[index];
    let i = currentWord.length;

    function eraseChar() {
      if (i >= 0) {
        textElement.textContent = currentWord.substring(0, i);
        i--;
        setTimeout(eraseChar, 100);
      } else {
        resolve();
      }
    }
    eraseChar();
  }

  new Promise(resolve => typeCharacter(resolve))
    .then(() => new Promise(resolve => setTimeout(() => eraseCharacter(resolve), 1000)))
    .then(() => {
      typing = false;
      typeWriterEffect(words, targetElement, (index + 1) % words.length);
    });
}

    // Exemple d'utilisation avec des mots
/*const wordsOne = ["Développeur Web", "Militaire", "Comptable"];
const wordsTwo = ["Work", "Work in", "Work in Progress"];

const multipleTextElem = document.querySelector(".multiple-text");
const workTextElem = document.querySelector(".workTest");

// Lancer les deux effets de frappe en boucle
typeWriterEffect(wordsOne, multipleTextElem);
typeWriterEffect(wordsTwo, workTextElem);

function typeWriterEffect(words, targetElement, index = 0) {
  let typing = false;

  function typeCharacter(resolve) {
    if (i < currentWord.length) {
        textElement.textContent += currentWord.charAt(i);
        i++;
        setTimeout(() => typeCharacter(resolve), Math.random() * 250 + 50); // Délai aléatoire pour l'effet de frappe
    } else {
        resolve(); // Résoudre la promesse une fois que tous les caractères sont affichés
    }
  }

  function eraseCharacter(resolve) {
    if (i >= 0) {
        textElement.textContent = currentWord.substring(0, i);
        i--;
        setTimeout(() => eraseCharacter(resolve), 100); // Délai pour l'effet d'effacement
    } else {
        resolve(); // Résoudre la promesse une fois que l'effacement est terminé
    }
  }

  new Promise(resolve => typeCharacter(resolve))
    .then(() => {
      cursorElement.style.display = "inline-block";
      function blinkCursor() {
        cursorElement.style.visibility = (cursorElement.style.visibility === "hidden") ? "visible" : "hidden";
        setTimeout(blinkCursor, 500); // Délai pour le clignotement
      }
      blinkCursor();
    })
    .then(() => new Promise(resolve => setTimeout(() => eraseCharacter(resolve), 1000)))
    .then(() => {
      typing = false;
      typeWriterEffect(words, targetElement, (index + 1) % words.length); // Appel récursif pour boucler à travers les mots
    });
}*/
    //----------------------------------------------------------------------
   /* let typing = false; // Ajoutez cette variable pour suivre l'état de l'effet de frappe

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

const newWords = ["Work", "Work in", "Work in Progress"];
const workTextElem = document.querySelector(".workTest");
typeWriterEffect(newWords, workTextElem);
*/
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

//------
// Exemple d'utilisation avec des mots
const wordsOne = ["Développeur Web", "Militaire", "Comptable"];
const wordsTwo = ["Work", "Work in", "Work in Progress"];

const multipleTextElem = document.querySelector(".multiple-text");
const workTextElem = document.querySelector(".workTest");

// Lancer les deux effets de frappe en boucle
typeWriterEffect(wordsOne, multipleTextElem);
typeWriterEffect(wordsTwo, workTextElem);

function typeWriterEffect(words, targetElement, index = 0) {
  let typing = false;

  function typeCharacter(resolve) {
    if (typing) return;
    typing = true;
    const textElement = targetElement;
    const cursorElement = document.querySelector(".cursor");
    const currentWord = words[index];
    let i = 0;

    function typeChar() {
      if (i < currentWord.length) {
        textElement.textContent += currentWord.charAt(i);
        i++;
        setTimeout(typeChar, Math.random() * 250 + 50);
      } else {
        resolve();
      }
    }
    typeChar();
  }

  function eraseCharacter(resolve) {
    if (typing) return;
    typing = true;
    const textElement = targetElement;
    const currentWord = words[index];
    let i = currentWord.length;

    function eraseChar() {
      if (i >= 0) {
        textElement.textContent = currentWord.substring(0, i);
        i--;
        setTimeout(eraseChar, 100);
      } else {
        resolve();
      }
    }
    eraseChar();
  }

  new Promise(resolve => typeCharacter(resolve))
    .then(() => new Promise(resolve => setTimeout(() => eraseCharacter(resolve), 1000)))
    .then(() => {
      typing = false;
      typeWriterEffect(words, targetElement, (index + 1) % words.length);
    });
}