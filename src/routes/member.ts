import express from "express";
import {Members, memberModel} from '../model/members'

const router = express.Router();

router.get('/members/eboard', async (req: express.Request, res: express.Response) => {
    
    try {
        const members = await memberModel.getEboardMembers();
        res.json(members);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: error.message, 
        });
    }
});


router.get('/members/jboard', async (req: express.Request, res: express.Response) => {

    try {
        const members = await memberModel.getJboardMembers();
        res.json(members);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: error.message, 
        });
    }
});

router.get('/members/dboard', async (req: express.Request, res: express.Response) =>{
    
    try {
        const members = await memberModel.getDboardMembers();
        res.json(members);
    } catch(error) {
        console.log(error);
        res.status(500).json({
            error: error.message, 
        });
    }
});

router.get('/members', async (req: express.Request, res: express.Response) => {

    try {
        const members = await memberModel.getAllMembers();
        res.json(members);
    } catch(error) {
        console.log(error);
        res.status(500).json({
            error: error.message, 
        });
    }
});

router.get('/members/:year/:name', (req, res)=>{
	console.log(req.params.name);
	res.sendFile(__dirname.slice(0,-11) + 'images/' + req.params.year + '/'+ req.params.name + ".jpg");

});

router.get('/members/placeholder', (req, res) => {
    res.sendFile(__dirname.slice(0, -11) + 'images/profile_placeholder_0.jpg');
});


export = router;
