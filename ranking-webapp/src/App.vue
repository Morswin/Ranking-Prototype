<script setup lang="ts">
import { ref } from "vue";
import { Options, type IOptions } from "./data.ts";

const options = ref<IOptions>(new Options());
</script>

<template>
    <RouterView />
</template>
