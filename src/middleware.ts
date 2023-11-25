import { stackMiddlewares } from './middlewares';
import { withHomeRedirect } from './middlewares/with-home-redirect';

const middlewares = [withHomeRedirect];

export default stackMiddlewares(middlewares);
