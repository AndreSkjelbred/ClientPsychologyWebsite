import NavBar from "../../components/navBar/navBar.component";
import Menu from "../../components/menu/menu.component";
import Footer from "../../components/footer/footer.component";
import { Fragment } from "react";
import { Helmet } from "react-helmet-async";
import Image from "next/image";

function Veiledning() {
  return (
    <Fragment>
      {/* <Helmet>
        <title>Psykologisk Behandling</title>
        <meta
          name='description'
          content='Psykologisk behandling av psykolog i Trondheim'
        />
        <link rel='canonical' href='/psykologisk-behandling' />
      </Helmet> */}
      <div>
        <NavBar />
        <Menu />

        <section className='veiledning'>
          <div className='container grid grid--2-cols align-center-v'>
            <div className='veiledning-image-box'>
              <Image
                src='/assets/therapy.webp'
                fill
                alt='psykologisk-veiledning'
                className='veiledning-image'
              />
            </div>
            <div className='veiledning-text-box'>
              <div className='heading-secondary margin-bottom-big'>
                Psykologisk Veiledning
              </div>
              <p className='behandling-paragraph'>
                Livet byr på mange utfordringer og de fleste mennesker opplever
                en del vanskelige perioder i livet. Det kan være konflikter på
                arbeid eller hjemme, overgangsfaser i livet, personlige kriser,
                samlivsbrudd og andre krevende situasjoner.
              </p>
              <p className='behandling-paragraph'>
                Kanskje du står foran vanskelige valg og er usikker på hva som
                er det riktige for deg? Kanskje du føler deg forstrukket, lite
                verdsatt, sliten, stresset eller utmattet?
              </p>
              <p className='behandling-paragraph '>
                Jeg kan hjelpe deg med å sortere dine tanker og følelser slik at
                det blir lettere å finne en vei ut av en vanskelig situasjon.
                Noen ganger kan det være nok med et par timer, mens andre ganger
                trenger man en noe lengre oppfølgning. Det er du som bestemmer
                omfanget av det arbeidet som skal gjøres.
              </p>
              <div className='list-description margin-top-md'>
                Jeg kan tilby hjelp med:
              </div>
              <ul className='behandling-list'>
                <li className='behandling-item'>
                  Håndtering av krevende livssituasjoner
                </li>
                <li className='behandling-item'>Konflikter</li>
                <li className='behandling-item'>Selvutvikling</li>
                <li className='behandling-item'>
                  Mestring av plutselige endringer i livet (privat, på arbeid,
                  eller andre arenaer)
                </li>
                <li className='behandling-item'>
                  Mestring av stress og utbrenthet
                </li>
              </ul>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </Fragment>
  );
}

export default Veiledning;
