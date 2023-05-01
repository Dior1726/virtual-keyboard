const buttons = document.querySelectorAll("button");
const textarea = document.querySelector("#textarea");

// Add event listener for keydown event
window.addEventListener("keydown", (event) => {
  const key = event.key;
  // Loop through all buttons and highlight the button that matches the pressed key
  buttons.forEach((button) => {
    if (button.textContent === key.toUpperCase()) {
      button.style.backgroundColor = "#ccc";
      textarea.value += button.textContent
      button.classList.add('active')
    }

    if (button.id.toUpperCase() === key.toUpperCase()) {
      button.style.backgroundColor = "#ccc";
      button.classList.add('active')
    }
  });

  // Handle functionality for special keys
  switch (key) {
    case " ":
      textarea.value += " ";
      break;
    case "Control":
      console.log("Ctrl key pressed");
      break;
    case "Alt":
      console.log("Alt key pressed");
      break;
    case "Enter":
      textarea.value += "\n";
      break;
    case "Delete":
      textarea.value = "";
      break;
    case "Backspace":
      textarea.value = textarea.value.slice(0, -1);
      break;
    case "ArrowUp":
      textarea.selectionStart--;
      textarea.selectionEnd--;
      break;
    case "ArrowDown":
      textarea.selectionStart++;
      textarea.selectionEnd++;
      break;
    case "ArrowLeft":
      textarea.selectionStart--;
      textarea.selectionEnd--;
      break;
    case "ArrowRight":
      textarea.selectionStart++;
      textarea.selectionEnd++;
      break;
  }
});

// Add event listener for keyup event
window.addEventListener("keyup", (event) => {
  const key = event.key;
  // Loop through all buttons and remove the highlight from the button that matches the released key
  buttons.forEach((button) => {
    if (button.textContent === key.toUpperCase()) {
      button.style.backgroundColor = "#fff";
      button.classList.remove('active')
    }

    if (button.id.toUpperCase() === key.toUpperCase()) {
      button.style.backgroundColor = "#fff";
      button.classList.remove('active')
    }
  });
});

// Add event listener for button click event
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const buttonText = button.textContent;
    switch (buttonText) {
      case "Space":
        textarea.value += " ";
        break;
      case "Ctrl":
        console.log("Ctrl key pressed");
        break;
      case "Alt":
        console.log("Alt key pressed");
        break;
      case "Enter":
        textarea.value += "\n";
        break;
      case "Delete":
        textarea.value = "";
        break;
      case "Backspace":
        textarea.value = textarea.value.slice(0, -1);
        break;
      case "↑":
        textarea.selectionStart--;
        textarea.selectionEnd--;
        break;
      case "↓":
        textarea.selectionStart++;
        textarea.selectionEnd++;
        break;
      case "←":
        textarea.selectionStart--;
        textarea.selectionEnd--;
        break;
      case "→":
        textarea.selectionStart++;
        textarea.selectionEnd++;
        break;
      default:
        textarea.value += buttonText;
    }
  });
});
