const lastSavedNotes = document.querySelector(".lastSavedNote");
const userTextInput = document.getElementById("userText");
const saveBtn = document.getElementById("saveBtn");

const notesArr = [];

saveBtn.addEventListener("click", () => {
  if (userTextInput.value.length === 0) return;

  notesArr.push(userTextInput.value);

  localStorage.setItem("notes", JSON.stringify(notesArr));

  const getNotes = JSON.parse(localStorage.getItem("notes"));

  lastSavedNotes.textContent =
    getNotes.length > 0 ? getNotes[getNotes.length - 1] : "No notes yet";

  userTextInput.value = "";
});
