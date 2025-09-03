// ==========================
// Part 1: JavaScript Basics
// ==========================

// Variable declaration and conditional
document.getElementById('checkAgeBtn').addEventListener('click', function() {
    let age = parseInt(document.getElementById('ageInput').value);
    let result = '';
    if (age >= 18) {
        result = 'You are an adult.';
    } else if (age > 0) {
        result = 'You are a minor.';
    } else {
        result = 'Please enter a valid age.';
    }
    document.getElementById('ageResult').textContent = result;
});

// ==========================
// Part 2: Functions
// ==========================

// Function to calculate sum
function calculateSum(a, b) {
    return a + b;
}

// Function to format message
function formatMessage(name) {
    return `Hello, ${name}! Welcome to JavaScript.`;
}

// Event listener for sum
document.getElementById('sumBtn').addEventListener('click', function() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let sum = calculateSum(num1, num2);
    document.getElementById('sumResult').textContent = `Sum: ${sum}`;
});

// ==========================
// Part 3: Loops
// ==========================

// Countdown using for loop
document.getElementById('countdownBtn').addEventListener('click', function() {
    let countdownText = '';
    for (let i = 10; i >= 0; i--) {
        countdownText += i + ' ';
    }
    document.getElementById('countdownResult').textContent = countdownText;
});

// Display list using forEach loop
document.getElementById('listBtn').addEventListener('click', function() {
    const fruits = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];
    const list = document.getElementById('listResult');
    list.innerHTML = ''; // clear previous list
    fruits.forEach(fruit => {
        let li = document.createElement('li');
        li.textContent = fruit;
        list.appendChild(li);
    });
});

// ==========================
// Part 4: DOM Manipulation
// ==========================

const heading = document.querySelector('h1');

// Change text
document.getElementById('changeTextBtn').addEventListener('click', function() {
    heading.textContent = 'JavaScript is Awesome!';
});

// Toggle color
document.getElementById('toggleColorBtn').addEventListener('click', function() {
    heading.style.color = heading.style.color === 'red' ? '#333' : 'red';
});

// Add new paragraph
document.getElementById('addElementBtn').addEventListener('click', function() {
    const newPara = document.createElement('p');
    newPara.textContent = 'This is a dynamically added paragraph!';
    document.getElementById('dynamicContent').appendChild(newPara);
});
