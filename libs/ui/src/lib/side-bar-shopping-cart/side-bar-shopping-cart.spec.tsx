import { render } from '@testing-library/react';

import SideBarShoppingCart from './side-bar-shopping-cart';

describe('SideBarShoppingCart', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SideBarShoppingCart />);
    expect(baseElement).toBeTruthy();
  });
});
