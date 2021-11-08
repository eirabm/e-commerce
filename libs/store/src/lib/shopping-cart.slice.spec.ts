import {
  fetchShoppingCart,
  shoppingCartAdapter,
  shoppingCartReducer,
} from './shopping-cart.slice';

describe('shoppingCart reducer', () => {
  it('should handle initial state', () => {
    const expected = shoppingCartAdapter.getInitialState({
      loadingStatus: 'not loaded',
      error: null,
    });

    expect(shoppingCartReducer(undefined, { type: '' })).toEqual(expected);
  });

  it('should handle fetchShoppingCarts', () => {
    let state = shoppingCartReducer(
      undefined,
      fetchShoppingCart.pending(null, null)
    );

    expect(state).toEqual(
      expect.objectContaining({
        loadingStatus: 'loading',
        error: null,
        entities: {},
      })
    );

    state = shoppingCartReducer(
      state,
      fetchShoppingCart.fulfilled([{ id: 1 }], null, null)
    );

    expect(state).toEqual(
      expect.objectContaining({
        loadingStatus: 'loaded',
        error: null,
        entities: { 1: { id: 1 } },
      })
    );

    state = shoppingCartReducer(
      state,
      fetchShoppingCart.rejected(new Error('Uh oh'), null, null)
    );

    expect(state).toEqual(
      expect.objectContaining({
        loadingStatus: 'error',
        error: 'Uh oh',
        entities: { 1: { id: 1 } },
      })
    );
  });
});
