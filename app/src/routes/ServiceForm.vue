<template>
    <div class="form-container">
        <h1>Offer Your Service!</h1>
        <form>
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" />

            <label for="address">Address:</label>
            <input type="text" id="address" name="address" />

            <label for="phone">Phone:</label>
            <input type="text" id="phone" name="phone" />

            <input type="submit" value="Submit" />
        </form>
    </div>
</template>

<script></script>

<style>
.form-container {
    font-size: 5rem;
    max-width: 500px;
    margin: 0 auto;
}

form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}
label {
    font-size: 1.5rem;
    margin-top: 1em;
}
input {
    background-color: rgba(0, 0, 0, 0.1);
    padding: 1em;
    border: none;
}

input[type="submit"]{
    background-color: rgba(0, 0, 0, 0.472);
}
</style>
