import { render } from '@testing-library/react';

import FeaturedProducts from './featured-products';

describe('FeaturedProducts', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FeaturedProducts />);
    expect(baseElement).toBeTruthy();
  });
});
