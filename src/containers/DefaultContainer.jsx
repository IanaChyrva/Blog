import React from 'react'
import Navigation from '../components/Naigation'

const DefaultContainer = ({ children }) => (
    <>
        <Navigation />
        {children}
    </>
)

export default DefaultContainer