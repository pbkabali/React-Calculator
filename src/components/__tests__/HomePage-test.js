import renderer from 'react-test-renderer';

import HomePage from '../HomePage';

describe('HomePage', () => {
  it('renders correctly', () => {
    const page = renderer.create(<HomePage />);
    expect(page).toMatchSnapshot();
  });
});
