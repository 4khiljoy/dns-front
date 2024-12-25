import React from 'react'
import { Logo } from '../logo'
import Menu from './menu'

const Header = () => {
  return (
    <div className='bg-[#121618] h-[100px] flex justify-center md:justify-around items-center'>
      <Logo />
      <Menu />
    </div>
  )
}

export default Header