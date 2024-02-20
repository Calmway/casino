import { defineStore } from 'pinia';
import swal from 'sweetalert2';
import { api } from '../service/api';
import { Game, LoginResponseData, UserBalance } from '../models/types';
import router from '../router';

export const useToDoStore = defineStore('sessionStore', {
    state: () => ({
        tokenData: new LoginResponseData(),
        currentBalance: [] as UserBalance[],
        listOfGames: [] as Game[],
        currentPage: 1,
    }),
    getters: {
        paginatedGames(state) {
            if (this.currentPage === 1) {
                return state.listOfGames.slice(0, 100);
            } else {
                const nextCount = this.currentPage * 100 - 100;
                var g = state.listOfGames.slice(nextCount, 100 * this.currentPage);
                return g;
            }
        },
        listOfPages(state) {
            const p = state.listOfGames.length / 100
            return Math.round(p);
        }
    },
    actions: {
        async login(username: string, userpassword: string) {
            swal.showLoading();
            const response = await api.login("default", username, userpassword);
            if (response.error || response.errorMessage) {
                swal.fire({
                    icon: "error",
                    text: response.errorMessage
                });
                return;
            }
            if (response.data) {
                this.tokenData = response.data.data[0];
                router.push({name: 'home'});
                setInterval(() => this.refreshToken(), 800000)
                swal.close();
            }
        },
        async refreshToken() {
            const response = await api.refreshToken("default", this.tokenData.attributes['refresh-token']);
            if (response.error || response.errorMessage) {
                swal.fire({
                    icon: "error",
                    text: response.errorMessage
                });
                return;
            }
            if (response.data) {
                this.tokenData = response.data;
                swal.close();
            }
        },
        async getBalance() {
            const response = await api.getBalance("default", this.tokenData.attributes.token);
            if (response.error || response.errorMessage) {
                swal.fire({
                    icon: "error",
                    text: response.errorMessage
                });
                return;
            }
            if (response.data) {
                this.currentBalance = response.data.data;
                swal.close();
            }
        },
        async getGames() {
            const response = await api.getGames("default");
            if (response.error || response.errorMessage) {
                swal.fire({
                    icon: "error",
                    text: response.errorMessage
                });
                return;
            }
            if (response.data) {
                for (let index = 0; index < 20; index++) {
                    this.listOfGames = response.data.data;
                }
                swal.close();
            }
        },
        changePage(page: number) {
            this.currentPage = page;
        }
    },
})