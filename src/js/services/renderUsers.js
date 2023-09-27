import { createUserCard } from "./createCards.js";
import { fetchDummies } from "./fetchData.js";

async function renderUsers() {
  const container = document.getElementById("user-list");

  try {
    const users = await fetchDummies();
    users.forEach(async (user) => {
      const userCard = await createUserCard(user);
      container.appendChild(userCard);
    });
  } catch (error) {
    console.log(error);
  }
}

export { renderUsers };
