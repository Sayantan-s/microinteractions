import React from 'react'
import styled from 'styled-components'
import Accordion from './components/Accordion.component'
import data from './data/Accordiondata.json'
import { Settings } from './utils/Icon';

console.log(data);

const App = () => {

    return (
      <AccordionContainer>
        <div className="header">
          <h1>
            Trends for you
          </h1>
          <Settings
           size={'2rem'} 
           fill="var(--content)" 
          />
        </div>
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
width: 30rem;
background-color : var(--basecolor);
overflow: hidden;
border-radius: 1.5rem;
.header{
  padding: 1.5rem 1.5rem;
  border-bottom: 1.2px solid rgba(255,255,255,0.05);
  display: flex;
  justify-content: space-between;
  align-items: center;
  h1{
    font-size : 1.4rem;
    font-weight: 400;
    color : var(--color);
    margin: 0;
  }
}
`