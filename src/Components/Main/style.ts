import { styled } from 'styled-components';
import Boxe from '../../../public/Cardsproducts/Boxe.jpg'
import Boxekids from '../../../public/Cardsproducts/boxekids.jpg'
import Figthcircuit from '../../../public/Cardsproducts/figthcircuit.jpg'
import Muaithay from '../../../public/Cardsproducts/muaithay.jpg'

export const image = {
  image1:Boxe,
  image2:Muaithay,
  image3:Boxekids,
  image4:Figthcircuit,
}

export const ContainerMain = styled.div`
 max-width: 100vw;
 height: 610px;
background-color: #7F1818;
 

`;



export const TitleInfo = styled.div`
display: flex;
text-align: center;
flex-direction: column;
color: #FFFF;

h3{
    margin-top: 20px;
    font-family: Roboto;
}
h4{
    margin-top: 5px;
    font-family: roboto;
    font-size: 25px;
}
`;

export const ContainerProducts = styled.div`
cursor: pointer;
display: flex;
margin-top: 30px;
margin-left: 30px;
width: 270px;
height: 450px;
background-color: white;
border-radius: 8px;
 

`;

export const Imageproduct = styled.div`
border-radius: 8px;
display: flex;
width: 270px;
height: 200px;
background-image: url(${props => props.productsImage});
background-repeat: no-repeat;
background-size: cover;
span{
    margin-left: 53%;
    margin-top: 63%;
    color: #ffff;
    font-family: roboto;
    font-weight: 700;
    font-size: 22px;
}
`;


export const AlignContainer = styled.div`
display: flex;
`;

export const TitleProduct = styled.div`
  
span{
    font-style: roboto;
    font-weight: 600;
    margin-top: 3px;
    font-size: 16px;
}
`;


export const VallueProducts = styled.div`
 
 display: flex;
 flex-direction: column;
 margin-left: 20px;
 margin-top: 20px;

 label{
    font-family: roboto;
    font-size: 15px;
 }

button{
    cursor: pointer;
    margin-top: 10px;
    border: 1px solid #FE3030;
    border-radius: 8px;
    cursor: pointer;
    background-color: #FE3030;
    color: #ffff;
    font-weight: bold;
    width: 220px;
    height: 60px;
    font-size: 16px;
    transition:  0.3s ease-out;
    font-family: roboto;
    font-weight: 800;
    font-size: 20px;

}



`;


