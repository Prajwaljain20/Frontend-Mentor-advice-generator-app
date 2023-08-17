const dice = document.querySelector('.dice');
const id = document.querySelector('span');
const quote = document.querySelector('q');
const url = 'https://api.adviceslip.com/advice';
dice.addEventListener('click', () => {
    fetch(url)
    .then(response=> response.json())
    .then(data => {
        id.textContent = data['slip']['id'];
        quote.textContent = data['slip']['advice'];
        quote.style.display = 'block';
    });
});
