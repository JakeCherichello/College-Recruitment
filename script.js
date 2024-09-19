const teamMembers = [
    {
        name: '<b>1.</b> Nicky Hilton',
        biography: 'Greatest of all time, we are done with the 90s he is my sunshine',
        img: 'images/nicky.jpg'
    },
    {
        name: '<b>2.</b> Victor Wembanyama',
        biography: 'He is actually an alien, never seen someone look less like a human',
        img: 'images/kev.jpg'
    },
    {
        name: '<b>3.</b> John Stockton',
        biography: 'Little John Stockton little John Johnny Stockton',
        img: 'images/john.webp'
    },
];

function generateTeamCards() {
    const teamCardsContainer = document.getElementById('teamCards');

    teamMembers.forEach(member => {
        const card = document.createElement('div');
        card.classList.add('col');

        const skillsList = ''; // No skills now

        card.innerHTML = `
            <div class="card h-100 text-center">
                <div class="card-header">${member.name}</div>
                <div class="card-body">
                    <img style="width: 100%; height: auto;" src="${member.img}" class="card-img-top">
                    <p><strong>Biography:</strong> ${member.biography}</p>
                </div>
            </div>
        `;

        teamCardsContainer.appendChild(card);
    });
}

window.onload = generateTeamCards;
