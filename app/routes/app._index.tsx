import {PawPrint} from "lucide-react";
import {Link} from "@remix-run/react";

export default function AppHome() {

    return (
        <>
            <h1 className="text-3xl">LITTLE PAWS.</h1>
            <h2 className="text-1xl">Animal Adoption.</h2><br/>

            <h2  className="text-lg">Wer sind wir?</h2>
            <p>Wir sind eine Plattform, die alle aktuellen Vergabetiere zur Verfügung stellt. Auf unserer Website können Sie Tiere speichern und deren Details ansehen.
                Wenn Sie sich dann für ein Tier entscheiden, läuft die Adoption über ein  <Link to="/adoption"><b> Adoptionsverfahren</b></Link>. Für weitere Informationen
                oder um Kontakt aufzunehmen, besuchen Sie bitte unsere <Link to="/contact"><b> Kontaktseite</b></Link>.</p><br/>

            <p>Komm und schau dir unsere aktuellen <Link to="/app/library"><b>Vergabetieren</b></Link> an.</p>
            <img src="https://www.longanimal.com/blog/wp-content/uploads/2023/04/iStock-1186973591-1-1800x777.jpg" alt="Adoption" className="w-full" />
        </>
    );
}
