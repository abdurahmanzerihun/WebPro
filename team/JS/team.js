function toggleBio(event, link) {
  event.preventDefault(); // prevent link from jumping

  const card = link.closest(".team-member");
  const bio = card.querySelector(".bio");

  bio.classList.toggle("hidden");
  link.textContent = bio.classList.contains("hidden") ? "View more" : "View less";
}
