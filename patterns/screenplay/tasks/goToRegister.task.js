export class GoToRegister extends Task {

    constructor(){
        super();
    }
    executeAs(actor){
        const registerSelector = Selector('a').withText('Register animal');
        this.testController.click(registerSelector);
        return actor;
    }
}