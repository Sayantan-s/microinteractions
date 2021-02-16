import React from 'react'
import styled from 'styled-components'
import { ChevronDown } from '../utils/Icon';

const Accordion = ({ question }) => {
    return (
        <AccordionItem>
            <Button>
                <span className="btn_question">
                    { question }
                </span>
                <ChevronDown
                    size={'2rem'} 
                    fill="var(--primary"
                    className="btn_toggler"
                />
            </Button>
        </AccordionItem>
    )
}

export default Accordion


const AccordionItem = styled.div`
width: 100%;
color : var(--basecolor);
`
const Button = styled.button`
display :flex;
width: 100%;
outline:none;
border:none;
padding: 2rem 3rem;
.btn{
    &_question{
        color : red;
    }
    &_toggler{
       
    }
}
`