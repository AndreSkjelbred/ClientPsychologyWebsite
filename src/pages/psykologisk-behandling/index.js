import Footer from "@/components/footer/footer.component";
import { Fragment } from "react";
import Image from "next/image";
import NavBar from "@/components/navBar/navBar.component";
import Menu from "@/components/menu/menu.component";
function Behandling() {
  return (
    <Fragment>
      {/*  <Helmet>
        <title>Psykologisk Behandling</title>
        <meta
          name='description'
          content='psykologisk behandling av psykolog i trondheim'
        />
        <link rel='canonical' href='/psykologisk-behandling' />
      </Helmet> */}
      <div>
        <NavBar /> <Menu />
        <section className='behandling'>
          <div className='container grid grid--2-cols align-center-v margin-bottom-huge'>
            <div className='behandling-image-box'>
              <Image
                alt='psykolog-hjelp-trondheim'
                src='/assets/therapy.webp'
                fill
                className='behandling-image'
              />
            </div>
            <div className='behandling-text-box'>
              <h2 className='heading-secondary margin-bottom-big'>
                Psykologisk Behandling
              </h2>
              <p className='behandling-paragraph'>
                Psykiske lidelser har mange ulike former, men fellesnevneren er
                at de er svært plagsomme. De tar knekken på energi og livsglede.
                Har man en psykisk plage, blir det enkelte ganger vanskelig å
                fungere normalt i arbeid, på skole, i familie og sosialt.
              </p>
              <p className='behandling-paragraph'>
                Gjennom samtaleterapi kan du få hjelp til å håndtere dine
                vansker. En viktig forutsetning er at du er motivert og er
                villig til å bruke en del tid og krefter på dette arbeidet.
              </p>
              <p className='behandling-paragraph'>
                I starten bruker vi litt tid på å utforske dine problemområder,
                forsøke å sette dem i sammenheng og definere målsettinger. Det
                er viktig at det er du selv velger målsettinger og fokus for
                samtaleterapi.
              </p>
            </div>
          </div>

          <div className='container grid grid--2-cols '>
            <div className='behandling-list-box'>
              <div className='list-description'>
                Jeg kan hjelpe deg med behandling av:
              </div>
              <ul className='behandling-list'>
                <li className='behandling-item'>Depresjon</li>
                <li className='behandling-item'>Angst</li>
                <li className='behandling-item'>Traumereaksjoner</li>
                <li className='behandling-item'>Søvnforstyrrelser</li>
                <li className='behandling-item'>Stress og utbrenthet</li>
                <li className='behandling-item'>Sinnemestring</li>
                <li className='behandling-item'>Relasjonelle problemer</li>
              </ul>
              <div className='behandling-paragraph'>
                Jeg bruker flere metoder, bla. kognitiv og metakognitiv terapi,
                mentaliseringsbasert terapi, EMDR og Intensive Short-Term
                Dynamic Psychotherapy (ISTDP).
              </div>
            </div>
            <div className='behandling-image-box2'>
              <Image
                src='/assets/therapy2.webp'
                alt='psykolog-behandling'
                fill
                className='behandling-image behandling-image-2'
              />
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </Fragment>
  );
}

export default Behandling;
