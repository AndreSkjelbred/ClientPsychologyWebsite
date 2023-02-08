import NavBar from "../../components/navBar/navBar.component";
import Footer from "../../components/footer/footer.component";
import Menu from "../../components/menu/menu.component";
import FieldContainer from "../../components/fieldContainer/fieldContainer.component";
import React, { Fragment, useRef } from "react";

import emailjs from "@emailjs/browser";
import { useState } from "react";
import Head from "next/head";
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
      <Head>
        <title>Bestill Time - Trondheim Psykolog</title>
        <meta
          name='description'
          content='Psykolog i Trondheim. Kontakt for profesjonell behandling av Anna Skjelbred. Jeg tilbyr psykologisk behandling og veiledning.'
        />
        <meta
          name='keywords'
          content='trondheim psykolog, psykolog,trondheim,behandling,istdp, anna skjelbred, terapi'
        ></meta>
        <link rel='canonical' href='/' />
      </Head>
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
