import React from 'react';
import Ctlogo from '../../../public/Ct.svg'
import {
  GroupComponents,
  ContainerBar,
  TitleHeader,
  BarDivision
} from './styled'



export default function Headerbar() {



  return (
    <ContainerBar>
      <GroupComponents>
        <div>
          <img src={Ctlogo} alt="" />
        </div>
        <TitleHeader>
            <span>Home</span>
            <span>Planos</span>
            <span>Unidade</span>
          <button>MATRICULAS ABERTAS</button>
            </TitleHeader>
      </GroupComponents>
      <BarDivision/>
    </ContainerBar>
  );
}
