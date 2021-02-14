import { IArtistSearchResponse, IArtist } from "../models/artist.interface";
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

    public async getArtist(id: string): Promise<IArtist> {

        const url = `${BASE_URL}/artist/${id}`
        const res = await axios.get(url);
        return res.data;
    }

    public async getArtistTracks(id: string): Promise<IArtist> {

        const url = `${BASE_URL}/artist/${id}/top`
        const res = await axios.get(url);
        return res.data;
    }

    public async getArtistAlbums(id: string): Promise<IArtistSearchResponse> {

        const url = `${BASE_URL}/artist/${id}/albums`
        const res = await axios.get(url);
        return res.data;
    }

}