async function createUserCard(user) {
  const userCard = document.createElement("div");
  userCard.classList.add("user-card");

  const userImage = document.createElement("img");
  userImage.classList.add("user-image");

  const userName = document.createElement("span");
  userName.classList.add("user-name");

  const userEmail = document.createElement("span");
  userEmail.classList.add("user-email");

  userCard.appendChild(userImage);
  userCard.appendChild(userName);
  userCard.appendChild(userEmail);

  return userCard;
}

export { createUserCard };
