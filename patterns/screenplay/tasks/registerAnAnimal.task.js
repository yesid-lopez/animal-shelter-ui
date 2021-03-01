import Task from '../task';
import { REGISTER_ELEMENTS } from '../pageobjects/register.elements';
export class RegisterAnAnimal extends Task {

    async executeAs(actor) {
        await this.testController.typeText(REGISTER_ELEMENTS.petNameField, 'Garfield')
            .click(REGISTER_ELEMENTS.simpleSelectBreed)
            .click(REGISTER_ELEMENTS.catBreed)
            .click(REGISTER_ELEMENTS.femaleOption)
            .click(REGISTER_ELEMENTS.checkboxTerms)
            .click(REGISTER_ELEMENTS.submitButton);
        return actor;
    }
}