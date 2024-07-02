import { styled } from 'styled-components';

export const GroupComponents = styled.div`
 display: flex;
 justify-content: space-around;
 align-items: center;

 img{
    width: 130px;
    height:130px;
;
 }

`;

export const ContainerBar = styled.div`
display: flex;
align-items: center;
justify-content: space-around;
 max-width: 100vw;
 height: 150px;
 padding: 5px;
 background-color: black ;

 

@media (max-width: 450px){
    max-width: 450px;

    img{
        width:120px ;
    }
}
`;

export const TitleHeader = styled.div`
 display: flex;
 align-items: center;
gap: 80px;
 span{
    color: #ffff;
    font-size: 16px;
    font-weight: 600;
    border-bottom: 0px solid transparent; 
    transition:  0.3s ease-out;
    cursor: pointer;

}

button{
    border: 1px solid #FE3030;
    box-shadow: -5px 05px 6px  #7F1818;
    cursor: pointer;
    background-color: #FE3030;
    color: #ffff;
    font-weight: bold;
    width: 170px;
    height: 50px;
    font-size: 12px;
    transition:  0.3s ease-out;

}
button:hover{
    
    background-color: #7F1818;

}
span:hover{
    border-bottom: 1px solid red; 
    color: #FE3030;
}

@media(max-width: 450px){
    
    
}
`;





export const BarDivision = styled.div`
 border-radius: 18PX;
 border-bottom: 3px solid #FFFF; 
  width: 95%; 
  margin-left: 30px;
`;




