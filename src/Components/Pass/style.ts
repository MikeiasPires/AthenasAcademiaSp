import { styled } from 'styled-components';



export const Barpass = styled.div`
 max-width: 100vw;
 height: 120px;
 background-color: #ffff;
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
outline: 3px solid lime;

Scroller[data-animated=true]{
   overflow: hidden;
}
`;




export const Taglist = styled.div`
padding-block: 1em;
display: flex;
gap: 1rem;
`;

