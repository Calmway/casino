<template>
    <div class="side_bar">
        Welcome
        User001
        <br>
        <br>
        Баланс:
        <p style="margin-top: 8px;" v-if="firstUserBalance">{{ firstUserBalance }} $</p>
    </div>
</template>

<script lang="ts">
import { useToDoStore } from "../store/casino";
import { computed, onMounted } from 'vue';
export default {
    name: "login",
    setup() {
        const useStore = useToDoStore();
        const firstUserBalance = computed(() => useStore.currentBalance.length > 0 ? useStore.currentBalance[0].attributes.available : 0);
        onMounted(async () => {
            await useStore.getBalance();
            setInterval(async () => await useStore.getBalance(), 30000);
        })
        return {
            firstUserBalance,
            useStore,
        }
    },
}
</script>
<style scope>
.side_bar {
    height: 100%;
    padding: 50px 15px;
    text-align: center;
    color: #fff;
    border-right: 1px solid #6b5b95;
    background: #6b5b95;
    box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;
}
</style>