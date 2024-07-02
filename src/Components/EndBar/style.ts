import { styled } from 'styled-components';



export const Contentendbar = styled.div`
 max-width: 100vw;
 height: 250px;
 background-color: black;
 display: flex;
 
 
 @media (max-width: 450px){
    max-width: 450px;
    display: flex;
    flex-direction: column;
    height: 1000px;

 }
`;

export const Contentbuttons = styled.div`
 margin-top: 30px;
 margin-left: 50px;
@media (max-width: 450px) {
 margin-left: 110px;
}

 button{
    margin-left: 20px;
    border: none; 
    background-color: #FE3030;
    border-radius: 10px;
    width: 40px;
    height: 40px;
 }

 
`;

export const Buttonslink = styled.div`
display: flex;
margin-left: 10px;
gap: 10px;

button{
    cursor: pointer;
}

`;


export const Textinfo = styled.div`
margin-bottom: 80px;
gap: 10px;
margin-right: 20px;
display: flex;
color: white;
flex-direction: column;
justify-content: center;
text-align: center;

@media(max-width:450px){
    margin-bottom: 20px;
    margin-right: 0;

}
`;

export const EndressContent = styled.div`

display: flex;
gap: 10px;
color: white;
justify-content: center;
text-align: center;
margin-right: 20px;
margin-top: 40px;

@media (max-width: 450px){
margin-top: 0px;
display: flex;
flex-direction: column;
margin-top: 5px;
margin-left: 22px;

}

h3{
    margin-top: 5px;

}

`;

export const ContactText = styled.div`
display: flex;
gap: 10px;
color: white;
flex-direction: column;
justify-content: center;
text-align: center;
margin-bottom: 55px;
margin-right: 10px;



`;


export const DivisionBar = styled.div`

border-left: 1px solid white ;
width: 10px; 
border-width: 2px;
height: 150px;
margin-top: 50px;

 @media (max-width: 450px){
height: 50px;
margin-top: 0px;
border-left: 0;
border-width: 0;
width: 0;
border-bottom: 3px solid #FFFF; 
width: 70%;
margin-left: 60px;
margin-bottom: 20px;

}
`;