var counterText = 0;
var counterRadioButton = 0;
var counterCheckBox = 0;
var counterTextArea = 0;
var buttonText = 0;

var counter = 0;
var limit = 3;

limit = window.prompt("How many form elements you want? ");

function addAllInputs(divName, inputType) {
  console.log(divName);
  console.log(addAllInputs.inputType);
  if (counter == limit) {
    alert("You have reached the limit of adding " + counter + " inputs");
  } else {
    var newdiv = document.createElement("div");
    switch (inputType) {
      case "text":
        newdiv.innerHTML =
          "Textbox " +
          (counterText + 1) +
          " <br><input type='text' name='myInputs[]'>";
        counterText++;
        break;
      case "radio":
        newdiv.innerHTML =
          "Radio button " +
          (counterRadioButton + 1) +
          " <br><input type='radio' name='myRadioButtons[]'>";
        counterRadioButton++;
        break;
      case "checkbox":
        newdiv.innerHTML =
          "Checkbox " +
          (counterCheckBox + 1) +
          " <br><input type='checkbox' name='myCheckBoxes[]'>";
        counterCheckBox++;
        break;
      case "textarea":
        newdiv.innerHTML =
          "Textarea " +
          (counterTextArea + 1) +
          " <br><textarea name='myTextAreas[]'>type here...</textarea>";
        counterTextArea++;
        break;
      case "button":
        newdiv.innerHTML =
          "Button " +
          (buttonText + 1) +
          " <br><button name='myButton[]'>BUTTON</button>";
        buttonText++;
        break;
    }
    document.getElementById(divName).appendChild(newdiv);
    counter++;
  }
}
