const display = document.getElementById("display");
const numbers = document.querySelectorAll(".number");
const clearBtn = document.getElementById("clear");
const enterBtn = document.getElementById("enter");

let inputCode = "";
const secretCode = "0909"; // <-- ตั้งรหัสลับที่นี่

numbers.forEach(btn => {
  btn.addEventListener("click", () => {
    if (inputCode.length < 4) {
      inputCode += btn.textContent;
      display.textContent = inputCode.padEnd(4, "-");
    }
  });
});

clearBtn.addEventListener("click", () => {
  inputCode = "";
  display.textContent = "----";
});

enterBtn.addEventListener("click", () => {
  if (inputCode === secretCode) {
    display.textContent = "✔✔✔✔";
    document.querySelector(".safe-box").classList.add("safe-open");

    setTimeout(() => {
      window.location.href = "main.html"; // หน้าถัดไป
    }, 1000);
  } else {
    display.textContent = "XXXX";
    setTimeout(() => {
      inputCode = "";
      display.textContent = "----";
    }, 1000);
  }
});

// Animation: Fade in cards when scrolling
const items = document.querySelectorAll(".timeline-item");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelector(".card").classList.add("animate__animated", "animate__fadeInUp");
    }
  });
}, { threshold: 0.2 });

items.forEach(item => {
  observer.observe(item);
});
