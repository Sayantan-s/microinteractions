import React from 'react'
import styled from 'styled-components'
import Accordion from './components/Accordion.component'

const App = () => {
    return (
      <AccordionContainer>
          <Accordion question="What's an accordion ?"/>
      </AccordionContainer>
    )
}

export default App


const AccordionContainer = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700&display=swap');
font-family: 'Inter', sans-serif;
font-size : 62.5%;
width: 50rem;
background-color : var(--primary);
`