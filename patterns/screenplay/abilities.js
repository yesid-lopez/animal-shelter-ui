import Task from './task';

export class Abilities {

    constructor(actor, testController) {
        this.actor = actor;
        this.testController = testController;
    }

    attempsTo(...tasks) {
        return this.excecutingTasks(tasks);
    }

    wasAbleTo(...tasks) {
        return this.excecutingTasks(tasks);
    }

    should(...tasks) {
        return this.excecutingTasks(tasks);
    }

    excecutingTasks(...tasks) {
        const arrayTasks = tasks.flat();

        arrayTasks.forEach(() => new Task(this.testController).executeAs(this.actor));

        // for (const Task of arrayTasks) {
        // new Task().executaComo(this.agente);
        // }
    }
}

export const given = (actor, testController) => new Abilities(actor, testController);
export const when = (actor, testController) => new Abilities(actor, testController);
export const then = (actor, testController) => new Abilities(actor, testController);
export const and = (actor, testController) => new Abilities(actor, testController);