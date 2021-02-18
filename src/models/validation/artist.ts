// @ts-check
import { Request, Response, NextFunction } from 'express';
import Joi from "joi"
const { } = Joi

const searchArtistsSchema = (req: any, res: Response, next: NextFunction) => {
    const schema = Joi.object().keys({
        name: Joi.string().required()
    });
    validateRequest(req.query, res, next, schema);
};

const getArtistSchema = (req: Request<any>, res: Response, next: NextFunction) => {
    const schema = Joi.object().keys({
        id: Joi.number().required()
    });
    validateRequest(req.params, res, next, schema);
};

const getArtistTopTracksSchema = (req: any, res: Response, next: NextFunction) => {
    const schema = Joi.object().keys({
        id: Joi.number().required(),
    });
    validateRequest(req.params, res, next, schema);
};

const getArtistAlbumsSchema = (req: any, res: Response, next: NextFunction) => {
    const schema = Joi.object().keys({
        id: Joi.number().required(),
    });
    validateRequest(req.params, res, next, schema);
};



function validateRequest(req: Request, res: Response, next: NextFunction, schema: Joi.ObjectSchema<any>) {
    const options = {
        abortEarly: false,
        allowUnknown: true,
        stripUnknown: true
    };

    const { error, value } = schema.validate(req, options);

    if (error) {
        const { details } = error;
        const message = details.map(i => i.message).join(',');

        // console.log("error", message);
        res.status(422).json({ error: message })
    } else {
        req.body = value;
        next();
    }
}

export {
    getArtistSchema,
    searchArtistsSchema,
    getArtistTopTracksSchema,
    getArtistAlbumsSchema
}