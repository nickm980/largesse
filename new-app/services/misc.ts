async function getCategories() {
  try {
    const response = await fetch(
      "http://localhost:8081/api/v1/event/categories"
    );
    return await response.json();
  } catch (error) {
    return [];
  }
}

export { getCategories };
