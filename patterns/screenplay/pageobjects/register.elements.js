import { Selector } from 'testcafe';

export const REGISTER_ELEMENTS = {
    registerTitle: Selector('.MuiTypography-root').withText('Registro de Gatos'),
    petNameField: Selector('#pet-name'),
    simpleSelectBreed: Selector("#demo-simple-select"),
    catBreed: Selector(`[data-value="Azul Ruso"]`),
    femaleOption: Selector('[value="Female"]'),
    checkboxTerms: Selector(`span`).withText("Acepto términos y condiciones"),
    submitButton: Selector(`button[type="submit"]`),
    animalCard: Selector('.MuiTypography-root').withText('Garfield')

}