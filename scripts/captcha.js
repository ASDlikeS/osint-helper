const abc = "abcdef2ghi3j1klmn4opqr5tuvwx6yz";
let rndChar = "";
const generateCaptcha = () => {
  rndChar = "";
  while (rndChar.length < 5) {
    rndChar += abc[Math.floor(Math.random() * abc.length)];
  }
  document.getElementById("randomValue").textContent = rndChar;
};

document.getElementById("captchaForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const userInput = document.getElementById("textBox").value.trim();

  if (userInput === rndChar) {
    window.location.href = "/osint-helper/pages/transition.html";
  } else {
    alert("Incorrect value...");
    generateCaptcha();
    document.getElementById("textBox").value = "";
  }
});
generateCaptcha();
