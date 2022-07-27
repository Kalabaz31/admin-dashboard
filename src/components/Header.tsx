import React from 'react'
import { Container } from 'react-bootstrap'
import Navbar from './Navbar'

type Props = {}

const Header = (props: Props) => {
    return (
        <header className='p-0 m-0'>
            <Container >
                <Navbar />
            </Container>
        </header>
    )
}

export default Header