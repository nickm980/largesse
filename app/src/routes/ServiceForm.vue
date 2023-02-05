<template>
    <h1>Offer Your Service!</h1>
    <form class="form-container">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" />

        <label for="address">Address:</label>
        <input type="text" id="address" name="address" />

        <label for="phone">Phone:</label>
        <input type="text" id="phone" name="phone" />

        <input type="submit" value="Submit" />
    </form>
</template>

<script></script>

<style>
.form-container {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    font-size: 5rem;
}
</style>
