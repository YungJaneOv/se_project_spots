const InitialCards = [
  {
    name: "Val Thorens",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/1-photo-by-moritz-feldmann-from-pexels.jpg",
  },
  {
    name: "Restaurant terrace",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/2-photo-by-ceiline-from-pexels.jpg",
  },
  {
    name: "An outdoor cafe",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/3-photo-by-tubanur-dogan-from-pexels.jpg",
  },
  {
    name: "A very long bridge, over the forest and through the trees",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/4-photo-by-maurice-laschet-from-pexels.jpg",
  },
  {
    name: "Tunnel with morning light",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/5-photo-by-van-anh-nguyen-from-pexels.jpg",
  },
  {
    name: "Mountain house",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/6-photo-by-moritz-feldmann-from-pexels.jpg",
  },
];

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

InitialCards.forEach(function (item) {
  console.log(item.name);
  console.log(item.link);
});
