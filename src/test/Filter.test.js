import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Filter from '../components/Filter';

describe('Filter component', () => {
  test('calls onFilter prop with the entered name when Search button is clicked', () => {
    // Arrange
    const onFilterMock = jest.fn();
    render(<Filter onFilter={onFilterMock} />);
    const input = screen.getByPlaceholderText('Search by Name');
    const searchButton = screen.getByText('Search');
    const enteredName = 'John Doe';

    // Act
    fireEvent.change(input, { target: { value: enteredName } });
    fireEvent.click(searchButton);

    // Assert
    expect(onFilterMock).toHaveBeenCalledTimes(1);
    expect(onFilterMock).toHaveBeenCalledWith(enteredName);
  });
});
