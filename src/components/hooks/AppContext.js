import React from 'react'
import Mycircle from './mycircle'
import ThemeContext from './themecontext'
import "./AppContext.css"
function AppContext() {
  let light = 'light'
  return (
    <ThemeContext.Provider value={light}>
      <h1>useContext hook</h1>
      <Mycircle /> {false && "only one consumer ,so use it or if multiple , use this.props.childred"}
    </ThemeContext.Provider>
  )
}
export default AppContext
