import PropTypes from 'prop-types';

const Button = props => {
  const { name } = props;
  return <span>{name}</span>;
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Button;
