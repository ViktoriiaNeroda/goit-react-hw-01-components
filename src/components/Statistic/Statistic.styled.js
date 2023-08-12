import styled from 'styled-components';

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: space-between;
    width: 500px;
    height: 200px;
    background-color:  #2F4F4F;
    box-shadow: rgb(0, 0, 0) 1px 1px 8px 0px;
    border-radius: 8px;
    overflow: hidden;
    padding-top: 50px;
     color: #F5FFFA;
`;

export const Title = styled.h2`
   text-align: center;
   margin: 0;   
`;
export const StatList = styled.ul`
  display: flex;
    justify-content: center;
    margin: 0px;
    padding: 0px;
    list-style: none;
    background-color: #000000`;
    
    export const StatItem = styled.li`
    width: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    padding: 20px;
    border: 1px solid #2F4F4F;`;

     export const Label = styled.span`
    font-size: 20px;
    font-weight: 500;
    `;