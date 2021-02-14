import { IArtistSearchResponse } from "../models/artist.interface";
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

}