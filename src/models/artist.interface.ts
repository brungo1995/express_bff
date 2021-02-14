
export interface IArtistSearchResponse {
    data: Array<IArtist>;
    total: number;
    next: string
}

export interface IArtist {
    id: string;
    name: string;
    link: string;
    picture: string;
    picture_small: string;
    picture_medium: string;
    picture_big: string;
    picture_xl: string;
    nb_album: number;
    nb_fan: number;
    radio: boolean;
    tracklist: string;
    type: string
}

export interface ITrackContributor {
    id: number;
    name: string;
    link: string;
    share: string;
    picture: string;
    picture_medium: string;
    picture_big: string;
    picture_xl: string;
    radio: boolean;
    tracklist: string;
    type: string
    role: string
}

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
    album: ITrackArtist;
    type: string
}


export interface ITrackAlbum {
    id: number;
    title: string;
    cover: string;
    cover_small: string;
    cover_medium: string;
    cover_big: string;
    cover_xl: string;
    md5_image: string;
    tracklist: string;
    type: string
}

export interface ITrackAlbum {
    id: number;
    title: string;
    link: string;
    cover: string;
    cover_small: string;
    cover_medium: string;
    cover_big: string;
    cover_xl: string;
    md5_image: string;
    genre_id: number;
    fans: number;
    release_date: string;
    record_type: string;
    tracklist: string;
    explicit_lyrics: boolean;
    type: string
}

export interface ITrackArtist {
    id: number;
    name: string;
    tracklist: string;
    type: string
}