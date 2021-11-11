import { Router} from "express";
import { AuthenticateUserController } from "./controller/AuthenticateUserController";
import { CreateMessageController } from "./controller/CreateMessageController";
import { GetLastThreeMessagesController } from "./controller/GetLastThreeMessagesController";
import { ProfileUserController } from "./controller/ProfileUserController";
import { ensureAuthenticate } from "./middleware/ensureAuthenticate";
import cors from 'cors'


const router = Router();


router.post('/authenticate', cors(), new AuthenticateUserController().handle)
router.post('/messages', cors(), ensureAuthenticate, new CreateMessageController().handle)
router.get('/messages/lastthree', cors(),new GetLastThreeMessagesController().handle)
router.get('/profile', cors(), ensureAuthenticate ,new ProfileUserController().handle)


export { router }