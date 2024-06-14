import React, { useRef } from 'react';
import image6 from '../../../public/Cards/totalpass.png'
import {
    Barpass,
    Contntinfo,
    Scroller,
    Taglist
  } from './style'
  import {cards}  from '../../data/Datacards'
  
  


export default function Passbar() {

  const scrollers = document.querySelectorAll('.selectscroller')

  if(!window.matchMedia("(prefers-reduced-motion: reduce )").matches){
    addAnimation();
  }

  function addAnimation (){
    scrollers.forEach((scroll)=> {
      scroll.setAttribute('data-animated', true)
    })
  }


  return (
 <Barpass>
    <Contntinfo>
        <h3>ACEITAMOS TAMBÉM</h3>
        <Scroller className='selectscroller'>
          <Taglist>
          {cards.map((img) => {
            return <>
            <img src={img.img} width={200} height={50} alt="vr" />
            </>
          })}
        </Taglist>
        </Scroller>
    </Contntinfo>
 </Barpass>
  );
}
