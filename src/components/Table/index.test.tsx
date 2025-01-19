import { render, screen } from '@testing-library/react';

import { ActionButton } from '.';

describe('ActionButton', () => {
  it('should render correctly', async () => {
    render(<ActionButton variant="plus-circle" />);
    expect(screen.getByTestId('action-button')).toBeInTheDocument();
  });

  it('should render disable state', async () => {
    render(<ActionButton variant="plus-circle" disabled />);
    expect(screen.getByTestId('action-button').classList).toContain('pointer-events-none');
  });

  it('should render size = large', async () => {
    render(<ActionButton variant="plus-circle" size="large" />);
    expect(screen.getByTestId('icon-plus-circle').classList).toContain('text-heading-1');
  });
});
