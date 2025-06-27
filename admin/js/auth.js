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

    const data = await response.json();

    console.log("Response JSON:", data);

    if (data.success) {
      window.location.href = "/admin/admin.php";
    }

    if (!data.success) {
      console.log(`${data.message}`);
      document.getElementById("error").style.display = "block";
    }

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  } catch (error) {
    console.error("Fetch error:", error);
  }
};
