import faker from 'faker';
import { Selector } from 'testcafe';

fixture("Register")
    .page("https://animal-shelter-ui.herokuapp.com/");


const cat = {
    name: `Mr. ${faker.random.words(2)}`,
    breed: "Birmano"

}

test("Verify that an animal is created successfully", async testController => {
    // Clicks on the register animal button
    await testController.click(Selector('a[href="/animal/register"]'));
    // register animal process
    await testController.typeText(Selector('#pet-name'), cat.name);
    await testController.click(Selector("#demo-simple-select"))
        .click(Selector(`[data-value="${cat.breed}"]`));
    await testController.click(Selector('[value="Male"]'))
    await testController.click(Selector(`span`).withText("Moquillo"));
    await testController.click(Selector(`span`).withText("Peritonitis Infecciosa Felina"));
    await testController.click(Selector(`span`).withText("Ninguna"));
    await testController.click(Selector(`span`).withText("Acepto términos y condiciones"));
    await testController.click(Selector(`button[type="submit"]`));


    //Verify that the animal has been created
    const createdAnimal = Selector("h2").withText(cat.name);
    await testController.expect(createdAnimal.exists).ok();
    await testController.expect(createdAnimal.visible).ok();
    
}).before(async (testController) => {
    await testController.wait(500); //en caso de que la página no haya cargado toda
});