import {
  default as createStore
} from 'store/createStore';

describe('(Store) createStore', () => {
    let store;

    before(async () => {
        store = (await createStore()).store;
        return store;
    });

    it('should have an empty asyncReducers object', () => {
        expect(store.asyncReducers).to.be.an('object');
        expect(store.asyncReducers).to.be.empty;
    });

    describe('(Router location)', () => {
        it('store should be initialized with Location state', () => {
            let { router } = store.getState();
            expect(router).to.be.an('object');
        });
    });
});
