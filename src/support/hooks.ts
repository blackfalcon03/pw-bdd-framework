import { Before, After, setWorldConstructor } from '@cucumber/cucumber';
import { World } from './world';

setWorldConstructor(World);

Before(async function (this: World) {
    await this.init();
});

After(async function (this: World) {
    await this.cleanup();
});
