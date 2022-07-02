import PropTypes from 'prop-types'
const Button = ({ color, text, onClick}) => {
    const  buttonStyle ={
        backgroundColor: color
    }

  return (
    <button onClick={onClick} style={buttonStyle} className='btn'>{text}</button>
  )
}

Button.defaultProps = {
    color: 'steelblue',
    text: 'Click'
}

Button.propTypes = {
    text : PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
}


export default Button