import { Selector } from 'testcafe';
import  Actor from '../../patterns/screenplay/actor';
import { given, when, then, and} from '../../patterns/screenplay/abilities';
import { GoToRegister } from '../../patterns/screenplay/tasks/goToRegister.task';

fixture('Registration animal')
    .page('https://animal-shelter-ui.herokuapp.com')

test('Enter register page', async testController => {
    const james = new Actor().called('James');

    when(james, this.testController).attempsTo(GoToRegister);

    // await testController.expect(registerTitle.visible).ok();

    await testController.debug();

});