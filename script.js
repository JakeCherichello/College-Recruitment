const alumni = [
    {
      name: "<b>1.</b> Nicky Hilton",
      biography:
        'Nicholai Olivia "Nicky" Rothschild is an American socialite, fashion designer and model. She is a member of the Hilton family by birth, and a member of the Rothschild family through her marriage to James Rothschild, a grandson of Victor Rothschild, 3rd Baron Rothschild, in 2015.',
      img: "images/nicky.jpg",
    },
    {
      name: "<b>2.</b> Kevin Nealon",
      biography:
        "Kevin Nealon is an American comedian and actor. He has earned a Primetime Emmy Award nomination and two Screen Actors Guild Award nominations.",
      img: "images/kev.jpg",
    },
    {
      name: "<b>3.</b> John Ratzenberger",
      biography: "John Dezso Ratzenberger is an American actor. He is best known for playing the character Cliff Clavin on the comedy series Cheers, for which he earned two Primetime Emmy nominations.",
      img: "images/john.webp",
    },
  ];
  
  function generateAlumniCards() {
    const alumniCardsContainer = document.getElementById("alumni");
  
    alumni.forEach((member) => {
      const card = document.createElement("div");
      card.classList.add("col");
  
      card.innerHTML = `
        <div class="card h-100 text-center">
          <div class="card-header">${member.name}</div>
          <div class="card-body">
            <img style="width: 100%; height: auto;" src="${member.img}" class="card-img-top">
            <p><strong>Biography:</strong> ${member.biography}</p>
          </div>
        </div>
      `;
  
      alumniCardsContainer.appendChild(card);
    });
  }
  
  window.onload = generateAlumniCards;
  
