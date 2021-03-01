import Task from './../task';
import { HOME_ELEMENTS } from '../pageobjects/home.element';
export class GoToRegister extends Task {

    async executeAs(actor) {
        await this.testController.click(HOME_ELEMENTS.registerButton);
        return actor;
    }
}