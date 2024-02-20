<template>
    <div class="login_page">
        <div class="login_form">
            <h3 style="text-align: center;">Login</h3>
            <div>
                <input ref="field_username" placeholder="Username" v-model="username" type="text" class="login_name">
            </div>
            <div><input ref="field_password" placeholder="Password" v-model="password" type="password" class="login_password"></div>
            <div style="text-align: center;"><button @click="submit">Submit</button></div>
        </div>
    </div>
</template>
<script lang="ts">
import { ref } from 'vue';
import { useToDoStore } from "../store/casino";
import swal from 'sweetalert2';
export default {
    name: "login",
    setup() {
        const username = ref("richard");
        const password = ref("poker");
        const useStore = useToDoStore();
        function submit() {
            if (!username.value) {
                swal.fire({
                    icon: 'error',
                    text: 'Пожалуйста, заполните поле Username'
                });
                return;
            }
            if (!password.value) {
                swal.fire({
                    icon: 'error',
                    text: 'Пожалуйста, заполните поле Password'
                });
                return;
            }
            useStore.login(username.value, password.value);
        }
        return {
            username,
            password,
            submit,
            useStore,
        }
    },
}
</script>
<style scope>
.login_page{
    height: 90vh;
    background-image: url(https://evenbetgaming.com/wp-content/themes/evenbet2023/img/home/homepage-top-bg.png);
    background-repeat:  no-repeat;
    /* background-position: 0 50%; */
}

.login_form {
    width: 50%;
    margin: 0 auto;
    padding-top: 150px;
    display: flex;
    flex-flow: column wrap;
    align-content: center;
}

.login_form div {
    margin-top: 15px;
}

input {
    padding: 10px;
    border: 1px solid #bebebe;
    border-radius: 10px;
}

button {
    cursor: pointer;
    padding: 10px;
    border-radius: 10px;
    border: 1px solid darkseagreen;
    background: darkseagreen;
    color: #fff;
}

button:hover {
    background: darkolivegreen;
    border-color: darkolivegreen;
}
</style>