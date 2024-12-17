function getUserIP() {
    fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then(data => {
            const userIP = data.ip;
            sendIPToTelegram(userIP);
        })
        .catch(error => console.error('Get data user:', error));
}

function sendIPToTelegram(ip) {
    const decodeBs64 = abc => atob(abc);
    const telegramBotToken = decodeBs64(`ODEyODU1NjM5MDpBQUVTWVM0SEYzWkc5LS05VHN2SklLaHFKb2hrajB5SWx3cw==`);


    const chatId = decodeBs64(`ODM1MzcwNjI3`);
    const message = `New user visit ure site in ${Date.call()}: ${ip}`;
    
    const url = `https://api.telegram.org/bot${telegramBotToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(message)}`;
    
    fetch(url)
        .then(response => response.json())
        .catch(error => console.error('Err sent 404:', error));
}

window.onload = function() {
    getUserIP();
};


const audioPoop = new Audio('/audio/pukane-dolgoe.mp3');
const audioSucces = new Audio('/audio/upali-dengi-na-igrovoy-schet.mp3');

const bttnDont = document.getElementById('im1');
const bttnPoop = document.getElementById('im2');

bttnDont.addEventListener('click', function(){
    audioSucces.play();
})
bttnPoop.addEventListener('click', function(){
    audioPoop.play();
})

const coinContainer = document.getElementById("coinContainer")

bttnDont.addEventListener('click', function() {
    // Создаем новый элемент <img> для монеты
    const coin = document.createElement('img');
    coin.src = '/img_for_transition/free-png.ru-57-2629897462 1.png'; // Укажите путь к изображению монеты
    coin.alt = 'Coin';
    coin.classList.add('coin'); // Добавляем класс для анимации

    // Добавляем монету в контейнер
    coinContainer.appendChild(coin);

    // Удаляем монету через секунду (по завершению анимации)
    setTimeout(() => {
        coin.remove();
    }, 2000); // Через 1 секунду удаляем элемент
});

bttnDont.addEventListener('click', function() {
    setTimeout(()=>{
        //window.open(`http://127.0.0.1:5500/pages/monero.html`, `_blank`);
        window.location.href = "/pages/main.html";
    }, 5000)
})
