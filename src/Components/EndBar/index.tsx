import React from 'react';
import Ctlogo from '../../../public/Ct.svg'
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp
} from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BsTelephone } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import {
  Contentendbar,
  Contentbuttons,
  Buttonslink,
  Textinfo,
  EndressContent,
  ContactText
} from './style'




export default function Endbar() {

  function Directinstagram() {
    const locationInst = 'https://www.instagram.com/ct_athenas/'
    window.location.href = locationInst
  }

  function DirectWhats() {
    const locationWhts = 'https://wa.me/message/JJSARAA2643YE1'
    window.location.href = locationWhts
  }

  return (
    <Contentendbar>
      <Contentbuttons>
        <img src={Ctlogo} alt="" width={165} />
        <Buttonslink >
          <button onClick={Directinstagram}>
            <FaInstagram size={25} />
          </button>
          <button onClick={DirectWhats}><FaWhatsapp size={25} />
          </button>

        </Buttonslink>
      </Contentbuttons>
      <div style={{ borderLeft: '1px solid white', width: '10px', borderWidth: '2px', height: '150px', marginTop: '50px', marginRight:"10px" }}></div>
      <Textinfo>
        <h3>Horários</h3>
        <span>segunda a sexta <br /> 15h ate as 22h</span>
      </Textinfo>
      <EndressContent >
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.28090441506!2d-46.801737599999996!3d-23.558352699999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ceff920aa02603%3A0xb48dfe2f9cbf75f5!2sAv.%20Santiago%20Rodilha%2C%20199%20-%20Veloso%2C%20Osasco%20-%20SP%2C%2006154-000!5e0!3m2!1spt-BR!2sbr!4v1717942210096!5m2!1spt-BR!2sbr" width="350" height="200" style={{ borderRadius: 10, border: 'none' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        <div style={{ borderLeft: '1px solid white', width: '10px', borderWidth: '2px', height: '150px', marginTop: '6px' }}></div>
        <div>
          <h3>
            Endereço </h3>
          <span><FaMapMarkerAlt size={20} style={{ color: 'red' }} />Av. Santiago Rodilha, 199 <br /> - Veloso</span>
        </div>
      </EndressContent>
      <div style={{ borderLeft: '1px solid white', width: '10px', borderWidth: '2px', height: '150px', marginTop: '50px' }}></div>
      <ContactText>
        <h3>ENTRE EM CONTAT</h3>
        <span> <BsTelephone size={20} style={{ color: 'red' }} />
          (11) 96581-1909</span>
        <span> <MdOutlineEmail size={20} style={{ color: 'red' }} />
          athenascentrodetreinamento@gmail.com</span>
      </ContactText>
    </Contentendbar>
  );
}

