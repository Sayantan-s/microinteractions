import React from 'react'
import styled from 'styled-components'
import Accordion from './components/Accordion.component'
import data from './data/Accordiondata.json'

console.log(data);

const App = () => {

    return (
      <AccordionContainer>
         {
           data.map(accordionData => (
            <Accordion 
              key={accordionData.answer}
              {...accordionData}
            />
           ))
         }
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