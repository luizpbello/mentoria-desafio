import { createUserCard } from "./createCards.js";
import { fetchDummies } from "./fetchData.js";
import { createError } from "./createError.js";

async function renderUsers() {
  const container = document.getElementById("user-list");

  try {
    const users = await fetchDummies();
    users.forEach(async (user) => {
      const userCard = await createUserCard(user);
      container.appendChild(userCard);
    });
  } catch (error) {
    const fetchError = await createError(error)
    container.appendChild(fetchError)
  }
}

export { renderUsers };
