document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header_area");
    if (window.scrollY > 270) {
      header.classList.add("shrink");
    } else {
      header.classList.remove("shrink");
    }
  });
});


window.addEventListener("load", startCounters);
window.addEventListener("resize", startCounters);

function startCounters() {
  const counters = document.querySelectorAll(".count h5");
  const countersQuantity = counters.length;
  const counterValues = [];

  for (let i = 0; i < countersQuantity; i++) {
    counterValues[i] = parseInt(counters[i].innerText);
  }

  const count = (start, value, index) => {
    let current = start;
    const interval = setInterval(() => {
      if (current < value) {
        current++;
        counters[index].innerText = current;
      } else {
        clearInterval(interval);
      }
    }, 10); // 10ms interval for smoother animation
  };

  for (let j = 0; j < countersQuantity; j++) {
    count(0, counterValues[j], j);
  }
}
