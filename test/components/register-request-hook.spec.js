import { Selector } from 'testcafe';
import { RequestMock } from 'testcafe';
import { REGISTER_ELEMENTS } from '../../patterns/screenplay/pageobjects/register.elements';

const mock = RequestMock()
    .onRequestTo({ url: 'http://localhost:8080/animal', method: 'OPTIONS'})
    .respond((req, res) => {
        res.headers["access-control-allow-origin"] = "*";
        res.headers["access-control-allow-headers"] = "content-type";
        res.headers["access-control-allow-methods"] = "GET,HEAD,PUT,PATCH,POST,DELETE";
        res.statusCode = 204;
    })
    .onRequestTo({ url: 'http://localhost:8080/animal', method: 'POST'})
    .respond((req, res) => {
        res.headers["access-control-allow-origin"] = "*";
        res.headers["content-type"] = "application/json;charset=UTF-8";
        res.statusCode = 201;
        res.setBody = req.body;
    });

fixture('Registration animal')
    .page('http://localhost:3000')
    .requestHooks(mock);

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