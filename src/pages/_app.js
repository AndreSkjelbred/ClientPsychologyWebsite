import "@/styles/globals.css";
import "../components/footer/footer.styles.css";
import "./psykologisk-behandling/behandling.styles.css";
import "../components/fieldContainer/fieldContainer.styles.css";
import "../components/menu/menu.styles.css";
import "../components/navBar/navBar.styles.css";
import "../components/navBarItem/navBarItem.styles.css";
import "./psykologisk-veiledning/veiledning.styles.css";
import "./istdp/istdp.styles.css";
import "./bestill/bestill.styles.css";

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
