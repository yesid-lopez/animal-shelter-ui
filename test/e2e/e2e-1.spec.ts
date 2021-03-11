import { Selector } from 'testcafe';

fixture.skip('Registration animal')
    .page('https://animal-shelter-ui.herokuapp.com')

test('Enter register page', async testController => {
    let registerSelector = Selector('a').nth(0);
    registerSelector = Selector('a').withText('Register animal');
    const registerTitle = Selector('.MuiTypography-root');

    await testController.expect(registerSelector.visible).ok();

    await testController.expect(registerSelector.innerText).eql('Register animal');

    await testController.click(registerSelector);

    await testController.expect(registerTitle.visible).ok();

});