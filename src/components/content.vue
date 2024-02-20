<template>
    <div class="content_component">
        <p>Список игр</p>
        <div class="list_of_games">
            <Game></Game>
            <paginator></paginator>
        </div>
        
    </div>
</template>

<script lang="ts">
import { useToDoStore } from "../store/casino";
import { onMounted } from 'vue';
import Game from "./game.vue";
import paginator from "./paginator.vue"
export default {
    name: "login",
    components: { Game, paginator },
    setup() {
        const useStore = useToDoStore();
        onMounted(async () => {
            await useStore.getGames();
        })
        return {
            useStore,
        }
    },
}
</script>
<style scope>
.content_component {
    background: #878f99;
    height: 100%;
    padding: 50px 25px;
    overflow-y: auto;
}

.list_of_games {
    display: flex;
    flex-flow: row wrap;
    gap: 15px;
}
</style>