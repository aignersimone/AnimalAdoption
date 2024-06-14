import {PawPrint} from "lucide-react";
import {Link} from "@remix-run/react";


//Rückgabe der Darstellung der Home-Seite mit interner Verlinkung
export default function AppHome() {
    return (
        <>
            <h1 className="text-3xl">Little Paws.</h1>
            <h2 className="text-1xl">Animal Adoption.</h2><br/>

            <h2  className="text-lg">Who are we?</h2>
            <p>We are a platform that provides all the current adoption animals. On our website, you can save animals
                and view their details. If you decide on an animal, the adoption process is carried out through an
                <Link className="linkcolor" to="/adoption"><b> adoption procedure</b></Link>. For more information or to get in touch, please
                visit our <Link className="linkcolor" to="/contact"><b> contact page</b></Link>.</p><br/>

            <p>Come and check out our current <Link className="linkcolor" to="/app/library"><b>adoption animals</b></Link>.</p>
            <img src="https://www.longanimal.com/blog/wp-content/uploads/2023/04/iStock-1186973591-1-1800x777.jpg" alt="Adoption" className="w-full" />
        </>
    );
}
