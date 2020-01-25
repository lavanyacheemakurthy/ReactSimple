import React, { useContext } from 'react'
import ThemeContext from './themecontext'
/*
const Mycircle = () => (
  <ThemeContext.Consumer>
    {(value) => (
      <div id="mycircle" className={value}>
        circle
      </div>
    )}
  </ThemeContext.Consumer>
)*/

function Mycircle() {
  const value = useContext(ThemeContext)
  return (
    <div id="mycircle" className={value}>
      circle
    </div>
  )
}

export default Mycircle
