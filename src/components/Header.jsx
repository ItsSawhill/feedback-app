import React from 'react'
import PropTypes from 'prop-types'

function Header({text,bgColor,textColor}) {
  const headerstyles={
    backgroundColor: bgColor,
    color: textColor,
  }
  return <>
  <header style={headerstyles}>
    <div className="container">
      <h2>{text}</h2>
      {/* <p>{props.text2}</p> */}
    </div>
    </header>
  </>
}

Header.defaultProps={
    text :"FEEDBACK UI",
    bgColor:'rgba(0,0,0,0.4)',
    textColor:'#ff6a95',
}
Header.propTypes={
   text : PropTypes.string,
}
export default Header
