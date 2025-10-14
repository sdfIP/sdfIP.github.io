
const secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
const maxAttempts = 10; 
const usedNumbers = [];

// Массив с забавными картинками для каждой попытки
const images = [
    'https://th.bing.com/th/id/OIP.-yunHKHDnlbDLZXFYuvUqwHaE8?w=255&h=180&c=7&r=0&o=7&cb=12&pid=1.7&rm=3/300/300', 
    'https://th.bing.com/th/id/OIP.LWQL2-E5lOUUZuKczfnT2AHaJC?w=170&h=189&c=7&r=0&o=7&cb=12&pid=1.7&rm=3/301/301',
    'https://th.bing.com/th/id/OIP.vl6xRg45UYWVfcz1nSrXdAHaHa?w=172&h=180&c=7&r=0&o=7&cb=12&pid=1.7&rm=3/302/302',
    'https://th.bing.com/th/id/OIP.Lw_lHDEdLMnOiENg1H8OMQHaFs?w=244&h=187&c=7&r=0&o=7&cb=12&pid=1.7&rm=3/303/303',
    'https://th.bing.com/th/id/OIP.bFoWnh0a-plGhXl9lPnF3QAAAA?w=173&h=180&c=7&r=0&o=7&cb=12&pid=1.7&rm=3/304/304',
    'https://placekitten.comhttps://tse4.mm.bing.net/th/id/OIP.fIbs_RwxFBPGLzq_eSgkyQHaHa?cb=12&pid=ImgDet&w=182&h=182&c=7&o=7&rm=3/305/305',
    'https://tse2.mm.bing.net/th/id/OIP.eM5PHYFgfHcwGhx1iXIlOQAAAA?cb=12&pid=ImgDet&w=170&h=126&c=7&o=7&rm=3/306/306',
    'https://tse1.mm.bing.net/th/id/OIP.dcawCUfyuBi4qwyWVdBm1wHaHR?cb=12&pid=ImgDet&w=182&h=179&c=7&o=7&rm=3/307/307',
];

function Guess() {
    const outputDiv = document.getElementById('output');
    const inputField = document.getElementById('userInput');
    const imageContainer = document.getElementById('imageContainer');
    
    const userInput = parseInt(inputField.value);

    
    if (isNaN(userInput) || userInput < 1 || userInput > 100) {
        outputDiv.textContent = "Пожалуйста, введите число от 1 до 100.";
        return;
    }

    
    if (usedNumbers.includes(userInput)) {
        outputDiv.textContent = "Вы уже вводили это число! Попробуйте другое.";
        return;
    }

    usedNumbers.push(userInput);
    attempts++;

    if (attempts <= images.length) {
        imageContainer.innerHTML = `<img src="${images[attempts-1]}" alt="Попытка ${attempts}" class="feedback-image">`;
    }

    if (userInput === secretNumber) {
        outputDiv.innerHTML = `Поздравляю! Вы угадали число ${secretNumber} за ${attempts} ${attempts === 1 ? "попытку" : "попытки"}.`;
        inputField.disabled = true; 
    } else if (userInput < secretNumber) {
        outputDiv.textContent = "Ваше число меньше загаданного.";
    } else {
        outputDiv.textContent = "Ваше число больше загаданного.";
    }

    if (attempts >= maxAttempts && userInput !== secretNumber) {
        outputDiv.textContent = `Извините, вы использовали все ${maxAttempts} попыток. Загаданное число было ${secretNumber}.`;
        inputField.disabled = true; 
    }

    inputField.value = ''; 
};