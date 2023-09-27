async function fetchDummies() {
  try {
    const response = await fetch("https://dummyjson.com/users");
    if (!response.ok) {
      throw new Error("Erro ao buscar usuários.");
    }
    const data = await response.json();
    return data.users;
  } catch (error) {
    throw error;
  }
}

export { fetchDummies };
