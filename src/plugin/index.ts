import { setupCustom } from './custom';
import { setupElement } from './element';

export const setupPlugin = (app: any) => {
    setupCustom(app);
    setupElement(app)
}