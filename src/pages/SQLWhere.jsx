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
    span.field{
      background-color: #dfdfdf !important;
      display: inline-block;
      padding-inline: 4px;
    }
`

export const SQLWhereOne = () => {
  /* TestCard needs these two states in order to work */
  const [isShowingAnswer, setIsShowingAnswer] = React.useState(false);
  const [status, setStatus] = React.useState('typing');

  return (
    <Container>
        <h1>Exercise:</h1>
        <p>Select all records where the 'City' column has the value "Berlin".</p> 

        <TestCard 
            status={status} setStatus={setStatus}
            isShowingAnswer={isShowingAnswer} setIsShowingAnswer={setIsShowingAnswer}
            answers={['WHERE', 'City', "'Berlin'"]}
        >
            SELECT * FROM Customers<br/>
            <TestInput isShowingAnswer={isShowingAnswer} correctAnswer='WHERE'/>&nbsp;
            <TestInput isShowingAnswer={isShowingAnswer} correctAnswer='City'/>&nbsp; = &nbsp;
            <TestInput isShowingAnswer={isShowingAnswer} correctAnswer="'Berlin'"/>


        </TestCard>

    </Container>
  )
}
export const SQLWhereTwo = () => {
        /* TestCard needs these two states in order to work */
        const [isShowingAnswer, setIsShowingAnswer] = React.useState(false);
        const [status, setStatus] = React.useState('typing');

    return (
        <Container>
            <h1>Exercise:</h1>
            <p>Use the <span className='field'>NOT</span> keyword to select all records where <span className='field'>City</span> is NOT "Berlin".</p> 

            <TestCard 
                status={status} setStatus={setStatus}
                isShowingAnswer={isShowingAnswer} setIsShowingAnswer={setIsShowingAnswer}
                answers={['WHERE NOT City', 'Berlin']}
            >
                SELECT * FROM Customers<br/>
                <TestInput isShowingAnswer={isShowingAnswer} correctAnswer='WHERE NOT City'/>&nbsp; = &nbsp;
                '<TestInput isShowingAnswer={isShowingAnswer} correctAnswer='Berlin'/>'


            </TestCard>

        </Container>
        )
}
export const SQLWhereThree = () => {
    /* TestCard needs these two states in order to work */
    const [isShowingAnswer, setIsShowingAnswer] = React.useState(false);
    const [status, setStatus] = React.useState('typing');
    return (
        <Container>
            <h1>Exercise:</h1>
            <p>Select all records where the <span className='field'>CustomerID</span> column has the value 32.</p>

            <TestCard
                status={status} setStatus={setStatus}
                isShowingAnswer={isShowingAnswer} setIsShowingAnswer={setIsShowingAnswer}
                answers={['WHERE','=','32']}
            >

                SELECT * FROM Customers<br/>
                <TestInput isShowingAnswer={isShowingAnswer} correctAnswer='WHERE' />&nbsp;
                CustomerID&nbsp;
                <TestInput isShowingAnswer={isShowingAnswer} correctAnswer='=' />&nbsp;
                <TestInput isShowingAnswer={isShowingAnswer} correctAnswer='32' />;



            </TestCard>

        </Container>
        )
}
export const SQLWhereFour = () => {
    /* TestCard needs these two states in order to work */
    const [isShowingAnswer, setIsShowingAnswer] = React.useState(false);
    const [status, setStatus] = React.useState('typing');
    return (
        <Container>
            <h1>Exercise:</h1>
            <p>Select all records where the <span className='field'>City</span> column has the value 'Berlin' and the <span className='field'>PostalCode</span>  column has the value 12209.</p>

            <TestCard 
                status={status} setStatus={setStatus}
                isShowingAnswer={isShowingAnswer} setIsShowingAnswer={setIsShowingAnswer}
                answers={['SELECT', 'WHERE', 'AND', 'PostalCode']}    
            >
                <TestInput isShowingAnswer={isShowingAnswer} correctAnswer='SELECT' />&nbsp;
                * FROM Customers<br/>
                <TestInput isShowingAnswer={isShowingAnswer} correctAnswer='WHERE' />&nbsp;
                City = 'Berlin'<br/>
                <TestInput isShowingAnswer={isShowingAnswer} correctAnswer='AND' />&nbsp;
                <TestInput isShowingAnswer={isShowingAnswer} correctAnswer='PostalCode' />&nbsp;
                = 12209;




            </TestCard>

        </Container>
    )
}
export const SQLWhereFive = () => {
    /* TestCard needs these two states in order to work */
    const [isShowingAnswer, setIsShowingAnswer] = React.useState(false);
    const [status, setStatus] = React.useState('typing');
    return (
        <Container>
            <h1>Exercise:</h1>
            <p>Select all records where the <span className='field'>City</span> column has the value 'Berlin' or 'London'.</p>
            <TestCard 
                status={status} setStatus={setStatus}
                isShowingAnswer={isShowingAnswer} setIsShowingAnswer={setIsShowingAnswer}
                answers={['SELECT', 'WHERE', 'OR', 'City', 'London']}    
            >
                <TestInput isShowingAnswer={isShowingAnswer} correctAnswer='SELECT' />&nbsp;
                * FROM Customers<br/>
                <TestInput isShowingAnswer={isShowingAnswer} correctAnswer='WHERE' />&nbsp;
                City = 'Berlin'<br/>
                <TestInput isShowingAnswer={isShowingAnswer} correctAnswer='OR' />&nbsp;
                <TestInput isShowingAnswer={isShowingAnswer} correctAnswer='City' />&nbsp;
                =&nbsp;
                '<TestInput isShowingAnswer={isShowingAnswer} correctAnswer='London' />'





            </TestCard>

        </Container>
    )
}
