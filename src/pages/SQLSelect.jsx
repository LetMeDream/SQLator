import React from 'react';
import styled from 'styled-components';
import TestCard from '../components/TestCard';
import TestInput from '../components/TestInput';

const Container = styled.div`
    position:relative;
    /*  */
    display:flex;
    flex-direction: column;
    padding:3rem;
    p{
      margin-top: 0;
    }
    span.field{
      background-color: #dfdfdf !important;
      display: inline-block;
      padding-inline: 4px;
    }
`

export const SQLSelectOne = () => {
    /* TestCard needs these two states in order to work */
  const [isShowingAnswer, setIsShowingAnswer] = React.useState(false);
  const [status, setStatus] = React.useState('typing');

  return (
    <Container>
        <h1>Exercise:</h1>
        <p>Insert the missing statement to get all the columns from the Customers table.</p>

        <TestCard 
          answers={['SELECT']}
          setStatus={setStatus} status={status} 
          setIsShowingAnswer={setIsShowingAnswer} isShowingAnswer={isShowingAnswer}
        >
            <TestInput isShowingAnswer={isShowingAnswer} setStatus={setStatus} correctAnswer='SELECT'/>
            &nbsp;&nbsp;* FROM Customers ;
        </TestCard>

    </Container>
  )
}

export const SQLSelectTwo = () => {
    /* TestCard needs these two states in order to work */
    const [isShowingAnswer, setIsShowingAnswer] = React.useState(false);
    const [status, setStatus] = React.useState('typing');

    return (
      <Container>
          <h1>Exercise:</h1>
          <p>Write a statement that will select the <span class='field'>City</span> column from the Customers table.</p>

          <TestCard 
            answers={['SELECT','City','FROM']}
            setStatus={setStatus} status={status} 
            setIsShowingAnswer={setIsShowingAnswer} isShowingAnswer={isShowingAnswer}
          >
            <TestInput isShowingAnswer={isShowingAnswer} setStatus={setStatus} correctAnswer='SELECT'/> &nbsp;
            <TestInput isShowingAnswer={isShowingAnswer} setStatus={setStatus} correctAnswer='City'/> &nbsp;
            <TestInput isShowingAnswer={isShowingAnswer} setStatus={setStatus} correctAnswer='FROM'/>
            &nbsp;&nbsp;Customers ;
          </TestCard>

      </Container>
    )
}

export const SQLSelectThree = () => {
    /* TestCard needs these two states in order to work */
    const [isShowingAnswer, setIsShowingAnswer] = React.useState(false);
    const [status, setStatus] = React.useState('typing');

    return (
      <Container>
          <h1>Exercise:</h1>
          <p>Select all the <em>different</em> values from the <span className='field'>Country</span> column in the Customers table.</p>

          <TestCard
            answers={['SELECT','DISTINCT']}
            setStatus={setStatus} status={status} 
            setIsShowingAnswer={setIsShowingAnswer} isShowingAnswer={isShowingAnswer}
          >
            <TestInput isShowingAnswer={isShowingAnswer} setStatus={setStatus} correctAnswer='SELECT'/> &nbsp;
            <TestInput isShowingAnswer={isShowingAnswer} setStatus={setStatus} correctAnswer='DISTINCT'/>
            &nbsp;&nbsp;Country FROM Customers ;
            
          </TestCard>

      </Container>
    )
}


