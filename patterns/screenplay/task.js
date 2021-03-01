
export default class Task {

    constructor(testController){
        this.testController = testController;
    }

    executeAs(actor) {
        return actor;
    }

}