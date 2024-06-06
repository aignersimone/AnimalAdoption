import { Hotel, LayoutGrid, ListMusic } from 'lucide-react';
import { PlaylistNav } from './playlist-nav';
import { Link } from '@remix-run/react';

export function Sidebar() {
  return (
    <div className="sidebar">
      <section>
        <h2 className="mb-2">Tieradoption</h2>

        <div className="space-y-1">
          <Link to="/app" className="sidebar_link">
            <Hotel />
            Home
          </Link>

          <Link to="/app/library" className="sidebar_link">
            <LayoutGrid />
            Vergabetiere
          </Link>

          <Link to="/app/playlists" className="sidebar_link">
            <ListMusic />
            Meine Favoriten
          </Link>
        </div>
      </section>

      <section>
        <h2 className="mb-2">Mein Lieblingstiere </h2>

        <PlaylistNav></PlaylistNav>
      </section>
    </div>
  );
}
