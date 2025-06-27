document.addEventListener("DOMContentLoaded", function() {
  fetch("/admin/php/data.php")
    .then((response) => response.json())
    .then((data) => {
      const container = document.getElementById("messages");
      container.innerHTML = "";

      if (Array.isArray(data) && data.length > 0) {
        data.forEach((msg) => {
          const div = document.createElement("div");
          div.classList.add("message-entry");
          div.innerHTML = `
                        <strong>${msg.first_name} ${msg.last_name}</strong> 
                        (<em>${msg.phone_number}</em>, <a href="mailto:${msg.email}">${msg.email}</a>)<br>
                        <p>${msg.message}</p>
                        <small>${msg.created_at}</small>
                        <hr>
                    `;
          container.appendChild(div);
        });
      } else {
        container.textContent = "No messages found.";
      }
    })
    .catch((err) => {
      console.error("Fetch error:", err);
      document.getElementById("messages").textContent =
        "Error loading messages.";
    });
});
