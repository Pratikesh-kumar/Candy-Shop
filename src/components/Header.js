import React from 'react'

const Header = () => {
  return (
    <div style={{display:'flex',backgroundColor:"aqua",justifyContent:'space-between',height:40 }}>
      <div>Candy Shop</div>
      <div>cart
        <sup>{'2'}</sup>
      </div>
    </div>
  )
}

export default Header

