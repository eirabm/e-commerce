import { render } from '@testing-library/react';

import BackgroundLayer from './background-layer';

describe('BackgroundLayer', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BackgroundLayer />);
    expect(baseElement).toBeTruthy();
  });
});
