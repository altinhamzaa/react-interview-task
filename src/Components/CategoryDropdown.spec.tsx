import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CategoryDropDown from './CategoryDropdown';

describe('CategoryDropDown', () => {
  it('renders label and select button', () => {
    render(<CategoryDropDown />);
    expect(screen.getByText('Category Included')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /^Select$/ })).toBeInTheDocument();
  });

  it('shows dropdown options on button click', () => {
    render(<CategoryDropDown />);
    const button = screen.getByRole('button', { name: /^Select$/ });
    fireEvent.click(button);
    expect(screen.getByText('Sidewalk Shed')).toBeInTheDocument();
    expect(screen.getByText('Scaffold')).toBeInTheDocument();
    expect(screen.getByText('Shoring')).toBeInTheDocument();
  });

  it('selects and displays a category, badge appears', () => {
    render(<CategoryDropDown />);
    fireEvent.click(screen.getByRole('button', { name: /^Select$/ }));
    const sidewalkOption = screen.getByText('Sidewalk Shed');
    fireEvent.click(sidewalkOption);

    const badge = screen.getByTestId('selected-badge-Sidewalk-Shed');
    expect(badge).toBeInTheDocument();

    const allSidewalkShed = screen.getAllByText('Sidewalk Shed');
    expect(allSidewalkShed.length).toBeGreaterThan(1);

    expect(screen.getByText('✓')).toBeInTheDocument();
  });

  it('toggles selection off and on for a category', () => {
    render(<CategoryDropDown />);
    fireEvent.click(screen.getByRole('button', { name: /^Select$/ }));
    const shoringOption = screen.getByText('Shoring');
    fireEvent.click(shoringOption);
    
    expect(screen.getByTestId('selected-badge-Shoring')).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: /^Select$/ }));
    fireEvent.click(shoringOption);
    expect(screen.queryByTestId('selected-badge-Shoring')).not.toBeInTheDocument();
  });

  it('removes a badge when close button is clicked', () => {
    render(<CategoryDropDown />);
    fireEvent.click(screen.getByRole('button', { name: /^Select$/ }));
    const scaffoldOption = screen.getByText('Scaffold');
    fireEvent.click(scaffoldOption);
    const badge = screen.getByTestId('selected-badge-Scaffold');
    expect(badge).toBeInTheDocument();
    const closeBtn = badge.querySelector('button');
    expect(closeBtn).toBeInTheDocument();
    fireEvent.click(closeBtn!);
    expect(screen.queryByTestId('selected-badge-Scaffold')).not.toBeInTheDocument();
  });

  it('supports selecting multiple categories', () => {
    render(<CategoryDropDown />);
    fireEvent.click(screen.getByRole('button', { name: /^Select$/ }));
    fireEvent.click(screen.getByText('Sidewalk Shed'));
    fireEvent.click(screen.getByRole('button', { name: /^Select$/ }));
    fireEvent.click(screen.getByText('Shoring'));
    expect(screen.getByTestId('selected-badge-Sidewalk-Shed')).toBeInTheDocument();
    expect(screen.getByTestId('selected-badge-Shoring')).toBeInTheDocument();
  });
});