splitName = (fullName) => {
  const parts = fullName.trim().split(" ");
  const firstName = parts[0];
  const lastName = parts.slice(1).join(" ");

  return { firstName, lastName };
};

submitForm = async () => {
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
      const suc_msg = document.getElementById("suc-msg");
      suc_msg.innerHTML = "Message sent! We will contact you shortly.";
      suc_msg.style.display = "block";

      document.getElementById("full_name").value = "";
      document.getElementById("phone_number").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";
    } else {
      const err_msg = document.getElementById("err-msg");
      err_msg.innerHTML = "Somthing went wrong, Try again!";
      err_msg.style.display = "block";

      console.error("Error: " + data.message);
    }
  } catch (error) {
    console.error("Fetch error:", error);
  }
};

showMap = (mapId, event) => {
  document.querySelectorAll(".map").forEach((map) => {
    map.style.display = "none";
  });

  document.getElementById(mapId).style.display = "block";

  document.querySelectorAll(".map-show-links button").forEach((btn) => {
    btn.classList.remove("active");
  });

  // document.getElementById(mapId).style.color = "#00b5ed";
  event.target.classList.add("active");
};
