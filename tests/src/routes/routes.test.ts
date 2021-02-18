import request from 'supertest';
import { app } from '../../../src/index';
import ArtistController from '../../../src/controllers/artistController';
import { IArtist } from '../../../src/models/artist.interface';
// jest.mock('../../../src/controllers/artistController')

describe('Routes ', () => {

    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('Should call searchArtists method when request route is /search/artist/:query? ', async (done) => {
        let dummyArtist = [{
            "id": 246791,
            "name": "Drake",
            "link": "some link",
            "picture": "some picture",
            "picture_small": "some picture_small",
            "picture_medium": "some picture_medium",
            "picture_big": "some picture_big",
            "picture_xl": "some picture_xl",
            "nb_album": 10,
            "nb_fan": 25000,
            "radio": true,
            "tracklist": "some ",
            "type": "artist"
        }];

        let spy = jest.spyOn(ArtistController.prototype, 'searchArtists').mockImplementation(() => Promise.resolve(dummyArtist));

        const response = await request(app).get('/search/artist?name=drake').send();
        expect(spy).toBeCalled();
        expect(spy).toBeCalledWith('drake');
        expect(response.status).toBe(200);
        expect(response.body).toMatchObject(dummyArtist);
        done()
    });

    it('Should call getArtist method when request route is /artist/:id ', async (done) => {
        let dummyArtist = {
            "id": 246791,
            "name": "Drake name",
            "link": "some link",
            "share": "some share",
            "picture": "some picture",
            "picture_small": "some picture_small",
            "picture_medium": "some picture_medium",
            "picture_big": "some picture_big",
            "picture_xl": "some picture_xl",
            "nb_album": 10,
            "nb_fan": 20658415,
            "radio": true,
            "tracklist": "some tracklist",
            "type": "some type"
        };

        let spy = jest.spyOn(ArtistController.prototype, 'getArtist').mockImplementation(() => Promise.resolve(
            dummyArtist
        ));

        // const spy = ArtistController.prototype.getArtist = jest.fn()

        const response = await request(app).get('/artist/123').send();
        expect(spy).toBeCalled();
        expect(spy).toBeCalledWith('123');
        expect(response.status).toBe(200);
        expect(response.body).toMatchObject(dummyArtist)
        done()
    });

    it('Should call getArtistTopTracks method when request route is /artist/:id/top ', async (done) => {
        let dummyTopTracks = [
            {
                "id": 1050306812,
                "readable": true,
                "title": "",
                "title_short": "",
                "title_version": "",
                "link": "",
                "duration": 261,
                "rank": 962433,
                "explicit_lyrics": true,
                "explicit_content_lyrics": 1,
                "explicit_content_cover": 0,
                "preview": "",
                "contributors": [
                    {
                        "id": 246791,
                        "name": "Drake",
                        "link": "",
                        "share": "",
                        "picture": "",
                        "picture_small": "",
                        "picture_medium": "",
                        "picture_big": "",
                        "picture_xl": "",
                        "radio": true,
                        "tracklist": "",
                        "type": "artist",
                        "role": "Main"
                    }
                ],
                "md5_image": "",
                "artist": {
                    "id": 246791,
                    "name": "Drake",
                    "tracklist": "",
                    "type": "artist"
                },
                "album": {
                    "id": 166946302,
                    "title": "",
                    "cover": "",
                    "cover_small": "",
                    "cover_medium": "",
                    "cover_big": "",
                    "cover_xl": "",
                    "md5_image": "",
                    "tracklist": "",
                    "type": ""
                },
                "type": "track"
            }
        ];

        let spy = jest.spyOn(ArtistController.prototype, 'getArtistTopTracks').mockImplementation(() => Promise.resolve(dummyTopTracks));

        const response = await request(app).get('/artist/123/top').send();
        expect(spy).toBeCalled();
        expect(spy).toBeCalledWith('123');
        expect(response.status).toBe(200);
        expect(response.body).toMatchObject(dummyTopTracks)
        done()
    });

    it('Should call getArtistAlbums method when request route is /artist/:id/albums ', async (done) => {
        let dummyAlbums = [
            {
                "id": 15685208,
                "title": "More Life",
                "link": "",
                "cover": "",
                "cover_small": "",
                "cover_medium": "",
                "cover_big": "",
                "cover_xl": "",
                "md5_image": "",
                "genre_id": 116,
                "fans": 327838,
                "release_date": "2017-03-18",
                "record_type": "album",
                "tracklist": "",
                "explicit_lyrics": true,
                "type": "album"
            }
        ];

        let spy = jest.spyOn(ArtistController.prototype, 'getArtistAlbums').mockImplementation(() => Promise.resolve(dummyAlbums));

        const response = await request(app).get('/artist/123/albums').send();
        expect(spy).toBeCalled();
        expect(spy).toBeCalledWith('123');
        expect(response.status).toBe(200);
        expect(response.body).toMatchObject(dummyAlbums)
        done()
    });



    // ERRORS

    it('Should not call searchArtists method when request route is missing a search query eg://search/artist?someOtherProp=otherName ', async (done) => {
        let spy = jest.spyOn(ArtistController.prototype, 'searchArtists');

        const response = await request(app).get('/search/artist?someOtherProp=otherName').send();
        expect(spy).toBeCalledTimes(0);
        expect(response.status).toBe(422);
        expect(response.body).toMatchObject({ "error": "\"name\" is required" });
        done()
    });

    it('Should not call getArtist method when request route does not contain artist id eg:/search/artist/', async (done) => {


        let spy = jest.spyOn(ArtistController.prototype, 'getArtist')

        const response = await request(app).get('/artist/fds').send();
        expect(spy).toBeCalledTimes(0);
        expect(response.status).toBe(422);
        expect(response.body).toMatchObject({ error: "\"id\" must be a number" })
        done()
    });



    it('Should not call getArtistTopTracks method when id is not a number eg: /artist/someOtherThing/top ', async (done) => {

        let spy = jest.spyOn(ArtistController.prototype, 'getArtistTopTracks');

        const response = await request(app).get('/artist/someOtherThing/top').send();
        expect(spy).toBeCalledTimes(0);
        expect(response.status).toBe(422);
        expect(response.body).toMatchObject({ error: "\"id\" must be a number" })
        done()
    });


    it('Should not call getArtistAlbums method when id in  route is not a number eg:/artist/notANumber/albums ', async (done) => {

        let spy = jest.spyOn(ArtistController.prototype, 'getArtistAlbums');

        const response = await request(app).get('/artist/someOtherThing/top').send();
        expect(spy).toBeCalledTimes(0);
        expect(response.status).toBe(422);
        expect(response.body).toMatchObject({ error: "\"id\" must be a number" })
        done()

    });


});

