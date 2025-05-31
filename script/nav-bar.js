function toggleMenu() {
  const navLinks = document.getElementById("nav-links");
  navLinks.classList.toggle("show");
}

const currentDate = new Date();
const year = currentDate.getFullYear();

document.getElementById("copyright-year").innerHTML = year;
