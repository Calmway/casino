<template>
    <div v-if="useStore.listOfPages">
        <div class="page_count_wrapper">
            <div class="page_count" @click="useStore.changePage(index)"
                :class="useStore.currentPage == index ? 'active' : ''" v-for="index in parseInt(useStore.listOfPages)"
                :key="index">
                {{ index }}</div>
        </div>
    </div>
</template>

<script lang="ts">
import { useToDoStore } from "../store/casino";
import Game from "./game.vue";
export default {
    name: "login",
    components: { Game },
    setup() {
        const useStore = useToDoStore();
        return {
            useStore,
        }
    },
}
</script>
<style scope>
.page_count_wrapper {
    display: flex;
    justify-content: row wrap;
    gap: 10px;
}

.page_count {
    cursor: pointer;
    border: 1px solid #bebebe;
    padding: 3px;
}

.page_count.active {
    background: #bebebe;
    color: #fff;
}
</style>