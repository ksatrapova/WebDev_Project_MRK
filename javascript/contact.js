function checkInputs() {
    const items = document.querySelectorAll(".item");
  
    for (const item of items) {
      if (item.value === "") {
        item.classList.add("error");
        item.parentElement.classList.add("error");   
  
      }
  
      item.addEventListener("keyup", () => {
        if (item.value !== "") {
          item.classList.remove("error");
          item.parentElement.classList.remove("error");
        } else {
          item.classList.add("error");
          item.parentElement.classList.add("error");   
  
        }
      });
    }
  }

  form.addEventListener("submit", (e) => {
  e.preventDefault();
  // sendEmail();
});