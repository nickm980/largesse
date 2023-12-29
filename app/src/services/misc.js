async function getCategories() {
    const response = await fetch("http://localhost:8081/api/v1/event/categories")
    return await response.json()
}

export {getCategories}