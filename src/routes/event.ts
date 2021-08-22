import express from "express";
import {Events, eventModel} from "../model/events";
import cors from 'cors';

const router = express.Router();

/* event section endpoint*/

router.get('/events/past', (req, res, next) => {
    res.send("past event");
});

router.get('/events/future', (req, res, next) => {
    res.send("future event");
});

router.get('/events', cors(), async (req: express.Request, res: express.Response) =>{

    try {
        const events = await eventModel.getAllEvents();
        res.json(events);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            err: error.message,
        });
    }
});

router.get('/events/placeholder', (req, res) => {
    res.sendFile(__dirname.slice(0,-11) + 'images/ieee_placeholder_thumbnail.jpg');
});

router.get('/events/:images', (req, res)=> {
	console.log(req.params.images);
	res.sendFile(__dirname.slice(0,-11) + 'images/event/' + req.params.images + ".jpg");

});

export = router;
