export class BasicDrink {
    constructor(private _name: string, private _id?: number) { }
    get id(): number {
        return this._id;
    }
    get name(): string {
        return this._name;
    }
}
