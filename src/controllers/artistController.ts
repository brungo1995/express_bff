import { IArtistSearchResponse, IArtist, IArtistTrack, ITrackAlbum } from "../models/artist.interface";
import { BASE_URL, HEADERS } from "../utils/domain"
import axios, { AxiosResponse } from "axios";
import { Get, Route } from 'tsoa';

// @Route('artist')
export default class ArtistController {

    // @Get("/search/artist")
    public async searchArtists(name: string): Promise<IArtistSearchResponse> {

        const url = `${BASE_URL}/search/artist?q=${name}`
        const res = await axios.get(url);
        return res.data;
    }

    public async getArtist(artistId: string): Promise<IArtist> {

        const url = `${BASE_URL}/artist/${artistId}`
        const res = await axios.get(url);
        return res.data;
    }

    public async getArtistTopTracks(artistId: string): Promise<IArtistTrack[]> {

        const url = `${BASE_URL}/artist/${artistId}/top`
        const res = await axios.get(url);
        return res.data;
    }

    public async getArtistAlbums(artistId: string): Promise<ITrackAlbum[]> {

        const url = `${BASE_URL}/artist/${artistId}/albums`
        const res = await axios.get(url);
        return res.data;
    }

}