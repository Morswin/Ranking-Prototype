<script setup lang="ts">
import Navbar from "../components/Navbar.vue";
</script>

<template>
    <v-app>
        <Navbar></Navbar>
        <v-main class="d-flex justify-center flex-column align-center">
            <h1>Landing Page</h1>
            <RouterLink to="/ranking">
                <v-btn class="mt-6">Create an example ranking</v-btn>
            </RouterLink>
            <RouterLink to="/ranking">
                <v-btn class="mt-2">Create an empty ranking</v-btn>
            </RouterLink>
        </v-main>
    </v-app>
</template>
