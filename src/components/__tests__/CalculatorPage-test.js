import renderer from 'react-test-renderer';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';

import CalculatorPage from '../CalculatorPage';

describe('CalculatorPage', () => {
  it('Renders correctly', () => {
    const page = renderer.create(<CalculatorPage />);
    expect(page).toMatchSnapshot();
  });

  it('Caculator displays a zero upon launch', async () => {
    render(<CalculatorPage />);
    const res = await waitFor(() => screen.findAllByText('0'));
    expect(res).toHaveLength(2);
  });

  it('Displays clicked number', async () => {
    render(<CalculatorPage />);
    fireEvent.click(screen.getByText('9'));
    fireEvent.click(screen.getByText('5'));
    const res = await waitFor(() => screen.findAllByText('95'));
    expect(res).toHaveLength(1);
  });

  it('Displays sum on adding two numbers', async () => {
    render(<CalculatorPage />);
    fireEvent.click(screen.getByText('9'));
    fireEvent.click(screen.getByText('+'));
    fireEvent.click(screen.getByText('5'));
    fireEvent.click(screen.getByText('='));
    const res = await waitFor(() => screen.findAllByText('14'));
    expect(res).toHaveLength(1);
  });

  it('Displays product on multiplying two numbers', async () => {
    render(<CalculatorPage />);
    fireEvent.click(screen.getByText('9'));
    fireEvent.click(screen.getByText('x'));
    fireEvent.click(screen.getByText('5'));
    fireEvent.click(screen.getByText('='));
    const res = await waitFor(() => screen.findAllByText('45'));
    expect(res).toHaveLength(1);
  });

  it('Changes the sign of the displayed figure when "+/-" is clicked', async () => {
    render(<CalculatorPage />);
    fireEvent.click(screen.getByText('9'));
    fireEvent.click(screen.getByText('5'));
    fireEvent.click(screen.getByText('+/-'));
    const res = await waitFor(() => screen.findAllByText('-95'));
    expect(res).toHaveLength(1);
  });

  it('Displays the percentantage of figure when "%" is clicked', async () => {
    render(<CalculatorPage />);
    fireEvent.click(screen.getByText('9'));
    fireEvent.click(screen.getByText('5'));
    fireEvent.click(screen.getByText('%'));
    const res = await waitFor(() => screen.findAllByText('0.95'));
    expect(res).toHaveLength(1);
  });
});
