async function getPosts() {
    return [
        {
            "title": "Binghamton Animal Shelter",
            "description": "We are in need of some volunteers who can help us take care of these animals"
        }
    ];
}
    // return {
    //     companyName: "companyName",
    //     title: "Volunteer Event For Homeless Shelter",
    //     reviews: [
    //         {
    //             name: "John",
    //             reason: "Reason",
    //             rating: 5,
    //         },
    //     ],
    //     description:
    //         "Description of an event which happens to be a community service event Description of an event which happens to be a community service event.",
    //     location: "location",
    // };


async function getPostsByCategory(title) {
    console.log(title);
    const response = await fetch(`https://localhost:3000/events/${title}`);
    return response;
    // return {
    //     companyName: "companyName",
    //     title: "Volunteer Event For Homeless Shelter",
    //     reviews: [
    //         {
    //             name: "John",
    //             reason: "Reason",
    //             rating: 5,
    //         },
    //     ],
    //     description:
    //         "Description of an event which happens to be a community service event Description of an event which happens to be a community service event.",
    //     location: "location",
    // };
}

export { getPosts, getPostsByCategory };
