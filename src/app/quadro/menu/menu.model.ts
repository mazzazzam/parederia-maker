/*
Item do menu do quadro.
*/
export class Item {
    id: string;
    symbol: string; // imagem
    action: string;

    constructor(obj?: any) {
        this.id = obj && obj.id || null;
        this.symbol = obj && obj.symbol || null;
        this.action = obj && obj.action || null;
    }
}