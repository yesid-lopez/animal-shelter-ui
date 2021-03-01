import Task from '../task';
import { REGISTER_ELEMENTS } from '../pageobjects/register.elements';
export class VisualizeTheAnimal extends Task {

    async executeAs(actor) {
        await this.testController.expect(REGISTER_ELEMENTS.animalCard.visible).ok();
        return actor;
    }
}