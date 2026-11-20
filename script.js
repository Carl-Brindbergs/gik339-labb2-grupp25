const checkbox = document.querySelector('input[type="checkbox"]');
checkbox.addEventListener("change", function (event) {
  subDiv[0].style.backgroundColor = textField[0].value;
});

const textField = document.getElementsByClassName("textfield");
textField[0].addEventListener("input", ourFunction);
textField[1].addEventListener("input", ourFunction);

const button = document.getElementById("button");
button.addEventListener("click", function (event) {
  subDiv[0].remove();
});

const subDiv = document.getElementsByName("subDiv");

function ourFunction(event) {
  console.log(event.target);

  if (event.target.id === "content") {
    subDiv[0].innerHTML = event.target.value;
  }
}
