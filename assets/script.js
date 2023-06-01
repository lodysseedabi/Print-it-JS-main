const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]


// Sélection du contenu du carrousel
const image = document.querySelector('.banner-img');
const tagLine = document.querySelector('#banner p');

// Délection des flèches du carrousel
const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');

// Sélection de la section bullet points
const dotsContainer = document.querySelector('.dots');
 
// Fonction pour créer les bullet points
function createDots() {
	for (let i = 0; i < slides.length; i++) {
		const dot = document.createElement('span');
		dot.classList.add('dot');
		if (i === 0) {
		dot.classList.add('dot_selected');
		}
		dotsContainer.appendChild(dot);
	}
}

// Initialisation de la slide actuelle
let currentSlide = 0;

// Fonction pour mettre à jour le contenu du carrousel avec la slide actuelle
function updateCarousel() {
	// Changement de l'image (correspondante à la slide active)
	image.src = `./assets/images/slideshow/${slides[currentSlide].image}`;
	// Changement du texte (correspondant à la slide active)
  	tagLine.innerHTML = slides[currentSlide].tagLine;
	// Sélection des bullet points individuels
	const dots = document.querySelectorAll('.dot');
	// pour afficher le bullet point actif
	dots.forEach((dot, index) => {
		if (index === currentSlide) {
			dot.classList.add('dot_selected');
		} else {
			dot.classList.remove('dot_selected');
		}
	  });
}

// Fonction du défilement infini du carrousel vers la droite
function infinityRight() {
	if (currentSlide === slides.length) {
		currentSlide = 0;
	  }
}

// Fonction du défilement infini du carrousel vers la gauche
function infinityLeft() {
	if (currentSlide < 0) {
		currentSlide = slides.length - 1;
	  }
}


// Ajout d'un event listener à la flèche gauche
arrowLeft.addEventListener('click', function() {
	console.log('Flèche gauche cliquée');
	currentSlide--;
	infinityLeft();
	updateCarousel();
  });
  
// Ajout d'un event listener à la flèche droite
  arrowRight.addEventListener('click', function() {
	console.log('Flèche droite cliquée');
	currentSlide++;
	infinityRight();
	updateCarousel();
  });

//Appel de la fonction pour la création automatique des bullet point
createDots(); 



