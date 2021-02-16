import { motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { ChevronDown } from '../utils/Icon';

const Accordion = ({ question,answer }) => {

    const [isOpen,setOpen] = useState(false);
    const [height,setHeight] = useState(0); 

    const accordionContentRef = useRef(null);

    const accordionToggler = _ => setOpen(!isOpen);

    useEffect(_ => {
        setHeight(accordionContentRef.current.scrollHeight);
    },[isOpen])

    // Animations

    const chevronAnimation = {
        initial : {
            rotate : 0
        },
        final : {
            rotate : 180
        }
    }

    const contentAnimation = {
        initial : {
            maxHeight : 0,
            transition : {
                duration : 0.3,
                ease : "easeInOut"
            }
        },
        final : {
            maxHeight : height,
            transition : {
                duration : 0.3,
                ease : "easeInOut"
            }
        }
    }

    return (
        <AccordionItem>
            <Button onClick={accordionToggler}>
                <p className="btn_question">
                    { question }
                </p>
                <ChevronDown
                    variants={chevronAnimation}
                    animate={isOpen ? "initial" : "final"}
                    size={'2rem'} 
                    fill="red"
                    className="btn_toggler"
                />
            </Button>
            <AccordionContent
            variants={contentAnimation}
            animate={isOpen ? "initial" : "final"} 
            ref={accordionContentRef}>
                <p>
                    {answer}
                </p>
            </AccordionContent>
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
justify-content : space-between;
align-items: center;
width: 100%;
outline:none;
border:none;
cursor: pointer;
padding: 2rem 3rem;
.btn{
    &_question{
        color : red;
        margin : 0;
        padding : 0;
    }
}
`
const AccordionContent = styled(motion.div)`
    overflow: hidden;
    p{
        font-size : 1.4rem;
        margin : 0;
        padding : 2rem 1.5rem;
        text-align: left;
        word-break: break-all;
        font-weight : 500;
    }
`