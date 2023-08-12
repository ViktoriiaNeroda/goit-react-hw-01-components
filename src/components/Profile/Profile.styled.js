import styled  from 'styled-components';

export const List = styled.ul`
padding: 0;
margin: 0;
display: flex;
background-color: #2F4F4F;	 
    list-style: none;
`;
export const ListRow = styled.li`
margin: 0;
padding: 4px 4px;
border: 1px solid #DCDCDC	;
font-size: 24px;
 color: #F5FFFA;
`;

export const ProfileImg = styled.img`

     border-radius: 50%;
     background-color: #F5FFFA;
     margin: 10px auto;
     width: 200px;
    height: 200px;`;

export const DescriptName = styled.p`
 font-weight: 600;
 font-size: 32px;
 display: flex;
 justify-content: center;`;

export const Descript = styled.p`
 font-size: 24px;
 color: #2F4F4F;
 display: flex;
 justify-content: center;
 align-items: center;`;

export const ProfileBox = styled.div`
width: 300px;
 height: 100%;
 background-color: 		#DCDCDC	 ;
 border-radius: 3px 0px 4px 4px; 
 box-shadow: 0px 1px 6px rgba(46, 47, 66, 0.08), 0px 1px 1px rgba(46, 47, 66, 0.16), 0px 2px 1px rgba(46, 47, 66, 0.08);
`;