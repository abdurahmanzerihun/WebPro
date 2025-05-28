splitName = (fullName) => {
  const parts = fullName.trim().split(" ");
  const firstName = parts[0];
  const lastName = parts.slice(1).join(" ");

  return { firstName, lastName };
};

submitForm = async (event) => {
  event.preventDefault();

  const fullName = document.getElementById("full_name").value;
  const { firstName, lastName } = splitName(fullName);
  const phoneNumber = document.getElementById("phone_number").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  const messageDetails = {
    first_name: firstName,
    last_name: lastName,
    phone_number: phoneNumber,
    email: email,
    message: message,
  };

  try {
    const response = await fetch("../php/message.php", {
      method: "POST",
      body: JSON.stringify(messageDetails),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    if (data.success) {
      alert("Message sent!");
    } else {
      alert("Error: " + data.message);
    }
  } catch (error) {
    console.error("Fetch error:", error);
    alert("Failed to send message. Check console.");
  }
};
