import PropTypes from 'prop-types';

const Button = props => {
  const { name, clickHandler } = props;

  const handleClick = () => clickHandler(name);
  return (
    <button className="btn-normal" type="button" onClick={handleClick}>
      {name}
    </button>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
};

export default Button;
