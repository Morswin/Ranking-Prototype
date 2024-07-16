<script setup lang="ts">
import Navbar from "../components/Navbar.vue";
</script>

<template>
    <v-app>
        <Navbar>
            <RouterLink to="/ranking">
                <v-btn>Back to ranking</v-btn>
            </RouterLink>
        </Navbar>
        <v-main class="d-flex justify-center flex-column align-center">
            <h1>Options</h1>
        </v-main>
    </v-app>
</template>
