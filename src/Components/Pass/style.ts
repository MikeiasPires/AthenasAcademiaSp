import {  styled } from 'styled-components';



export const Barpass = styled.div`
 max-width: 100vw;
 height: 120px;
 background-color: #ffff;

 @media(max-width: 450px){
   max-width: 450px;
 }
`;

export const Contntinfo = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;

 h3{
    color: black;
    margin-top: 20px;
 }
`;



export const Scroller = styled.div`
max-width: 600px;
display: inline-block;



`;




export const Taglist = styled.div`
max-width: 100vw;
display: flex;
gap: 1rem;

@media(max-width: 450px){
   
}

`;

