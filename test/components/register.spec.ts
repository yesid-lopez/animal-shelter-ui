import { Selector } from 'testcafe';
import { JsonServerHandler } from './utils/json-server-handler';
import { REGISTER_ELEMENTS } from '../../patterns/screenplay/pageobjects/register.elements';

const server = new JsonServerHandler();

server.jsonServer.post('/animal', (req, res) => {
    res.send();
});

fixture('Registration animal')
    .page('http://localhost:3000')
    .before(async () => {
        server.setListener();
    })
    .after(async () => {
        server.closeListener();
    });

test('Enter register page', async testController => {
    let registerSelector = Selector('a').nth(0);
    registerSelector = Selector('a').withText('Register animal');
    const registerTitle = Selector('.MuiTypography-root');

    await testController.expect(registerSelector.visible).ok();

    await testController.expect(registerSelector.innerText).eql('Register animal');

    await testController.click(registerSelector);

    await testController.expect(registerTitle.visible).ok();

    await testController.typeText(REGISTER_ELEMENTS.petNameField, 'Garfield')
        .click(REGISTER_ELEMENTS.simpleSelectBreed)
        .click(REGISTER_ELEMENTS.catBreed)
        .click(REGISTER_ELEMENTS.checkboxTerms)
        .click(REGISTER_ELEMENTS.submitButton);

});