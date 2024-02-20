export class LoginResponse {
    data: LoginResponseData[] = [];
}
export class LoginResponseData {
    attributes: Attribute = new Attribute();
    id: string = "";
    type: string = "";
}
export class Attribute {
    'life-time': number = 0;
    'need-tfa': boolean = false;
    'refresh-token': string = "";
    token: string = "";
    'token-type': string = "";
}
export class UserBalanceResponse {
    data: UserBalance[] = [];
}
export class UserBalance {
    attributes: BalanceAttribute = new BalanceAttribute();
    id: string = "";
    type: string = "";
}
export class BalanceAttribute {
    available: number = 0;
    bonus: number = 0;
    currency: string = "";
    'in-play': number = 0;
}
export class GamesReponse {
    data: Game[] = [];
}
export class Game {
    attributes: GameAttribute = new GameAttribute();
    id: string = "";
    type: string = "";
}
export class GameAttribute {
    categories: string[] = [];
    'creation-date': string = "";
    devices: string[] = [];
    'has-demo': boolean = false;
    'has-freespins': boolean = false;
    image: string = ""
    'is-favorite': boolean = false;
    'is-mini-game': boolean = false;
    'is-new': boolean = false;
    'is-single-currency': boolean = false;
    title: string = "";
}
export class OpenGameResponse {
    data: OpenGame[] = [];
}
export class OpenGame {
    attributes: OpenGameAttribute = new OpenGameAttribute();
    id: string = "";
    type: string = "";
}
export class OpenGameAttribute {
    'launch-options': GameLaunchOptions = new GameLaunchOptions();
}
export class GameLaunchOptions {
    'game-url': string = "";
    strategy: string = "";
}