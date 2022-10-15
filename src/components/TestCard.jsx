import React from 'react';
import Paper from '@mui/material/Paper';
import styled from 'styled-components';
import TestInput from './TestInput'
import { AiOutlineRight } from 'react-icons/ai'

const Container = styled(Paper)`
    box-sizing: border-box;
    position:relative;
    padding: 30px 25px !important;
    background-color: #dfdfdf !important;
    line-height: 30px;
    button{ 
        padding: 10px 28px;
        border-radius: 20px;
        font-size:18px;
        border: none;
        color:white;
        cursor:pointer;
    }
    button.showAnswer{
        position: absolute;
        right:20px;
        bottom: 14px;
        background-color: #616060;
        &:hover{
            background-color:black;
        }
    }
    button.nextAnswer{
        position:absolute;
        bottom: -60px;
        left: 0px;
        background-color:#04AA6D;
        &:hover{
            background-color:#059862; 
        }
        svg{
            position:relative;
            top:3px;
            left:4px;
        }
    }
`

const ErrorMsg = styled(Paper)`
    background-color: #FFC0C7 !important;
    position:absolute;
    width:100%;
    height:100%;
    top:0;left:0;
    padding:50px;
    box-sizing: border-box;
    h2{
        margin-top:6px;
    }
    h2, p{
        color:#b94a48;
    }
`

const CorrectMsg = styled(Paper)`
    background-color: #D9EEE1 !important;
    position:absolute;
    width:100%;
    height:100%;
    top:0;left:0;
    padding:50px;
    box-sizing: border-box;
    h2{
        margin-top:6px;
    }
    h2, p{
        color:#04AA6D;
    }
`

const TestCard = ({setStatus,setIsShowingAnswer,status,isShowingAnswer,children,answers}) => {


    const ContainerRef = React.useRef();
    const correctAnswers=answers;
    
    const checkAnswers = () => {
        console.log(correctAnswers)
        let inputs = [];
        for (let index = 0; index < ContainerRef.current.children.length; index++) {
            let element = ContainerRef.current.children[index];
            if(element.tagName.toLowerCase()==='input'){
                inputs.push(element);
            }
        }
        console.log(inputs);
        let correct = true;
        for (let i = 0; i < inputs.length; i++) {
            const element = inputs[i];
            if(element.value !== correctAnswers[i]){
                console.log(correctAnswers[i])
                correct=false;
            }
        }
        if(correct){
            setStatus('correct')
        }else{
            setStatus('incorrect')
        }


    }

    const button = (status) => {
        switch (status) {
            case 'incorrect':
                return <button className='nextAnswer' onClick={()=>setStatus('typing')}>Try Again
                        </button>
            case 'correct':
                return <button className='nextAnswer' onClick={()=>setStatus('typing')}>Next Exercise
                        </button>
            default:
                return <button className='nextAnswer' onClick={checkAnswers}>Submit Answer
                            <AiOutlineRight/>
                        </button>
        }
    }

  return (
    <>
        <Container ref={ContainerRef} elevation={3} 
            sx={{
                minHeight: '240px',
                padding: '16px'
            }}>
            
            {children}

            <button className='showAnswer' onClick={()=>setIsShowingAnswer(!isShowingAnswer)}>{isShowingAnswer ? 'Hide' : 'Show'} Answer</button>

            { !isShowingAnswer && button(status)}

            {status === 'incorrect' ? 
            <ErrorMsg>
                <h2>Not Correct</h2>
                <p>Click here to try again</p>
            </ErrorMsg> 
            : ''}

            { status === 'correct' ? 
            <CorrectMsg>
                <h2>Correct!</h2>
                <p>Next Exercise</p>
            </CorrectMsg> 
            : ''}
        </Container>
        
    </>

  )
}

export default TestCard