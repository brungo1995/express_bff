import { ITrackAlbum } from "./album.interface";
import { ITrackArtist, ITrackContributor } from "./artist.interface";

export interface IArtistTrack {
    id: number;
    readable: boolean;
    title: string;
    title_short: string;
    title_version: string;
    link: string;
    duration: number;
    rank: number;
    explicit_lyrics: boolean;
    explicit_content_lyrics: number;
    explicit_content_cover: number;
    preview: string;
    contributors: Array<ITrackContributor>;
    md5_image: string;
    artist: ITrackArtist;
    album: ITrackAlbum;
    type: string
}


