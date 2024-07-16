<script setup lang="ts">
import Navbar from "../components/Navbar.vue";
</script>

<template>
    <v-app>
        <Navbar>
            <RouterLink to="/options">
                <v-btn>Options</v-btn>
            </RouterLink>
        </Navbar>
        <v-main class="d-flex justify-center flex-column align-center">
            <h1>Ranking</h1>
        </v-main>
    </v-app>
</template>
