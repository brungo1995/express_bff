
export interface IArtistSearchResponse {
    data: Array<IArtist>;
    total: number;
    next: string
}

export interface IArtist {
    id: string,
    name: string,
    link: string,
    picture: string,
    picture_small: string,
    picture_medium: string,
    picture_big: string,
    picture_xl: string,
    nb_album: number,
    nb_fan: number,
    radio: boolean,
    tracklist: string,
    type: string
}
