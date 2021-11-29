// switch themes
const INPUT_SWITCH = document.querySelector("#inputSwitch");
INPUT_SWITCH.addEventListener("click",
  (e) => {
    if (e.target.hasAttribute("checked")) {
      // if dark > light
      INPUT_SWITCH.removeAttribute("checked");
      INPUT_SWITCH.parentElement.parentElement.classList.add("bg-light");
      INPUT_SWITCH.parentElement.parentElement.classList.remove("bg-dark");
    } else {
      // if light > dark
      INPUT_SWITCH.setAttribute("checked", "");
      INPUT_SWITCH.parentElement.parentElement.classList.add("bg-dark");
      INPUT_SWITCH.parentElement.parentElement.classList.remove("bg-light");
    }
  }
);
