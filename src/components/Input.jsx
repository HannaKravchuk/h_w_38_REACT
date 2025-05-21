import PropTypes from 'prop-types';

const Input = ({ type, placeholder }) => {
  return (
    <input 
      type={type} 
      placeholder={placeholder}
      className="input-field"
    />
  );
};

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
};

Input.defaultProps = {
  type: 'text',
  placeholder: '',
};

export default Input;