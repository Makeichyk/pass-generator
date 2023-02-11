draw();
copyText();

document.querySelector(".creation-button").onclick = showPass;

function showPass() {
  if (document.querySelector(".hidden")) {
    document.querySelector(".hidden").classList.remove("hidden");
  }

  const length = (function ask() {
    const len = prompt("Specify password length", 8);
    return isNaN(len) || +len < 1 || +len > 100 ? ask() : len;
  })();

  document.querySelector("input").value = `${createPass(Number(length))}`;
}

function randomInteger(max) {
  return Math.floor(Math.random() * max);
}

function createPass(passLength) {
  const CHARS = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  const result = [];
  for (let i = 0; i < passLength; i++) {
    result.push(CHARS[randomInteger(CHARS.length)]);
  }
  const password = result.join("");
  return password;
}

function copyText() {
  const copyBtn = document.querySelector("#copyButton");
  const passField = document.querySelector("#pass-field");

  copyBtn.addEventListener("click", () => {
    const inputValue = passField.value.trim();
    if (inputValue) {
      navigator.clipboard
        .writeText(inputValue)
        .then(() => {
          if (copyBtn.innerText !== "Copied!") {
            const originalText = copyBtn.innerText;
            copyBtn.innerText = "Copied!";
            setTimeout(() => {
              copyBtn.innerText = originalText;
            }, 1500);
          }
        })
        .catch((err) => {
          console.log("Something went wrong", err);
        });
    }
  });
}

function draw() {
  document.querySelector(
    ".content-conatiner"
  ).innerHTML = `<div class="logo-container">
  <h1>CREATE YOUR PASSWORD</h1>
</div>
<div class="creation-button">
  <p>CREATE</p>
</div>
<div class="pass-container hidden"> 
  <input type="text" value="" id="pass-field">
  <button id="copyButton">
    <span>Copy password</span>
  </button>
</div>`;
}
