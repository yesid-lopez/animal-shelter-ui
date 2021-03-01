import Task from '../task';
import { REGISTER_ELEMENTS } from '../pageobjects/register.elements';
export class VisualizeRegisterTitle extends Task {

    async executeAs(actor) {
        await this.testController.expect(REGISTER_ELEMENTS.registerTitle.visible).ok();
        return actor;
    }
}