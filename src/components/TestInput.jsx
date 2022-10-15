import React from 'react';
import styled from 'styled-components'

const TInput = styled.input`
    padding:2px 0;
    width: ${({length}) => `${length}ch`};
    font-family: 'Roboto Mono', monospace;
`

const TestInput = ({isShowingAnswer,correctAnswer}) => {

const [answer, setAnswer] = React.useState('');

let input;
if(isShowingAnswer){
    input = <TInput length={correctAnswer.length} maxLength={correctAnswer.length} value={correctAnswer} style={{ color:"mediumblue", fontWeight: '500' }} readOnly/> 
}else{
    input = <TInput length={correctAnswer.length} maxLength={correctAnswer.length} value={answer} onChange={(e)=>{ setAnswer(e.target.value) }}/> 
}


  return (
    <>
        {input}
    </>
  )
}

export default TestInput