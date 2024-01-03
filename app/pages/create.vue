<template>
    <div class="container">
        <div class="left-container">
            <div class="sec">
                <b>Create A New Event.</b>
                <p>Post a listing for volunteers to join</p>
            </div>
            <div class="sec">
                <b>Volunteers are here to help.</b>
                <p>
                    Your posting will be listed on a global directory for
                    volunteers to sign up
                </p>
            </div>

            <div class="sec">
                <b>Get the help you need. Anytime.</b>
                <p>Volunteers are willing to help whenever you need them</p>
            </div>
        </div>
        <div class="right-container">
            <h1>Create A New Event</h1>
            <p>Easiest way to get volunteers to help you with your event</p>
            <form
                action="http://localhost:8081/api/v1/event"
                id="form"
                method="POST"
                target="_blank"
            >
                <div class="flex"></div>
                <label for="title">Title</label>
                <input type="text" id="title" name="title" />

                <label for="place">Place</label>
                <input type="text" id="place" name="place" />

                <label for="name">Full Name</label>
                <input type="text" id="name" name="name" />

                <label for="name">Organization</label>
                <input type="text" id="organization" name="organization" />

                <label for="address">Address</label>
                <input type="text" id="address" name="address" />

                <label for="select">Category</label>
                <select name="category" id="select" form="form">
                    <option
                        v-for="category in categories"
                        :key="category"
                        value="category"
                    >
                        {{ category }}
                    </option>
                </select>

                <label for="name">Brief Description</label>
                <input type="text" id="description" name="description" />

                <input type="submit" value="SUBMIT" />
            </form>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { getCategories } from "/services/misc";

let categories = ref([]);

onMounted(async () => {
    categories.value = await getCategories();
});
</script>

<style scoped>
.container {
    display: flex;
}

.left-container {
    background-image: url("@/static/flowers.png");
    width: 50%;
}
.right-container {
    overflow-y: scroll;
    width: 50%;
}

form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}
</style>
