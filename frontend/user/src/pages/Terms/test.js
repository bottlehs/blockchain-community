import React from 'react';
import { render } from '@testing-library/react';
import Terms from './index';

test('renders learn react link', () => {
  const { getByText } = render(<Terms />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
