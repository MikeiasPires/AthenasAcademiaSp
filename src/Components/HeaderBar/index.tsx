import React from 'react';
import Ctlogo from '../../../public/Ct.svg'
import {
  GroupComponents,
  ContainerBar,
  TitleHeader,
  BarDivision
} from './styled'



export default function Headerbar() {

  function ClickEndress (){
    const location = 'https://www.google.com/maps?ll=-23.558353,-46.801738&z=15&t=m&hl=pt-BR&gl=BR&mapclient=embed&q=Av.+Santiago+Rodilha,+199+-+Veloso+Osasco+-+SP+06154-000'
    window.location.href = location
  }

  function Registrationclick(){
   const linkregister = 'https://api.whatsapp.com/message/JJSARAA2643YE1?autoload=1&app_absent=0'
    window.location.href = linkregister
  }

  return (
    <ContainerBar>
      <GroupComponents>
        <div>
          <img src={Ctlogo} alt="" />
        </div>
        <TitleHeader>
            <span>Home</span>
            <span>Planos</span>
            <span onClick={ClickEndress}>Unidade</span>
          <button onClick={Registrationclick}>MATRICULAS ABERTAS</button>
            </TitleHeader>
      </GroupComponents>
      <BarDivision/>
    </ContainerBar>
  );
}
