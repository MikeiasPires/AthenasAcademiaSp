import React from 'react';
import Ctlogo from '../../../public/Ct.svg'
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp
} from "react-icons/fa";
import {FaMapMarkerAlt } from "react-icons/fa";
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

  function Directinstagram (){
    const location = 'https://www.instagram.com/ct_athenas/'
    window.location.href = location
  }

  return (
    <Contentendbar>
      <Contentbuttons>
        <img src={Ctlogo} alt="" width={165} />
        <Buttonslink >
          <button onClick={Directinstagram}>
            <FaInstagram size={25} />
          </button>
          <button><FaWhatsapp size={25} />
          </button>
          <button><FaFacebookF size={25} />
          </button>
        </Buttonslink>
      </Contentbuttons>
      <Textinfo>
        <h3>Horários</h3>
        <span>segunda a sexta <br /> 15h ate as 22h</span>
      </Textinfo>
      <EndressContent >
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.28090441506!2d-46.801737599999996!3d-23.558352699999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ceff920aa02603%3A0xb48dfe2f9cbf75f5!2sAv.%20Santiago%20Rodilha%2C%20199%20-%20Veloso%2C%20Osasco%20-%20SP%2C%2006154-000!5e0!3m2!1spt-BR!2sbr!4v1717942210096!5m2!1spt-BR!2sbr" width="350" height="200" style={{ borderRadius: 10, border: 'none' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        <div>
          <h3>
            Endereço </h3>
          <span><FaMapMarkerAlt size={20} style={{ color: 'red' }} />Av. Santiago Rodilha, 199 <br /> - Veloso</span>
        </div>
      </EndressContent>
      <ContactText>
        <h3>ENTRE EM CONTATO</h3>
        <span> <BsTelephone size={20} style={{ color: 'red' }} />
          (11) 96581-1909</span>
        <span> <MdOutlineEmail size={20} style={{ color: 'red' }} />
          athenascentrodetreinamento@gmail.com</span>
      </ContactText>
    </Contentendbar>
  );
}

