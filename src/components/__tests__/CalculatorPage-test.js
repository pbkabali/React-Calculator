import renderer from 'react-test-renderer';

import CalculatorPage from '../CalculatorPage';

describe('CalculatorPage', () => {
  it('renders correctly', () => {
    const page = renderer.create(<CalculatorPage />);
    expect(page).toMatchSnapshot();
  });
});
