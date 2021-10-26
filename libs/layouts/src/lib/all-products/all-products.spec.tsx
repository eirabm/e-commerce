import { render } from '@testing-library/react';

import AllProducts from './all-products';

describe('AllProducts', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AllProducts />);
    expect(baseElement).toBeTruthy();
  });
});
