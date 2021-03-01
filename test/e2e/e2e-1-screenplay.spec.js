import  Actor from '../../patterns/screenplay/actor';
import { given, when, then, and} from '../../patterns/screenplay/abilities';
import { GoToRegister } from '../../patterns/screenplay/tasks/goToRegister.task';
import { VisualizeRegisterTitle } from '../../patterns/screenplay/tasks/visualizeRegisterTitle.task';
import { RegisterAnAnimal } from '../../patterns/screenplay/tasks/registerAnAnimal.task';
import { VisualizeTheAnimal } from '../../patterns/screenplay/tasks/visualizeTheAnimal.task';

fixture('Registration animal')
    .page('https://animal-shelter-ui.herokuapp.com')

test('Enter register page', async testController => {
    const james = new Actor().called('James');

    await when(james, testController).attempsTo(GoToRegister);
    await then(james, testController).should(VisualizeRegisterTitle);
    await when(james, testController).attempsTo(RegisterAnAnimal);
    await then(james, testController).should(VisualizeTheAnimal);

});