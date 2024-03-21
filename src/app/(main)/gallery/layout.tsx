import { ILayout } from '@/lib/Types'
import React from 'react'

const Layout = ( {children} : ILayout ) => {
  return (
    <div>{children}</div>
  )
}

export default Layout