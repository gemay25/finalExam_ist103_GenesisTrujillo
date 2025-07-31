let count = 0;

const counterValue = document.getElementById('counter-value');
const incrementBtn = document.getElementById('increment-btn');
const decrementBtn = document.getElementById('decrement-btn');
const colorBox = document.getElementById('color-box');
const changeColorBtn = document.getElementById('change-color-btn');
const quoteText = document.getElementById('quote-text');
const quoteBtn = document.getElementById('quote-btn');

incrementBtn.addEventListener('click', () => {
    count++;
    counterValue.textContent = count;
});

decrementBtn.addEventListener('click', () => {
    if (count > 0) {
        count--;
        counterValue.textContent = count;
    }
});

const colors = ['red', 'blue', 'green', 'purple', 'orange', 'pink', 'cyan', 'yellow', 'brown', 'gray'];

changeColorBtn.addEventListener('click', () => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    colorBox.style.background = randomColor;
});

const quotes = [
    "The only way to do great work is to love what you do.",
    "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    "The future belongs to those who believe in the beauty of their dreams.",
    "Don't watch the clock; do what it does. Keep going.",
    "It always seems impossible until it's done."
];

quoteBtn.addEventListener('click', () => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    quoteText.textContent = randomQuote;
});
