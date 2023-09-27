function createError(error) {
  const errorContainer = document.createElement("div");
  errorContainer.classList.add('error-container')
  const errorMessage = document.createElement("span");

  errorMessage.textContent = error;

  errorContainer.appendChild(errorMessage);

  return errorContainer;
}

export { createError };
