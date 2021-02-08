import PropTypes from 'prop-types';

const Button = props => {
  const {
    name, color, wide, clickHandler,
  } = props;

  const handleClick = () => clickHandler(name);

  return (
    <button
      className="btn-normal"
      style={{ backgroundColor: color, width: wide ? '50%' : '25%' }}
      type="button"
      onClick={handleClick}
    >
      {name}
    </button>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  wide: PropTypes.bool.isRequired,
  clickHandler: PropTypes.func.isRequired,
};

Button.defaultProps = {
  color: 'orange',
};

export default Button;
