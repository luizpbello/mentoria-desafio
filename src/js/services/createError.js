function createError(error) {
  const errorContainer = document.createElement("div");

  const errorMessage = document.createElement("span");
  errorMessage.textContent = error;

  errorContainer.appendChild(errorMessage);

  return errorContainer;
}

export { createError };
