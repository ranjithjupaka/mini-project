import React from 'react'
import { Outlet } from 'react-router-dom'
import Navigation from './Navigation'

const Layout = ({web3Handler,account}) => {
  return (
    <>
    <Navigation web3Handler={web3Handler} account={account} />
    <Outlet/>
    </>
  )
}

export default Layout