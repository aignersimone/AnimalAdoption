import Tabs from '~/components/tabs';
import {fetchTracks} from "~/apis/track-api";
import {useLoaderData, useSearchParams} from "@remix-run/react";
import {TrackCardList} from "~/components/track-card-list";
import {LoaderFunctionArgs} from "@remix-run/router";


export async function loader({request}: LoaderFunctionArgs){
  const url = new URL(request.url)
  const type = url.searchParams.get('type') ||  tabs[0].id;

  const tracks = await fetchTracks();

  const filteredTracks = tracks.filter(track =>{
    return track.type === type ;

  })

  return{
    tracks: filteredTracks,
  };

}

// export async function clientLoader(){
//   const response = await fetch('/api/tracks');
//   const tracks = await response.json();
//   return tracks;
// }

const tabs = [
  { id: 'song', title: 'Music' },
  { id: 'podcast', title: 'Podcasts' },
  { id: 'audiobooks', title: 'Audiobooks', disabled: true },
];

export default function Library() {
  const data = useLoaderData<typeof loader>();
  const tracks = data.tracks;
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTabId = searchParams.get('type') ?? tabs[0].id;

  const onTypeChange = (newType: string) => {
    setSearchParams((params) => {
      params.set('type', newType);
      return params;
    });
  };

  return (
    <>
      <h1>Library</h1>
      <p className="text-muted-foreground text-sm">Your Tracks. Your library.</p>

      <Tabs className="my-10" tabs={tabs} activeTabId={activeTabId} onValueChange={onTypeChange}></Tabs>

      <TrackCardList tracks={tracks}></TrackCardList>
    </>
  );
}
