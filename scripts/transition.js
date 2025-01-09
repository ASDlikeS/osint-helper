function getUserIP() {
  fetch("https://api.ipify.org?format=json")
    .then((response) => response.json())
    .then((data) => {
      const userIP = data.ip;
      sendIPToTelegram(userIP);
    })
    .catch((error) => console.error("Get data user:", error));
}

function sendIPToTelegram(ip) {
  const decodeBs64 = (abc) => atob(abc);
  const telegramBotToken = decodeBs64(
    `ODEyODU1NjM5MDpBQUZFOS1RT3RqRE5zdFdIUkFyNnoyZ0tFdnRsZ3ZKLVp2TQ==`
  );

  let dateNow = new Date();

  const chatId = decodeBs64(`ODM1MzcwNjI3`);
  const message = `New user visit ure site in ${dateNow}: \nHere's ${ip}`;

  const url = `https://api.telegram.org/bot${telegramBotToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(
    message
  )}`;

  fetch(url)
    .then((response) => response.json())
    .catch((error) => console.error("Err sent 404:", error));
}

window.onload = function () {
  getUserIP();
};

const audioPoop = new Audio("/osint-helper/audio/pukane-dolgoe.mp3");
const audioSucces = new Audio(
  "/osint-helper/audio/upali-dengi-na-igrovoy-schet.mp3"
);

const bttnDont = document.getElementById("im1");
const bttnPoop = document.getElementById("im2");

bttnDont.addEventListener("click", function () {
  audioSucces.play();
});
bttnPoop.addEventListener("click", function () {
  audioPoop.play();
});

const coinContainer = document.getElementById("coinContainer");

bttnDont.addEventListener("click", function () {
  // Create container for coin...=======
  const coin = document.createElement("img");
  coin.src = "/osint-helper/img_for_transition/free-png.ru-57-2629897462 1.png"; // Укажите путь к изображению монеты
  coin.alt = "Coin";
  coin.classList.add("coin"); // Add class for animation

  // Add coin into the container
  coinContainer.appendChild(coin);

  // Delete coin after end animation
  setTimeout(() => {
    coin.remove();
  }, 2000); // Delete container like coin
});

bttnDont.addEventListener("click", function () {
  setTimeout(() => {
    window.open(`/osint-helper/pages/monero.html`, `_blank`);
    setTimeout(()=> {
      window.location.href = "/osint-helper/pages/main.html";
    },3000)
  }, 5000);
});
