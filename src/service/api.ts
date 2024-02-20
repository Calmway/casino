import { BaseApi, ApiResult } from './baseApi';
import { GamesReponse, LoginResponse, LoginResponseData, OpenGameResponse, UserBalance, UserBalanceResponse } from '../models/types.ts';


class Api extends BaseApi {
    public async login(
        clientId: string,
        username: string,
        password: string): Promise<ApiResult<LoginResponse>> {
        return this.post<LoginResponse>('v2/login', {
            clientId,
            login: username,
            password: password
        });
    }
    public async refreshToken(
        clientId: string,
        refreshToken: string): Promise<ApiResult<LoginResponseData>> {
        return this.post<LoginResponseData>('/auth/token', {
            clientId,
            refreshToken
        });
    }
    public async getBalance(clientId: string, token: string): Promise<ApiResult<UserBalanceResponse>> {
        return this.get<UserBalanceResponse>(`v2/users/me/balance?clientId=${clientId}&auth=${token}`);
    }
    public async getGames(clientId: string): Promise<ApiResult<GamesReponse>> {
        return this.get<GamesReponse>(`v2/casino/games?clientId=${clientId}`);
    }
    public async openGame(
        gameId: string,
        clientId: string): Promise<ApiResult<OpenGameResponse>> {
        return this.post<OpenGameResponse>(`/v2/casino/games/${gameId}/session-demo?clientId=${clientId}`);
    }
}

export const api = new Api();