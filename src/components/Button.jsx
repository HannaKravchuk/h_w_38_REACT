import PropTypes from 'prop-types';

const Button = ({ text, type, onClick }) => {
  return (
    <button 
      type={type} 
      onClick={onClick}
      className="button"
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  onClick: PropTypes.func,
};

Button.defaultProps = {
  type: 'button',
  onClick: () => {},
};

export default Button;