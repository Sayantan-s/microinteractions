import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { ChevronDown } from '../utils/Icon';

const Accordion = ({ hashtag,tweets,answer }) => {

    const [isOpen,setOpen] = useState(false);
    const [height,setHeight] = useState(0); 

    const accordionContentRef = useRef(null);

    const accordionToggler = _ => setOpen(!isOpen);

    useEffect(_ => {
        setHeight(accordionContentRef.current.scrollHeight);
    },[isOpen])

    return (
        <AccordionItem>
            <Button 
            active={isOpen}
            onClick={accordionToggler}>
                <div className="btn_question">
                   <span>
                   #{ hashtag }
                   </span>
                   <span>
                       {tweets} tweets
                   </span>
                </div>
                <ChevronDown
                    size={'1.5rem'} 
                    fill="var(--color)"
                    className="btn_toggler"
                />
            </Button>
            <AccordionContent
            active={isOpen}
            height={height}
            ref={accordionContentRef}>
               <div className="content">
                    <p className="content_answer">
                        {answer}
                    </p>
               </div>
            </AccordionContent>
        </AccordionItem>
    )
}

export default Accordion


const AccordionItem = styled.div`
width: 100%;
color : var(--content);
`
const Button = styled.button`
display :flex;
justify-content : space-between;
align-items: center;
width: 100%;
outline:none;
border:none;
cursor: pointer;
padding: 1.5rem;
background-color: inherit;
.btn{
    &_question{
        font-size: 1.4rem;
        color : var(--content);
        margin : 0;
        padding : 0;
        display : flex;
        flex-direction: column;
        align-items : flex-start;
        span{
            &:first-child{
                color : var(--color);
                font-weight: 500;
            }
            &:nth-child(2){
                font-size: 1.6rem;
                margin-top: 0.6rem;
            }
        }
    }
    &_toggler{
        transition : 0.3s all;
        transform : ${props => props.active ? "rotate(180deg)" : 'rotate(0deg)'};
    }
}
`
const AccordionContent = styled.div`
    overflow: hidden;
    transition : 0.3s all;
    max-height : ${props => props.active ? `${props.height}px` : '0'};
    p{
        font-size : 1.3rem;
        margin : 0;
        padding : 0rem 1.5rem 2rem 1.5rem;
        text-align: left;
    }
`