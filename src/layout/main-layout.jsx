import React from 'react'
import { Header } from './header/header'
import { Footer } from './footer/footer'

export const MainLayout = ({children}) => {
  return (
    <>
    <div className='wrapper'>
        <header><Header/></header>
        <main>{children}</main>
        <footer><Footer/></footer>
    </div>
    
    </>

  )
}
