import React, { Component } from 'react';
import './style.css'
import IconoEscalab from '../../assets/escalab_icon.jpg'
import { colors } from '../../config/colors'

class Header extends Component {
  render(){
    return(
      <>
        <div 
          className="header"
          style={{
            backgroundColor: colors.black
          }}
        >
          <img alt="imagen escalab" className="icon" src={IconoEscalab} />
        </div>
      </>
    )
  }
}

export const var1 = 'Hola var1';

export default Header;