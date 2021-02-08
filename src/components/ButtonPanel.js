import PropTypes from 'prop-types';
import Button from './Button';

const ButtonPanel = props => {
  const { clickHandler } = props;

  const handleClick = buttonName => clickHandler(buttonName);

  const makeButton = name => (
    <Button name={name} clickHandler={() => handleClick(name)} />
  );

  return (
    <div className="flex">
      <div>
        {makeButton('AC')}
        {makeButton('+/-')}
        {makeButton('%')}
        {makeButton('/')}
      </div>
      <div>
        {makeButton('7')}
        {makeButton('8')}
        {makeButton('9')}
        {makeButton('X')}
      </div>
      <div>
        {makeButton('4')}
        {makeButton('5')}
        {makeButton('6')}
        {makeButton('-')}
      </div>
      <div>
        {makeButton('1')}
        {makeButton('2')}
        {makeButton('3')}
        {makeButton('+')}
      </div>
      <div>
        {makeButton('0')}
        {makeButton('.')}
        {makeButton('=')}
      </div>
    </div>
  );
};

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default ButtonPanel;
