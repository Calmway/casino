<template>
    <div class="home_page">
        <sidebar></sidebar>
        <content></content>
    </div>
</template>

<script lang="ts">
import { useToDoStore } from "../store/casino";
import sidebar from "../components/sidebar.vue";
import content from "../components/content.vue";
export default {
    name: "login",
    components: { sidebar, content },
    setup() {
        const useStore = useToDoStore();
        return {
            useStore,
        }
    },
}
</script>
<style scope>
.home_page {
    display: grid;
    grid-template-columns: 0.1fr 1fr;
}
</style>