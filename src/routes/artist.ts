import express from "express";
import ArtistController from "../controllers/artistController";

const router = express.Router();
const controller = new ArtistController();

router.get("/search/artist", async (_req, res) => {
    try {
        // const name = (_req.query && _req.query.name as string) || ""
        const { name } = _req.query
        const response = await controller.searchArtists(name as string);
        return res.send(response)

    } catch (error) {
        console.log("Failed to fetch search results")
        console.log(error)
    }
});

router.get("/artist/:id", async (_req, res) => {
    try {

        const { id } = _req.params
        const response = await controller.getArtist(id as string);
        return res.send(response)

    } catch (error) {
        console.log("Failed to fetch search results")
        console.log(error)
    }
});




export default router;