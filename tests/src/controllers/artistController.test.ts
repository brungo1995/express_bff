import request from 'supertest';
import { app } from '../../../src/index';
import ArtistController from '../../../src/controllers/artistController';
import { isNumber } from '../../../src/utils/isNumber';
import express, { Application } from 'express';
import { BASE_URL, HEADERS } from "../../../src/utils/external_serives"

import mockAxios from 'axios'

describe('Routes ', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('Should make an axios get call when searchArtists method is called', async (done) => {
        let spy = jest.spyOn(mockAxios, 'get').mockImplementationOnce(() => Promise.resolve([]));
        const response = await request(app).get('/search/artist?name=beyonce').send();
        expect(spy).toBeCalled();
        expect(spy).toHaveBeenCalledTimes(1);
        expect(spy).toBeCalledWith(`${BASE_URL}/search/artist?q=beyonce`);
        expect(response.status).toBe(200);
        done();
    });

    it('Should make an axios get call when getArtist method called', async (done) => {
        let spy = jest.spyOn(mockAxios, 'get').mockImplementationOnce(() => Promise.resolve([]));
        const response = await request(app).get('/artist/123').send();
        expect(spy).toBeCalled();
        expect(spy).toHaveBeenCalledTimes(1);
        expect(spy).toBeCalledWith(`${BASE_URL}/artist/123`);
        expect(response.status).toBe(200);
        done();
    });

    it('Should make an axios get call when getArtistTopTracks method is called', async (done) => {
        let spy = jest.spyOn(mockAxios, 'get').mockImplementationOnce(() => Promise.resolve([]));
        const response = await request(app).get('/artist/123/top').send();
        expect(spy).toBeCalled();
        expect(spy).toHaveBeenCalledTimes(1);
        expect(spy).toBeCalledWith(`${BASE_URL}/artist/123/top`);
        expect(response.status).toBe(200);
        done();
    });

    it('Should make an axios get call when getArtistAlbums method is called', async (done) => {
        let spy = jest.spyOn(mockAxios, 'get').mockImplementationOnce(() => Promise.resolve([]));

        const response = await request(app).get('/artist/123/albums').send();
        expect(spy).toBeCalled();
        expect(spy).toHaveBeenCalledTimes(1);
        expect(spy).toBeCalledWith(`${BASE_URL}/artist/123/albums`);
        expect(response.status).toBe(200);
        done();
    });



    // // ERRORS

    // it('Should not call searchArtists method when request route is missing a search query eg://search/artist?someOtherProp=otherName ', async () => {
    //     let spy = jest.spyOn(ArtistController.prototype, 'searchArtists');

    //     const response = await request(app).get('/search/artist?someOtherProp=otherName').send();
    //     expect(spy).toBeCalledTimes(0);
    //     expect(response.status).toBe(422);
    //     expect(response.body).toMatchObject({ "error": "\"name\" is required" });
    // });

    // it('Should not call getArtist method when request route does not contain artist id eg:/search/artist/', async () => {


    //     let spy = jest.spyOn(ArtistController.prototype, 'getArtist')

    //     const response = await request(app).get('/artist/fds').send();
    //     expect(spy).toBeCalledTimes(0);
    //     expect(response.status).toBe(422);
    //     expect(response.body).toMatchObject({ error: "\"id\" must be a number" })
    //   done();
    // });



    // it('Should not call getArtistTopTracks method when id is not a number eg: /artist/someOtherThing/top ', async () => {

    //     let spy = jest.spyOn(ArtistController.prototype, 'getArtistTopTracks');

    //     const response = await request(app).get('/artist/someOtherThing/top').send();
    //     expect(spy).toBeCalledTimes(0);
    //     expect(response.status).toBe(422);
    //     expect(response.body).toMatchObject({ error: "\"id\" must be a number" })
    //   done();
    // });


    // it('Should not call getArtistAlbums method when id in  route is not a number eg:/artist/notANumber/albums ', async () => {

    //     let spy = jest.spyOn(ArtistController.prototype, 'getArtistAlbums');

    //     const response = await request(app).get('/artist/someOtherThing/top').send();
    //     expect(spy).toBeCalledTimes(0);
    //     expect(response.status).toBe(422);
    //     expect(response.body).toMatchObject({ error: "\"id\" must be a number" })
    //   done();

    // });
});

