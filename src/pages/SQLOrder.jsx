import React from 'react'
import styled from 'styled-components';
import TestCard from '../components/TestCard';
import TestInput from '../components/TestInput';

const Container = styled.div`
    position:relative;
    /*  */
    display:flex;
    flex-direction: column;
    padding:3rem;
    span.field{
      background-color: #dfdfdf !important;
      display: inline-block;
      padding-inline: 4px;
    }
`

export const SQLOrderOne = () => {
  /* TestCard needs these two states in order to work */
  const [isShowingAnswer, setIsShowingAnswer] = React.useState(false);
  const [status, setStatus] = React.useState('typing');

  return (
    <Container>
        <h1>Exercise:</h1>
        <p>Select all records from the <span className='field'>Customers</span> table, sort the result alphabetically by the column <span className='field'>City</span> .</p>
        <TestCard
            status={status} setStatus={setStatus}
            isShowingAnswer={isShowingAnswer} setIsShowingAnswer={setIsShowingAnswer}
            answers={['ORDER BY', 'City']}
        >
            SELECT * FROM Customers<br/>
            <TestInput isShowingAnswer={isShowingAnswer} correctAnswer='ORDER BY'/>&nbsp;
            <TestInput isShowingAnswer={isShowingAnswer} correctAnswer='City'/>&nbsp;;

        </TestCard>
    </Container>
  )
}

export const SQLOrderTwo = () => {
    /* TestCard needs these two states in order to work */
    const [isShowingAnswer, setIsShowingAnswer] = React.useState(false);
    const [status, setStatus] = React.useState('typing');

    return (
        <Container>
        <h1>Exercise:</h1>
        <p>Select all records from the <span className='field'>Customers</span> table, sort the result <em>reversed</em> alphabetically by the column <span className='field'>City</span> .</p>
        <TestCard
            status={status} setStatus={setStatus}
            isShowingAnswer={isShowingAnswer} setIsShowingAnswer={setIsShowingAnswer}
            answers={['ORDER BY', 'City', 'DESC']}
        >
            SELECT * FROM Customers<br/>
            <TestInput isShowingAnswer={isShowingAnswer} correctAnswer='ORDER BY'/>&nbsp;
            <TestInput isShowingAnswer={isShowingAnswer} correctAnswer='City'/>&nbsp;
            <TestInput isShowingAnswer={isShowingAnswer} correctAnswer='DESC'/>&nbsp;;

        </TestCard>
    </Container>
    )
}

export const SQLOrderThree = () => {
    /* TestCard needs these two states in order to work */
    const [isShowingAnswer, setIsShowingAnswer] = React.useState(false);
    const [status, setStatus] = React.useState('typing');

    return (
        <Container>
            <h1>Exercise:</h1>
            <p>Select all records from the <span className='field'>Customers</span> table, sort the result alphabetically, first by the
               column <span className='field'>Country</span>, then, by the column <span className='field'>City</span>.
            </p>
            <TestCard
                status={status} setStatus={setStatus}
                isShowingAnswer={isShowingAnswer} setIsShowingAnswer={setIsShowingAnswer}
                answers={['ORDER BY', 'Country,', 'City']}
            >            
                SELECT * FROM Customers<br/>
                <TestInput isShowingAnswer={isShowingAnswer} correctAnswer='ORDER BY'></TestInput>&nbsp;
                <TestInput isShowingAnswer={isShowingAnswer} correctAnswer='Country,'></TestInput>&nbsp;
                <TestInput isShowingAnswer={isShowingAnswer} correctAnswer='City'></TestInput>;



            </TestCard>

        </Container>
    )
}


