<template>
    <div class="flexer">
        <div class="bg">
            <router-link to="/"><div class="title">
                <font-awesome class="icon" icon="fa-solid fa-chevron-left"></font-awesome></div></router-link>
            <div class="c">
                <div class="sec">
                    <b>Create A New Event.</b>
                    <p>Post a listing for volunteers to join</p>
                </div>
                <div class="sec">
                    <b>Volunteers are here to help.</b>
                    <p>Your posting will be listed on a global directory for volunteers to sign up</p>
                </div>

                <div class="sec">
                    <b>Get the help you need. Anytime.</b>
                    <p>Volunteers are willing to help whenever you need them</p>
                </div>
            </div>
        </div>
        <div class="form-container">
            <div class="container">
                <h1>Create A New Event</h1>
                <p>Easiest way to get volunteers to help you with your event</p>
                <form>
                    <div class="flex"></div>
                    <label for="name">Full Name</label>
                    <input type="text" id="name" name="name" />

                    <label for="name">Company Name</label>
                    <input type="text" id="companyName" name="companyName" />

                    <label for="address">Address</label>
                    <input type="text" id="address" name="address" />

                    <label for="phone">Phone</label>
                    <input type="text" id="phone" name="phone" placeholder="(XXX)-XXX-XXXX" />

                    <label for="name">Brief Description</label>
                    <input type="text" id="description" name="description" />

                    <input type="submit" value="SUBMIT" />
                </form>
            </div>
        </div>

    </div>
</template>

<script></script>


<style scoped>
h1 {
    font-size: 2rem;
}

.title {
    font-weight: bold;
    position: absolute;
    top: 2rem;
    left: 2rem;
    color: white;
    font-size: 100px;
}

.icon {
    color: white;
}

.form-container .container {
    font-size: 5rem;
    margin: 0 auto;
    max-width: 500px;
}

.bg {
    background-image: url("@/assets/flowers.png");
    background-size: cover;
}

.form-container,
.bg {
    padding-top: 2rem;
    flex-basis: 50%;
}

.c {
    margin: 0 auto;
    max-width: 400px;
}

.sec {
    margin-top: 4rem;
    color: rgb(216, 216, 216);
}
.sec p {
    line-height: 1.5em;
    color: grey;
    margin-top: 5px;
    
}

.flexer {
    display: flex;
    height: 100%;
}

p {
    font-size: 1rem;
    opacity: .8;
    margin-top: 1rem;
    margin-bottom: 1rem;
}

form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

label {
    font-size: .8rem;
    margin-top: .5em;
    text-transform: uppercase;
    font-weight: bold;
}

input {
    background-color: rgba(0, 0, 0, 0.1);
    padding: 1em;
    border: none;
}

input[type="submit"] {
    background-color: #9e9377;
    font-weight: bold;
    color: #ece9e4;
    margin-top: 3rem;
    cursor: pointer;
    letter-spacing: 1.5px;
}

</style>
