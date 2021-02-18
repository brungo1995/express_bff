
export interface IArtist {
    id: number;
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


export interface ITrackArtist {
    id: number;
    name: string;
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