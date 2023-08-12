import styled from 'styled-components';

export const FriendsList = styled.ul`
display: flex;
flex-wrap: wrap;
background-color: #2F4F4F;	 
list-style: none;
flex-direction: column;
width: 400px;
gap: 20px;
justify-content: center;
margin: 0px;
padding: 10px;
border-radius: 2%;
box-shadow: rgb(0, 0, 0) 1px 1px 8px 0px;
`;

export const FriendsItem = styled.li`
display: flex;
height: auto;
align-items: center;
justify-content: flex-start;
gap: 42px;
margin: 0px auto;
max-width: 100%;
width: 360px;
border-radius: 8px;
background-color: #F5FFFA;
`;

export const FriendsImg = styled.img`
border-radius: 8px;
background-color: #DCDCDC;
`;

export const FriendsName = styled.p`
 font-weight: 700;
 font-size: 22px;
 display: flex;
 justify-content: center;
 color: #2F4F4F;`;

export const Status = styled.span`
    display: block;
    margin-left: 1.625rem;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: ${props => {
    return props.isOnline ? 'green' : 'red';
    }};
    `;
