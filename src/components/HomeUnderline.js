import React from 'react'
import styled from 'styled-components'

const HomeUnderline = () => {
    return (
        <Home>
            Home
        </Home>
    )
}

export default HomeUnderline

const Home = styled.div`
font-size : 5rem;
position: relative;
&::after{
    content : '';
    height : 2px;
    width : 0%;
    background-color : black;
    position : absolute;
    bottom: 0;
    left : 0;  
    transition : 0.3s all;
}
&:hover::after{
    width : 100%;
}
`