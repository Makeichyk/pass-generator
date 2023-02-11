draw();
document.querySelector(".creation-button").onclick = showPass;
function randomInteger(max) {
  return Math.floor(Math.random() * max);
}

function createPass(passLength) {
  const CHAR = [
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
  let result = [];
  for (let i = 0; i < passLength; i++) {
    result.push(CHAR[randomInteger(CHAR.length)]);
  }
  let password = result.join("");
  return password;
}

function copyText() {
  const writeBtn = document.querySelector("#copyButton");
  const inputEl = document.querySelector("#myInput");

  writeBtn.addEventListener("click", () => {
    const inputValue = inputEl.value.trim();
    if (inputValue) {
      navigator.clipboard
        .writeText(inputValue)
        .then(() => {
          if (writeBtn.innerText !== "Copied!") {
            const originalText = writeBtn.innerText;
            writeBtn.innerText = "Copied!";
            setTimeout(() => {
              writeBtn.innerText = originalText;
            }, 1500);
          }
        })
        .catch((err) => {
          console.log("Something went wrong", err);
        });
    }
  });
}

function showPass() {
  if (document.querySelector(".hidden")) {
    document.querySelector(".hidden").classList.remove("hidden");
  }

  let length = prompt("Specify password length", 8);
  document.querySelector("input").value = ` ${createPass(Number(length))}`;
}

function draw(){
  document.querySelector(".content-conatiner").innerHTML = `<div class="logo-container">
  <h1>CREATE YOUR PASSWORD</h1>
</div>
<div class="creation-button">
  <p>CREATE</p>
</div>
<div class="pass-container hidden"> 
  <input type="text" value="" id="myInput">
  <button id="copyButton" onclick="copyText()">
    <span>Copy password</span>
  </button>
</div>`
}
