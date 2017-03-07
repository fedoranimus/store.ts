export interface IStorage {
    read(key: string): string;
    write(datum: string, keyProperty: string): string;
    readAll(): object;
    delete(key: string): string;
}

export default class Memory implements IStorage {
    private storage = {};
    private keyProperty: string = null;

    constructor(data: string = null, keyProperty: string = null) {
        this.keyProperty = keyProperty;
    }

    public setKeyProperty(keyProperty: string) {
        this.keyProperty = keyProperty;
    }

    public setData(initialData: string) {
        throw new Error('Not Implemented');
    }

    public read(key: string): string {
        return this.storage[key];
    }

    public write(key: string, datum: string): string {
        this.storage[key] = datum;
        return key;
    }

    public readAll(): object {
        return this.storage;
    }

    public delete(key: string): string {
        const datum = this.storage[key];
        delete this.storage[key];
        return datum;
    }

    public reset() {
        this.storage = {};
    }
}