 function createUserCard(user) {
  const userCard = document.createElement("div");
  userCard.classList.add("user-card");

  const userImage = document.createElement("img");
  userImage.classList.add("user-image");
  userImage.src = user.image

  const userName = document.createElement("span");
  userName.classList.add("user-name");
  userName.textContent = `Name: ${user.firstName}`

  const userEmail = document.createElement("span");
  userEmail.classList.add("user-email");
  userEmail.textContent = `Email: ${user.email}`

  userCard.appendChild(userImage);
  userCard.appendChild(userName);
  userCard.appendChild(userEmail);

  return userCard;
}

export { createUserCard };
