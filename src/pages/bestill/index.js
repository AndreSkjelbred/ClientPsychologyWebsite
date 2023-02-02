import NavBar from "../../components/navBar/navBar.component";
import Footer from "../../components/footer/footer.component";
import Menu from "../../components/menu/menu.component";
import FieldContainer from "../../components/fieldContainer/fieldContainer.component";
import React, { Fragment, useRef } from "react";

import emailjs from "@emailjs/browser";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Image from "next/image";

function BestillTime() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const form = useRef();
  const sendEmail = () => {
    toggleModal();

    emailjs.sendForm(
      "service_j3spnv2",
      "template_led565j",
      form.current,
      "qERSkzCuShagwk9op"
    );
  };

  function toggleModal() {
    setIsModalOpen(!isModalOpen);
  }

  return (
    <Fragment>
      {/* <Helmet>
        <title>Bestill Time</title>
        <meta
          name='description'
          content='Bestill time til psykolog i Trondheim for behandling.'
        />
        <link rel='canonical' href='/bestill' />
      </Helmet> */}
      <div>
        <NavBar bestill={true} />
        <Menu />
        {isModalOpen && (
          <div className='modal hidden'>
            <h2 className='mld'>Melding Sendt!</h2>
            <button onClick={toggleModal} className='close-modal'>
              &times;
            </button>
          </div>
        )}
        <div className='map-form-container'>
          <div className='map-title-container'>
            <h2 className='map-title'>Adresse: Nordre Gate 21</h2>
            <div className='map-wrap'>
              <a
                href='https://www.google.com/maps/@63.4340235,10.3975004,19z'
                target='_blank'
                rel='noreferrer'
              >
                <Image
                  alt='kart-psykolog-trondheim'
                  src='/assets/map.png'
                  fill
                  className='map'
                />
              </a>
            </div>
          </div>

          <form ref={form} className='form-fields' onSubmit={sendEmail}>
            <FieldContainer
              name='user_name'
              type='text'
              title='Navn'
              placeholder='Anna Skjelbred'
            />
            <FieldContainer
              name='user_email'
              type='email'
              required
              title='E-postadresse'
              placeholder='anna@gmail.com'
            />
            <FieldContainer
              name='message'
              large={true}
              type='text'
              title='Melding'
              placeholder=''
            />
            <button className='submit-form'>Send</button>
          </form>
        </div>

        <Footer />
      </div>
    </Fragment>
  );
}

export default BestillTime;
