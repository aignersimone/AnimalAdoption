import { Home, PawPrint, HandHeart } from 'lucide-react';
import { Link } from '@remix-run/react';

//Definition der Sidebar mit ihren dazugehörigen Links
export function Sidebar() {
  return (
    <div className="sidebar">
      <section>
        <h2 className="mb-2">Animal Adoption</h2>

        <div className="space-y-1">
          <Link to="/app" className="sidebar_link">
            <Home />
            Home
          </Link>

          <Link to="/app/library" className="sidebar_link">
            <PawPrint />
            Adoption Animals
          </Link>

          <Link to="/app/favorites" className="sidebar_link">
            <HandHeart/>
            My Favorites
          </Link>
        </div>
      </section>
    </div>
  );
}
