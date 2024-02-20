<template>
    <div class="game_component" v-for="game in useStore.paginatedGames" :key="game.id">
        <div><img :src="game.attributes.image" alt=""></div>
        <div class="game_text">{{ game.attributes.title }}</div>
        <div><button @click="openGame(game.id)">Play Demo</button></div>
        <a href=""></a>
    </div>
</template>

<script lang="ts">
import { api } from "../service/api";
import { useToDoStore } from "../store/casino";
import Swal from "sweetalert2";
export default {
    name: "login",
    setup() {
        const useStore = useToDoStore();
        async function openGame(id: string) {
            Swal.showLoading();
            const response = await api.openGame(id, "default");
            if (response.error || response.errorMessage) {
                Swal.fire({
                    icon: "error",
                    text: response.errorMessage
                });
                return;
            }
            if (response.data && response.data.data) {
                Swal.close();
                const url = response.data?.data[0].attributes["launch-options"]["game-url"];
                if (url) {
                    window.open(url, '_blank');
                }
            }
        }
        return {
            openGame,
            useStore,
        }
    },
}
</script>
<style scope>
.game_component {
    display: flex;
    flex-flow: column wrap;
    max-width: 180px;
    align-items: center;
    border-radius: 20px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
    padding: 15px;
}

.game_text {
    word-break: break-word;
    text-align: center;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
}

img {
    width: 150px;
    height: 150px;
    border-radius: 5px;
}

.game_component button {
    margin-top: 10px;
    background: #6b5b95;
    border-color: #6b5b95;
}

.game_component button:hover {
    background: #483d64;
    border-color: #483d64;
}
</style>