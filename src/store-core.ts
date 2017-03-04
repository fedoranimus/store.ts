export interface IStoreOptions<T> {
    data: T;
    keyProperty: string;
    plugins: IPlugin[];
    storages: IStorage[];
}

export interface IPlugin {

}

export interface IStorage {
    
}

export class Store<T> {
    private keyProperty: string;

    constructor(options:IStoreOptions<T>) {
        
    }

    public addStorage(storage: IStorage) {
        throw new Error('Not Implemented');
    }

    public addPlugin(plugin: IPlugin) {
        throw new Error('Not Implemented');
    }

    public get(key: string, defaultValue = null) {
        throw new Error('Not Implemented');
    }

    public put(data: T) {
        throw new Error('Not Implemented');
    }

    public forEach() {
        throw new Error('Not Implemented');
    }

    public fetch() {
        throw new Error('Not Implemented');
    }

    public delete() {
        throw new Error('Not Implemented');
    }

    public clear() {
        throw new Error('Not Implemented');
    }
}