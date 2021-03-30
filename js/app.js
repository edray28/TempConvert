"use strict";
const cel_to_far = document.querySelector("#flexRadioDefault1");
const far_to_cel = document.querySelector("#flexRadioDefault2");
const convert_button = document.querySelector("#convert");
const input_temp = document.querySelector("#temp_input");
const dispTemp = document.querySelector(".container-sm:first-child");
const new_element = document.createElement("p");

const convert_temp = () => {
  if (input_temp.value == "") {
    alert("Please Enter A Number ");
  } else {
    if (cel_to_far.checked) {
      const cel = (input_temp.value * 9) / 5 + 32;
      new_element.innerText = cel + "˚Degrees";
    } else {
      const far = ((input_temp.value - 32) * 5) / 9;
      new_element.innerText = Math.round(far) + "˚Degrees";
    }
    dispTemp.append(new_element);
    dispTemp.style.display = "block";
  }
};

convert_button.addEventListener("click", convert_temp);
