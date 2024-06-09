import React from 'react';
import image6 from '../../../public/Academiapost/Totalpass.png'

import {
    Barpass,
    Contntinfo
  } from './style'
  
  
  


export default function Passbar() {
  return (
 <Barpass>
    <Contntinfo>
        <h3>ACEITAMOS TAMBÉM</h3>
        <img src={image6} width={200} alt="vr" />
    </Contntinfo>
 </Barpass>
  );
}
