const input = document.querySelector("#validation-input");
console.log(input);
const inputLength = input.getAttribute("data-length");
console.log(inputLength);

input.addEventListener("blur", (event) => {
  if (input.value.length !== Number(inputLength)) {
    input.classList.add("invalid");
  } else {
    input.classList.replace("invalid", "valid");
  }
});
