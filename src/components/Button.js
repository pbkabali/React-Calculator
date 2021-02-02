import PropTypes from 'prop-types';

const Button = props => {
  const { name } = props;
  return <p>{name}</p>;
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Button;
