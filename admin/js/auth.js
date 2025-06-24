submitForm = async (event) => {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const LoginDetails = {
    email: email,
    password: password,
  };

  try {
    const response = await fetch("/admin/php/auth.php", {
      method: "POST",
      body: JSON.stringify(LoginDetails),
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    if (data.success === true) {
      window.location.href = "/admin/admin.html";
    }

    if (data.success === false) {
      console.log(`${data.message}`);
    }
  } catch (error) {
    console.error("Fetch error:", error);
  }
};
