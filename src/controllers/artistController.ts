interface ArtistResponse {
    message: string;
}


import { Get, Route } from 'tsoa';

@Route('test')
export default class ArtistController {

    @Get("/")
    public async getMessage(): Promise<ArtistResponse> {
        return {
            message: "Hi"
        }
    }
}