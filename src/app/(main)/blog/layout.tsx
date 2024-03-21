import { ILayout } from '@/lib/Types'
import React from 'react'

const Layout = ({ children } : ILayout) => {
  return (
    <>{children}</>
  )
}

export default Layout