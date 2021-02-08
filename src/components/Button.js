import PropTypes from 'prop-types';

const Button = props => {
  const { name, clickHandler } = props;

  const handleClick = () => clickHandler(name);

  const btnClass = name === '0' ? 'btn-normal btn-wide' : 'btn-normal';
  return (
    <button className={btnClass} type="button" onClick={handleClick}>
      {name}
    </button>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
};

export default Button;
