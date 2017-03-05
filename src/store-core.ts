import Memory from '../storage/memory';

export interface IStoreOptions<T> {
    data: T|T[];
    keyProperty: string;
    plugins: IPlugin[];
    storage: IStorage;
}

export interface IPlugin {
    // Not sure if I want this
}

export interface IStorage {
    read(key: string): string;
    write(datum: string, keyProperty: string): string;
    readAll(): object;
    delete(key: string): string;
    ensureKey(key: string): string;
    // Not sure if I want this
}

export default class Store<T> {
    private keyProperty: string = "key";
    private storage = new Memory();

    constructor(options:IStoreOptions<T> = null) {
        if(options) {
            if(options.keyProperty) this.keyProperty = options.keyProperty;
            if(options.storage) {
                console.error('Only default memory storage is available');
            }
        }
        this.storage.setKeyProperty(this.keyProperty);
    }

    public setData(data: T|T[]) {
        throw new Error('Not Implemented');
    }

    public setStorage(storage: IStorage) {
        throw new Error('Not Implemented');
    }

    public addPlugin(plugin: IPlugin) {
        throw new Error('Not Implemented');
    }

    public get(key: string, defaultValue: T = null): T {
        return this.deserialize(this.storage.read(key));
    }

    public put(data: T): string { //this should probably only exist with the 'evented' plugin
        const existingDatum = this.storage.read(data[this.keyProperty]); //check if the key exists
        const key = data[this.keyProperty];
        if(existingDatum) {
            this.storage.write(key, this.serialize(data));
        } else {
            this.storage.write(key, this.serialize(data));
        }

        return key;
    }

    public putRange(dataRange: T[]): string[] {
        throw new Error('Not Implemented');
    }

    public forEach() {
        throw new Error('Not Implemented');
    }

    // public fetch(): Collection<T> {
    //     throw new Error('Not Implemented');
    //     //return new Collection<T>(this.storage.readAll());
    // }

    public remove(): T {
        throw new Error('Not Implemented');
    }

    public clear() {
        throw new Error('Not Implemented');
    }

    private serialize(data: T): string {
        return JSON.stringify(data);
    }

    private deserialize(stringValue: string, defaultValue: T = null): T {
        let value = null;
        try {
            value = JSON.parse(stringValue);
        } catch(e) {
            value = stringValue;
        }

        return ( value ? value : defaultValue);
    }
}