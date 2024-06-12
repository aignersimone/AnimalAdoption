import { playlistQueryOptions } from '~/apis/playlist-api';
import { useQuery } from '@tanstack/react-query';
import LoadingSpinner from '~/components/loading-spinner';


export default function PlaylistOverview() {
  const { data, isSuccess, isLoading } = useQuery(playlistQueryOptions);

  return (
    <>
      <div className="mb-5">
        <h1>Playlists</h1>
        <p>Your playlists. Your music.</p>
      </div>

      {isLoading ? <LoadingSpinner className={''}></LoadingSpinner> : null}
      {isSuccess ? <PlaylistCardList playlists={data}></PlaylistCardList> : null}
    </>
  );
}
