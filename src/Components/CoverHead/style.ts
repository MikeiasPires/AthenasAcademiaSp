import { styled } from 'styled-components';

export const ContainerWallpaper = styled.div`
 max-width: 100vw;
height: 500px;
background-color: black;
background-image: url('../../public/atleta2.png');
background-repeat: no-repeat;
background-position: 65%;
background-size: 650px;
`;

export const TitleMain = styled.div`

 display: flex;
 flex-direction: column;
 margin-left: 15%;
   
   h1{
    color: #fff;
   }

 span{
    margin-top: 10px;
    color: #fff;
    font-size: 19px;
 }
`;

export const StyleMainTitle = styled.h1`
 margin-top: 100px;
 font-size: 80px;
`;

export const StyleSecondTitle = styled.h1`
margin-left: 30px;
 font-size: 50px;
`;

export const ButtonStyle = styled.div`
display: flex;
justify-content: flex-end;
margin-right: 180px;

button{
    border: 1px solid #FE3030;
    box-shadow: -5px 05px 6px  #7F1818;
    cursor: pointer;
    background-color: #FE3030;
    color: #ffff;
    font-weight: bold;
    width: 220px;
    height: 60px;
    font-size: 16px;
    transition:  0.3s ease-out;

}
button:hover{
    
    background-color: #7F1818;

}
span:hover{
    border-bottom: 1px solid red; 
}
`;

