import React from 'react';
import { render } from '@testing-library/react';
import Topics from './index';

test('renders learn react link', () => {
  const { getByText } = render(<Topics />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
