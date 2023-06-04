function generateCardHTML(image, title, text) {
    return `
    <div class="card" onclick="openModal("${title}", ("${text}", event)">
      <img class="card-image" src="${image}" alt="Картинка">
      <h3>${title}</h3>
    </div>
  `;
}

fetch('data.json')
    .then(response => response.json())
    .then(data => {
        const cardContainer = document.getElementById('cardContainer');
        const cards = data.cards;
        cards.forEach(card => {
            const cardHTML = generateCardHTML(card.image, card.title, card.text);
            cardContainer.innerHTML += cardHTML;
        });
    })
    .catch(error => console.log(error));

function openModal(title, text, event) {
    document.getElementById('modal-title').innerText = title;
    document.getElementById('modal-text').innerText = text;
    document.getElementById('modal').style.display = 'flex';
    event.stopPropagation();
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}