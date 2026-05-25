import { eventsStore } from "./materials.js";

const filteredDataElement = document.getElementById("filteredData");
const date = document.getElementById("date");
const type = document.getElementById("type");
const distance = document.getElementById("distance");
const category = document.getElementById("category");

// One object that collects all states, here we store current filter values
const filters = {
  date: "",
  type: "",
  distance: "",
  category: "",
};

// Event listeners for select elements to get optional values for filtering events
date.addEventListener("change", (e) => {
  filters.date = e.target.value;
  applyFilters();
});

type.addEventListener("change", (e) => {
  filters.type = e.target.value;
  applyFilters();
});

distance.addEventListener("change", (e) => {
  filters.distance = e.target.value;
  applyFilters();
});

category.addEventListener("change", (e) => {
  filters.category = e.target.value;
  applyFilters();
});

// FUnction to match array's date object with option value
function formatEventDate(date) {
  return new Date(date).toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
}

// Function that applies all filters
function applyFilters() {
  const filteredEvents = eventsStore.filter((event) => {
    return (
      (!filters.date || formatEventDate(event.date) === filters.date) &&
      (!filters.type || event.type === filters.type) &&
      (!filters.distance || event.distance <= Number(filters.distance)) &&
      (!filters.category || event.category === filters.category)
    );
  });
  // Clean all previous data in element
  filteredDataElement.innerHTML = "";

  renderEvents(filteredEvents);
}

// Function to render elements with data in html
function renderEvents(eventsArr) {
  const events = eventsArr.forEach((event) => {
    const calendarDate = new Date(event.date);
    const datePart = calendarDate.toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
    });

    const timePart = calendarDate.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
      timeZoneName: "short",
    });

    const formatted = `${datePart} · ${timePart}`;

    const container = document.createElement("div");
    container.classList.add("filterPage__filtered__data-container", "flex");

    const img = document.createElement("img");
    img.src = event.image;
    img.alt = "Events image";

    const dataInfoContainer = document.createElement("div");
    dataInfoContainer.classList.add(
      "filterPage__filtered__data-info-container",
      "flex",
      "flex-col",
    );

    const dataInfo = document.createElement("div");
    dataInfo.classList.add(
      "filterPage__filtered__data-info",
      "flex",
      "flex-col",
    );

    const date = document.createElement("p");
    date.classList.add("filterPage__filtered__data-info-date");
    date.textContent = formatted;

    const h2 = document.createElement("h2");
    h2.textContent = event.title;

    const tag = document.createElement("p");
    tag.classList.add("filterPage__filtered__data-info-tag");
    tag.textContent = `${event.category} (${event.distance} km)`;

    const attendees = document.createElement("p");
    attendees.classList.add("filterPage__filtered__data-info-attendees");
    attendees.textContent = `${event.attendees ? event.attendees + " attendees" : ""}`;

    dataInfo.append(date, h2, tag);
    dataInfoContainer.append(dataInfo, attendees);
    container.append(img, dataInfoContainer);

    filteredDataElement.append(container);
  });
}

applyFilters();
