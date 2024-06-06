import {fetchTracks} from "~/apis/track-api";
import {useLoaderData} from "@remix-run/react";

export async function loader(){
    const tracks = await fetchTracks();

    const filteredTracks = tracks.filter(track =>{
      return track.type === 'podcast' || track.type === 'song';

    })

    return{
        tracks: filteredTracks,
    };

}
