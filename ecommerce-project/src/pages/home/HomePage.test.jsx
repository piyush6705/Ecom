

import { it, expect, describe, vi, beforeEach } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import userEvent from '@testing-library/user-event';
import axios from 'axios';
import { HomePage } from './HomePage';

describe("HomePage component", () => {
  let loadCart;
  
  it('displays the products correct' , () => {
    render(<HomePage cart={[]} loadCart={loadCart} />);
  });
});