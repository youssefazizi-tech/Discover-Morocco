function imagEe1(){
  let img1 = document.getElementById("all").style.background = "url(img/nature1.jpg) center center / cover"
  let textH1 = document.getElementById("text-h2")
  let textP = document.getElementById("text-p")
  textH1.textContent = "Nature"
  textP.textContent = "From the Atlas Mountains to the Sahara, Morocco's diverse landscapes are home to stunning natural beauty and incredible wildlife."
}
function imagEe2(){
  let img2 = document.getElementById("all").style.background = " url(img/shopp.jpg) center center / cover"
  let textH1 = document.getElementById("text-h2")
  let textP = document.getElementById("text-p")
  textH1.textContent = "Shopping"
  textP.textContent = "Shop for traditional handicrafts, spices, and textiles in Morocco's vibrant markets, especially in Marrakesh, for an unforgettable shopping experience."
}
function imagEe3(){
  let img3 = document.getElementById("all").style.background = "url(img/beach.jpg) center center / cover"
  let textH1 = document.getElementById("text-h2")
  let textP = document.getElementById("text-p")
  textH1.textContent = "Beaches"
  textP.textContent = "Morocco's hidden gem beaches offer sun, sand, and surf with something for everyone, from bustling Agadir to tranquil Asilah, making it a must-visit destination for beach lovers."
}
function imagEe4(){
  let img4 = document.getElementById("all").style.background = " url(img/culture.jpg) center center / cover"
  let textH1 = document.getElementById("text-h2")
  let textP = document.getElementById("text-p")
  textH1.textContent = "Culture"
  textP.textContent = "Experience the rich and diverse culture of Morocco, blending ancient traditions with modern influences."
     
}















// Simulated API response for demonstration purposes
const offersData = [
    {
      type: 'Restaurant',
      name: 'Delicious Bites',
      description: 'Enjoy a wide variety of mouthwatering dishes in a cozy ambiance.',
      image: 'path/to/offer1.jpg',
      rating: 4.5,
      url: 'https://www.example.com/restaurant'
    },
    {
      type: 'Hotel',
      name: 'Luxury Resort',
      description: 'Experience unparalleled luxury and breathtaking views at our 5-star resort.',
      image: 'path/to/offer2.jpg',
      rating: 5.0,
      url: 'https://www.example.com/hotel'
    },
    {
      type: 'Restaurant',
      name: 'Taste of Tradition',
      description: 'Savor authentic local flavors in a traditional setting.',
      image: 'path/to/offer3.jpg',
      rating: 4.8,
      url: 'https://www.example.com/restaurant'
    },
    {
      type: 'Hotel',
      name: 'Seaside Retreat',
      description: 'Escape to a serene seaside resort with breathtaking ocean views.',
      image: 'path/to/offer4.jpg',
      rating: 4.7,
      url: 'https://www.example.com/hotel'
    }
    // Add more offers as needed
  ];
  
  const offersContainer = document.getElementById('offers-container');
  
  // Function to create and populate the offer cards
  function createOfferCard(offer) {
    const offerCard = document.createElement('div');
    offerCard.classList.add('offer-card');
  
    const offerImage = document.createElement('img');
    offerImage.src = offer.image;
    offerImage.alt = offer.name;
    offerImage.classList.add('offer-image');
    offerCard.appendChild(offerImage);
  
    const offerContent = document.createElement('div');
    offerContent.classList.add('offer-content');
  
    const offerType = document.createElement('p');
    offerType.classList.add('offer-type');
    offerType.textContent = offer.type;
    offerContent.appendChild(offerType);
  
    const offerName = document.createElement('h3');
    offerName.classList.add('offer-name');
    offerName.textContent = offer.name;
    offerContent.appendChild(offerName);
  
    const offerDescription = document.createElement('p');
    offerDescription.classList.add('offer-description');
    offerDescription.textContent = offer.description;
    offerContent.appendChild(offerDescription);
  
    const offerRating = document.createElement('p');
    offerRating.classList.add('offer-rating');
    offerRating.textContent = 'Rating: ' + offer.rating + '/5';
    offerContent.appendChild(offerRating);
  
    const offerLink = document.createElement('a');
    offerLink.href = offer.url;
    offerLink.textContent = 'Learn More';
    offerLink.classList.add('offer-link');
    offerContent.appendChild(offerLink);
  
    offerCard.appendChild(offerContent);
    offersContainer.appendChild(offerCard);
  }
  
  // Function to fetch offers data from an API (Simulated for demonstration purposes)
  function fetchOffersData() {
    // Simulating a delay in fetching data (2 seconds)
    setTimeout(() => {
      offersData.forEach(offer => {
        createOfferCard(offer);
      });
    }, 2000);
  }
  
  // Call the function to fetch offers data
  fetchOffersData();




  
  




