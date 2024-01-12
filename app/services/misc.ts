async function getPosts() {
    const response = await fetch("http://localhost:8081/api/v1/event/");
    return await response.json();
}

async function getPost(id: string) {
    const response = await fetch(`http://localhost:8081/api/v1/event/${id}`);
    return await response.json();
}

async function getPostsByCategory(category: string) {
    const response = await fetch(
        `http://localhost:8081/api/v1/event/category/${category}`
    );
    return await response.json();
}

export { getPosts, getPost, getPostsByCategory };
