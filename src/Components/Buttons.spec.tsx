import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, test, expect, vi } from 'vitest';
import { CreateButton, CancelButton, SaveButton, GoBackButton } from './Buttons';

const buttons = [
  { Component: CreateButton, label: /create/i },
  { Component: CancelButton, label: /cancel changes/i },
  { Component: SaveButton, label: /save changes/i },
  { Component: GoBackButton, label: /go back/i },
];

describe('Button Components', () => {
  buttons.forEach(({ Component, label }) => {
    test(`${Component.name} renders and works`, async () => {
      const onClick = vi.fn();
      render(<Component onClick={onClick} />);
      const button = screen.getByRole('button', { name: label });
      await userEvent.click(button);
      expect(onClick).toHaveBeenCalledTimes(1);
    });
  });
});
