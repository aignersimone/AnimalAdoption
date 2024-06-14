import { Link } from '@remix-run/react';

export function NavBar() {
  return (
      <header className="border-b py-4 px-5 flex flex-col items-center justify-center">
        <div>
          <Link to="/app" className="px-2 font-bold hover:bg-accent rounded-sm  tracking-tight uppercase h-3">
            <img src="img/little_paws.svg" alt="Logo_Littlepaws" height={150} width={150}/>
          </Link>
        </div>
        <nav className="flex gap-3 text-sm">
            <Link to="/app" className="px-3 py-1 font-medium hover:bg-accent rounded-sm">
                Home
            </Link>
          <Link to="/about" className="px-3 py-1 font-medium hover:bg-accent rounded-sm">
            About
          </Link>

          <Link to="/adoption" className="px-3 py-1 font-medium hover:bg-accent rounded-sm">
              Adoption Procedure
          </Link>

          <Link to="/contact" className="px-3 py-1 font-medium hover:bg-accent rounded-sm">
            Contact
          </Link>
        </nav>
      </header>
  );
}
