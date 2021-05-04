import { getProvider } from "./init-pact";
import { AnimalController } from "../../../controllers";
import { Matchers } from "@pact-foundation/pact";
import {somethingLike} from "@pact-foundation/pact/src/dsl/matchers";

const provider = getProvider();
describe('Given an Animal Service', () => {
    describe('When a request to create a new animal is made', () => {
        beforeAll(async () => {
            await provider.setup();
            await provider.addInteraction({
                state: 'create animal',
                uponReceiving: 'a request to create an animal',
                withRequest: {
                    method: 'POST',
                    path: '/animal'
                },
                willRespondWith: {
                    status: 201,
                    body: Matchers.somethingLike(
                        {
                            breed: Matchers.like("Bengali"),
                            gender: Matchers.like("Female"),
                            name: Matchers.string("Manchas"),
                            vaccinated: Matchers.boolean(true),
                            // maybe vaccines
                        }
                    )
                }
            });
        });

        it("Then it should return the right data", async() => {
            const animalBody = {name: 'My cat', breed: 'Azul Ruso', gender: 'Male', isVaccinated: true, 'vaccines': ['moquillo', 'gripe', 'leucemia']};
            const response = await AnimalController.register(animalBody)
            expect(response.data).toMatchSnapshot();

            await provider.verify();
        });

        afterAll(async () => {
            await provider.finalize();
        });
    });
});
