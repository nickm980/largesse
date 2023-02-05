function getPost(){
    console.log("getpost");
    return {
        "companyName": "companyName",
        "title": "Volunteer Event For Homeless Shelter" ,
        "reviews": [
            {
                "name": "John",
                "reason": "Reason",
                "rating": 5
            }
        ],
        "description": "Description of an event which happens to be a community service event.",
        "location": "location"
    }
}

export {getPost}