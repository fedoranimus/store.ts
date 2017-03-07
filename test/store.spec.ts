import { Expect, Test, TestFixture, SetupFixture } from 'alsatian';
import Store from '../src/store-core';

export interface TestData {
    key: string;
    value: any;
}

@TestFixture("Store Tests")
export class StoreTests {
    private store: Store<TestData>;

    private initialData1 = { key: "0", value: "Fred" };
    private updatedData = { key: "0", value: "Steve" };
    private initialData2 = { key: "1", value: "Randall" };

    @SetupFixture
    public setupFixture() {
        // this function will be run ONCE before any test has run
        // you can use this to do setup that needs to happen only once
        this.store = new Store<TestData>();
    }

    @Test()
    public Add() {
        const key = this.store.put(this.initialData1);
        Expect(key).toBe("0");
    }

    @Test()
    public Update() {
        const key = this.store.put(this.updatedData);
        Expect(key).toBe("0");
    }

    @Test()
    public Get() {
        const key = "0";
        const datum = this.store.get(key);
        Expect(datum).toEqual(this.updatedData);
    }

    @Test()
    public Delete() {
        const key = "0";
        this.store.remove(key);
        const datum = this.store.get(key);
        Expect(datum).toBe(undefined);
    }

    @Test()
    public Clear() {
        const key = this.store.put(this.initialData2);
        this.store.clear();
        Expect(this.store.get(key)).toBe(undefined);
    }
}