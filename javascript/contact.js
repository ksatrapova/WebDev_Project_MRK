function validateForm() {
  const fields = document.querySelectorAll(".field");
  let isFormValid = true; 

  fields.forEach((field) => {
    const input = field.querySelector(".item"); 
    const errorText = field.querySelector(".errortxt"); 

    //if input value is empty
    if (!input.value.trim()) {
      field.classList.add("error"); 
      errorText.style.display = "block"; 
      isFormValid = false; 
    } else {
      field.classList.remove("error"); 
      errorText.style.display = "none"; 
    }

    //validation
    input.addEventListener("keyup", () => {
      if (input.value.trim()) {
        field.classList.remove("error"); 
        errorText.style.display = "none"; 
      } else {
        field.classList.add("error"); 
        errorText.style.display = "block"; 
      }
    });
  });

  return isFormValid;
}

//form submission
const form = document.querySelector("form"); // form element
form.addEventListener("submit", (e) => {
  const isFormValid = validateForm(); // form validation

  if (!isFormValid) {
    e.preventDefault(); // form didnt get filled out
    alert("Please fill out all required fields.");
  } else {
    // refresh page
    alert("Email has been sent!");
  }
});
