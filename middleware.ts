import { stackMiddlewares } from './middlewares';
import { withRedirect } from './middlewares/with-redirect';

const middlewares = [withRedirect];

export default stackMiddlewares(middlewares);
