// const display = document.querySelector(".display");
// const buttons = document.querySelectorAll("button");

// buttons.forEach((button) => {
//   button.addEventListener("click", () => {
//     if (button.textContent === "AC") {
//       display.textContent = "0";
//     } else if (button.textContent === "=") {
//       // Calculate result
//       display.textContent = eval(display.textContent);
//     } else {
//       if (display.textContent === "0") {
//         display.textContent = button.textContent;
//       } else if {
//         display.textContent += button.textContent;
//         display.textContent /= button.textContent;
//         display.textContent *= button.textContent;
//       }
//     }
//   });
// });

const buttons = document.querySelectorAll(".buttons button");
const display = document.querySelector(".display");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.classList.contains("clear")) {
      display.textContent = "0";
    } else if (button.classList.contains("equals")) {
      // Calculate result
      try {
        // Replace ^ with ** for exponentiation, ÷ with / and × with *
        let expression = display.textContent
          .replace(/\^/g, "**")
          .replace(/÷/g, "/")
          .replace(/×/g, "*")
          .replace(/%/g, "%");
        display.textContent = eval(expression);
      } catch (error) {
        display.textContent = "Error";
      }
    } else {
      if (display.textContent === "0") {
        display.textContent = button.textContent;
      } else {
        display.textContent += button.textContent;
      }
    }
  });
});
