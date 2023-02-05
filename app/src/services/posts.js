async function getPost(title){
    console.log(title);
    const reponse = await fetch(`https://localhost:3000/volunteer?q=${title}`);
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

export { getPost };
