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


    it('Should fail to get artists when axios call returns error on searchArtists', async (done) => {
        let spy = jest.spyOn(mockAxios, 'get').mockImplementationOnce(() => Promise.resolve(Promise.reject(Error("Failed to get artists"))));

        const response = await request(app).get('/search/artist?name=beyonce').send();
        expect(spy).toBeCalledTimes(1);
        expect(response.status).toBe(500);
        expect(response.body).toMatchObject({ "error": "Failed to get artists" });
        done()
    });

    it('Should fail to get artist when axios call returns error on getArtist', async (done) => {

        let spy = jest.spyOn(mockAxios, 'get').mockImplementationOnce(() => Promise.resolve(Promise.reject(Error("Failed to get artist"))));

        const response = await request(app).get('/artist/123').send();

        expect(spy).toBeCalledTimes(1);
        expect(response.status).toBe(500);
        expect(response.body).toMatchObject({ "error": "Failed to get artist" });
        done();
    });

    it('Should fail to get top tracks when axios call returns error on getArtistTopTracks', async (done) => {

        let spy = jest.spyOn(mockAxios, 'get').mockImplementationOnce(() => Promise.resolve(Promise.reject(Error("Failed to get top tracks"))));

        const response = await request(app).get('/artist/123/top').send();
        expect(spy).toBeCalledTimes(1);
        expect(response.status).toBe(500);
        expect(response.body).toMatchObject({ error: "Failed to get top tracks" })
        done();
    });


    it('Should fail to get albums when axios call returns error on getArtistAlbums', async (done) => {

        let spy = jest.spyOn(mockAxios, 'get').mockImplementationOnce(() => Promise.resolve(Promise.reject(Error("Failed to get top tracks"))));

        const response = await request(app).get('/artist/123/albums').send();
        expect(spy).toBeCalledTimes(1);
        expect(response.status).toBe(500);
        expect(response.body).toMatchObject({ error: "Failed to get top tracks" })
        done();

    });

    it('Should not call axios get  but catch an error if searchArtists method throws an exception ', async (done) => {
        let spyOnAxiosGet = jest.spyOn(mockAxios, 'get').mockImplementationOnce(() => Promise.resolve([]));

        let spy = jest.spyOn(ArtistController.prototype, 'searchArtists').mockImplementation(() => {
            throw new Error("can't read prop a");
        })

        const response = await request(app).get('/search/artist?name=beyonce').send();
        expect(spy).toBeCalled();
        expect(spy).toHaveBeenCalledTimes(1);
        expect(spyOnAxiosGet).toBeCalledTimes(0);
        expect(response.status).toBe(500);
        expect(response.body).toMatchObject({ "error": "can't read prop a" });
        done()
    });

    it('Should not call axios get  but catch an error if getArtist method throws an exception ', async (done) => {
        let spyOnAxiosGet = jest.spyOn(mockAxios, 'get').mockImplementationOnce(() => Promise.resolve([]));

        let spy = jest.spyOn(ArtistController.prototype, 'getArtist').mockImplementationOnce(() => {
            throw new Error("can't read prop a");
        })

        const response = await request(app).get('/artist/123').send();
        expect(spy).toBeCalled();
        expect(spy).toHaveBeenCalledTimes(1);
        expect(spyOnAxiosGet).toBeCalledTimes(0);
        expect(response.status).toBe(500);
        expect(response.body).toMatchObject({ "error": "can't read prop a" });
        done()
    });


    it('Should not call axios get  but catch an error if getArtistTopTracks method throws an exception ', async (done) => {
        let spyOnAxiosGet = jest.spyOn(mockAxios, 'get').mockImplementationOnce(() => Promise.resolve([]));

        let spy = jest.spyOn(ArtistController.prototype, 'getArtistTopTracks').mockImplementationOnce(() => {
            throw new Error("can't read prop a");
        })

        const response = await request(app).get('/artist/123/top').send();
        expect(spy).toBeCalled();
        expect(spy).toHaveBeenCalledTimes(1);
        expect(spyOnAxiosGet).toBeCalledTimes(0);
        expect(response.status).toBe(500);
        expect(response.body).toMatchObject({ "error": "can't read prop a" });
        done()
    });

    it('Should not call axios get  but catch an error if getArtistAlbums method throws an exception ', async (done) => {
        let spyOnAxiosGet = jest.spyOn(mockAxios, 'get').mockImplementationOnce(() => Promise.resolve([]));

        let spy = jest.spyOn(ArtistController.prototype, 'getArtistAlbums').mockImplementationOnce(() => {
            throw new Error("can't read prop a");
        })

        const response = await request(app).get('/artist/123/albums').send();
        expect(spy).toBeCalled();
        expect(spy).toHaveBeenCalledTimes(1);
        expect(spyOnAxiosGet).toBeCalledTimes(0);
        expect(response.status).toBe(500);
        expect(response.body).toMatchObject({ "error": "can't read prop a" });
        done()
    });

});

