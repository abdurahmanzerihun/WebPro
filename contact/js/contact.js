splitName = (fullName) => {
  const parts = fullName.trim().split(" ");
  const firstName = parts[0];
  const lastName = parts.slice(1).join(" ");

  return { firstName, lastName };
};

submitForm = (event) => {
  // event.preventDefault();

  const fullNameInput = document.getElementById("full_name").value;
  const { firstName, lastName } = splitName(fullNameInput);
  const phoneNumberInput = document.getElementById("phone_number").value;
  const emailInput = document.getElementById("email").value;
  const messageInput = document.getElementById("message").value;

  const formData = new FormData();
  formData.append("first_name", firstName);
  formData.append("last_name", lastName);
  formData.append("phone_number", phoneNumberInput);
  formData.append("email", emailInput);
  formData.append("message", messageInput);

  fetch("", {
    method: "POST",
    body: formData,
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Server response", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};
