<template>
    <div class="form-container">
        <h1>Create A New Event</h1>
        <p>Easiest way to get volunteers to help you with your event</p>
        <form>
            <label for="name">Full Name</label>
            <input type="text" id="name" name="name" />

            <label for="name">Company Name</label>
            <input type="text" id="name" name="name" />

            <label for="address">Address</label>
            <input type="text" id="address" name="address" />

            <label for="phone">Phone</label>
            <input type="text" id="phone" name="phone" placeholder="(XXX)-XXX-XXXX" />

            <label for="name">Brief Description</label>
            <input type="text" id="desc" name="desc" />

            <input type="submit" value="Submit" />
        </form>
    </div>
</template>

<script></script>

<style scoped>
h1 {
    font-size: 2rem;
}
.form-container {
    font-size: 5rem;
    max-width: 500px;
    margin: 0 auto;
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
    margin-top: 1em;
    text-transform: uppercase;
    font-weight: bold;
}
input {
    background-color: rgba(0, 0, 0, 0.1);
    padding: 1em;
    border: none;
}

input[type="submit"]{
    background-color: #9e9377;
    font-weight: bold;
    color: #ece9e4;
    margin-top: 3rem;
    cursor: pointer;
}
</style>
