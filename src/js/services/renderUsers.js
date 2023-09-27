import { createUserCard } from "./createCards.js";
import { fetchDummies } from "./fetchData.js";
import { elements } from "../utils/elements.js";

async function renderUsers() {
  const container = document.getElementById("user-list");

  try {
    const users = await fetchDummies();
    users.forEach(async (user) => {
      const userCard = await createUserCard(user);
      container.appendChild(userCard);
      console.log(user)
    });
  } catch (error) {
    console.log(error);
  }
}

export { renderUsers };
