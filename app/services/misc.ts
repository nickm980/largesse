async function getPosts() {
    return [
        {
            title: "Binghamton Animal Shelter",
            description:
                "We are in need of some volunteers who can help us take care of these animals",
        },
    ];
}

async function getPost(id) {
    const response = await fetch(`http://localhost:8081/api/v1/event/${id}`);
    return await response.json();
}

async function getCategories() {
    const response = await fetch(
        "http://localhost:8081/api/v1/event/categories"
    );
    return await response.json();
}

async function getPostsByCategory(category) {
    const response = await fetch(
        `http://localhost:8081/api/v1/event/category/${category}`
    );
    return await response.json();
}

export { getPosts, getPost, getCategories, getPostsByCategory };
