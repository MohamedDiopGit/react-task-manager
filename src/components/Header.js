import PropTypes from 'prop-types'
import Button from './Button'

// Basic version
// const Header = (props) => {
//   return (
//     <header>
//         <h1>Hello : {props.title}</h1>
//     </header>
//   )
// }


// Clean version
const Header = ({ title }) => {
    const onClick = () => {
        console.log('click')
    }
  return (
    <header className='header'>
        {/* <h1 style={headingStyle}>{title}</h1> */}
        <h1>Hello {title}.</h1>
        {/* <button className='btn'>Add</button> */}
        <Button color='green' text='Hello' onClick={onClick}/>
    </header>
  )
}

// // For basic version
// Header.defaultProps = {
//     title: "Task tracker", // Si pas de title fournit dans App.js , alors par défaut
// }

Header.propTypes = {
    title: PropTypes.string.isRequired,
}


// For use of CSS in JS
// const headingStyle = {
//     color: 'blue',
//     backgroundColor: 'green',
// }

export default Header