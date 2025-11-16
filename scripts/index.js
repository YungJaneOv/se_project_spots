const editProfileBtn = document.querySelector(".profile__edit-btn");
const editProfileModal = document.querySelector("#edit-profile-modal");
const editProfileCloseBtn = editProfileModal.querySelector(".modal__close-btn");
const editProfileForm = editProfileModal.querySelector(".modal__form");
const profileNameInput = editProfileForm.querySelector("#profile-name-input");
const profileDescriptionInput = editProfileForm.querySelector(
  "#profile-description-input"
);

const profileNameEl = document.querySelector(".profile__name");
const profileDescriptionEl = document.querySelector(".profile__description");

editProfileBtn.addEventListener("click", () => {
  profileNameInput.value = profileNameEl.textContent;
  profileDescriptionInput.value = profileDescriptionEl.textContent;
  openModal(editProfileModal);
  function openModal(modal) {
    modal.classList.add("modal_is-opened");
  }
});
editProfileCloseBtn.addEventListener("click", () => {
  closeModal(editProfileModal);
  function closeModal(modal) {
    modal.classList.remove("modal_is-opened");
  }
});

function handleEditProfileSubmit(evt) {
  evt.preventDefault();
  profileNameEl.textContent = profileNameInput.value.trim();
  profileDescriptionEl.textContent = profileDescriptionInput.value.trim();
  editProfileModal.classList.remove("modal_is-opened");
  editProfileForm.reset();
  editProfileBtn.focus();
}
editProfileForm.addEventListener("submit", handleEditProfileSubmit);

// -----------------------------
// New Post modal elements
// -----------------------------

const newPostBtn = document.querySelector(".profile__add-btn");
const newPostModal = document.querySelector("#new-post-modal");
const newPostCloseBtn = newPostModal.querySelector(".modal__close-btn");
const newPostForm = newPostModal.querySelector(".modal__form");
const postImageInput = newPostForm.querySelector("#post-image-input");
const postCaptionInput = newPostForm.querySelector("#post-caption-input");

newPostBtn.addEventListener("click", () => {
  newPostModal.classList.add("modal_is-opened");
});
newPostCloseBtn.addEventListener("click", () => {
  newPostModal.classList.remove("modal_is-opened");
});

function handleNewPostSubmit(evt) {
  evt.preventDefault();

  const imageUrl = postImageInput.value.trim();
  const caption = postCaptionInput.value.trim();

  console.log("New post image URL:", imageUrl);
  console.log("New post caption:", caption);

  newPostModal.classList.remove("modal_is-opened");
  newPostForm.reset();
  newPostBtn.focus();
}

newPostForm.addEventListener("submit", handleNewPostSubmit);
