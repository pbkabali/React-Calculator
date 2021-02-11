import renderer from 'react-test-renderer';
import QuotePage from '../QuotePage';

describe('QuotePage', () => {
  it('renders correctly', () => {
    const page = renderer.create(<QuotePage />);
    expect(page).toMatchSnapshot();
  });
});
