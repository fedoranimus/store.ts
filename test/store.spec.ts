import { Expect, Test, TestFixture, SetupFixture } from 'alsatian';
import Store from '../src/store-core';

export interface TestData {
    key: string;
    value: any;
}

@TestFixture("Store Tests")
export class StoreTests {
    private store: Store<TestData>;

    private initialData = { key: "0", value: "Fred" };
    private updatedData = { key: "0", value: "Steve" };

    @SetupFixture
    public setupFixture() {
        // this function will be run ONCE before any test has run
        // you can use this to do setup that needs to happen only once
        this.store = new Store<TestData>();
    }

    @Test()
    public AddTest() {
        const key = this.store.put(this.initialData);
        Expect(key).toBe("0");
    }

    @Test()
    public UpdateTest() {
        const key = this.store.put(this.updatedData);
        Expect(key).toBe("0");
    }

    @Test()
    public GetTest() {
        const key = "0";
        const datum = this.store.get(key);
        Expect(datum.value).toBe(this.updatedData.value);
    }
}