document.addEventListener("DOMContentLoaded", function () {
  const dateInput = document.getElementById("date-input");
  const selectedDate = document.getElementById("selected-date");

  dateInput.addEventListener("change", function () {
    const newDate = new Date(this.value);
    const formattedDate = newDate.toLocaleDateString("en-US", {
      day: "numeric",
      month: "short",
    });
    selectedDate.textContent = `📅 ${formattedDate}`;
  });

  const venues = document.querySelectorAll(".venue");
  venues.forEach((venue) => {
    venue.addEventListener("click", function () {
      window.location.href = "page5.html"; 
    });
  });

  const searchInput = document.querySelector(".search-bar input");
  const venueGrid = document.querySelector(".venues-grid");
  searchInput.addEventListener("input", function () {
    const query = this.value.toLowerCase();
    const venueItems = venueGrid.querySelectorAll(".venue");
    venueItems.forEach((venue) => {
      if (venue.textContent.toLowerCase().includes(query)) {
        venue.style.display = "block";
      } else {
        venue.style.display = "none";
      }
    });
  });
});