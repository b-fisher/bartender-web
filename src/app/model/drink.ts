export class Drink {
    constructor(private _name: string, private _id?: number) { }
    get id(): number {
        return this.id;
    }
    get name(): string {
        return this._name;
    }
}
