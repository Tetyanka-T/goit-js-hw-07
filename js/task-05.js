const input = document.querySelector("#name-input");
console.log(input);

const output = document.querySelector("#name-output");
console.log(output);

input.oninput = function () {
  if (input.value === "") {
    output.innerHTML = "незнакомец";
  } else {
    output.innerHTML = input.value;
  }
};
