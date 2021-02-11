import PropTypes from 'prop-types';
import Button from './Button';

const ButtonPanel = props => {
  const { clickHandler } = props;

  const handleClick = buttonName => clickHandler(buttonName);

  const makeButton = (name, wide = false) => (
    <Button name={name} wide={wide} clickHandler={() => handleClick(name)} />
  );

  return (
    <div>
      <div className="flex calculator">
        {makeButton('AC')}
        {makeButton('+/-')}
        {makeButton('%')}
        {makeButton('/')}
      </div>
      <div className="flex calculator">
        {makeButton('7')}
        {makeButton('8')}
        {makeButton('9')}
        {makeButton('x')}
      </div>
      <div className="flex calculator">
        {makeButton('4')}
        {makeButton('5')}
        {makeButton('6')}
        {makeButton('-')}
      </div>
      <div className="flex calculator">
        {makeButton('1')}
        {makeButton('2')}
        {makeButton('3')}
        {makeButton('+')}
      </div>
      <div className="flex calculator">
        {makeButton('0', true)}
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
