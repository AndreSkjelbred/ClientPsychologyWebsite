import NavBar from '../../components/navBar/navBar.component'
import Menu from '../../components/menu/menu.component'
import Footer from '../../components/footer/footer.component'
import { Fragment } from 'react'
import Head from 'next/head'

function ISTDP() {
  return (
    <Fragment>
      <Head>
        <title>AEDP - Trondheim Psykolog</title>
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
        <NavBar />
        <Menu />

        <section className='section-istdp'>
          <div className='container'>
            <h2 className='heading-secondary margin-bottom-sm'>
              Informasjon om AEDP
            </h2>
            <h3 className='heading-tertiary margin-bottom-big'>
              <a href='https://aedp-norge.no/'>
                (Accelerated Experiential Dynamic Psychoterapy)
              </a>
            </h3>
            <div className='istdp-text-box'>
              <p className='behandling-paragraph'>
                Intensiv dynamisk korttidsterapi (ISTDP) er en terapiform som
                ble utviklet på 70-80 tallet i Canada av Habib Davanloo.
                Terapien baserer seg på psykodynamisk forståelse, samt
                tilknytningsteori. Viktige spørsmål som man retter fokus på i
                terapien er «Hva er årsaker til at pasienten har psykiske
                symptomer eller opplever problemer i relasjoner?» og «Hvordan
                kan terapeuten hjelpe pasienten med å få optimal kontakt med
                sine konfliktfylte følelser?»
              </p>
              <p className='behandling-paragraph'>
                ISTDP legger til grunn en forståelse av at symptomer og plager
                skapes av de måter vi forsøker å håndtere våre indre
                følelsesmessige konflikter. Disse følelseskonfliktene oppstår
                ofte som følge av brudd i følelsesmessig kontakt tidlig i livet,
                ulike psykiske traumer og relasjonsskader. Ved mellommenneskelig
                kontakt med andre seinere i livet vekkes Â disse konfliktfylte
                følelsene til livet, angsten de driver og måtene vi håndterer
                dette på som fører til symptomer og plager. For å håndtere dem
                eller holde dem på avstand utvikler man ulike forsvarsmekanismer
                eller strategier. Siden disse strategiene utvikles ofte tidlig i
                livet, kan de være tilpasset fortidige problemer. Når man vokser
                opp med smertefulle følelser, angst for følelser og umodne
                strategier tar man ofte disse mønstrene med seg inn i voksent
                liv fordi de er blitt automatiserte og dermed ubevisste. Det er
                imidlertid ikke alle strategier som er like hensiktsmessig i
                voksen alder, og dermed oppstår det problemer med å bruke dem i
                det voksne livet.
              </p>
              <p className='behandling-paragraph'>
                ISTDP terapeut jobber med å undersøke sammen med pasientene om
                disse strategier er med på å skape og opprettholde symptomene i
                dag og å hjelpe pasientene å endre dette slik at de føler de
                tidligere unngåtte følelsene i stedet for å benytte seg av
                symptomfremkallende forsvar.
              </p>

              <p className='behandling-paragraph'>
                ISTDP terapeut inviterer pasienten til en terapeutisk relasjon
                der man kan i fellesskap utforske og sette ord på pasientens
                følelser og der terapeuten har en utforskende, ikke-dømmende
                holdning. I tillegg får pasienten hjelp til å håndtere evt.
                angstsymptomer som kan dukke opp når smertefulle følelser blir
                utforsket.
              </p>
              <p className='behandling-paragraph'>
                Terapeuten hjelper pasienten også med å utvikle nye og mer modne
                strategier for å mestre psykiske reaksjoner på livets
                utfordringer.
              </p>
              <p className='behandling-paragraph'>
                I ISTDP legger vi mye vekt på pasientens egen vilje til å
                utforske egne følelser sammen med terapeuten. Pasienten blir
                derfor spurt om han/hun ønsker å snakke om følelser, og
                terapeuten jobber kun med følelsesmessige vansker der pasienten
                gir tillatelse. ISTDP-timer varer 90 min.
              </p>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </Fragment>
  )
}

export default ISTDP
