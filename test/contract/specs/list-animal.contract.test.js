import { getProvider } from "./init-pact";
import { AnimalController } from "../../../controllers";
import { Matchers } from "@pact-foundation/pact";

const provider = getProvider();
describe('Given an Animal Service', () => {
    describe('When a request to list all the animals is made', () => {
        beforeAll(async () => {
            await provider.setup();
            await provider.addInteraction({
                state: 'has animals',
                uponReceiving: 'a request to get all animals',
                withRequest: {
                    method: 'GET',
                    path: '/animals'
                },
                willRespondWith: {
                    status: 200,
                    body: Matchers.eachLike(
                        {
                            breed: Matchers.like("Bengali"),
                            gender: Matchers.like("Female"),
                            name: Matchers.string("Manchas"),
                            vaccinated: Matchers.boolean(true)
                        },
                        {min: 1}
                    )
                }
            });
        });

        it("Then it should return the right data", async() => {
            const response = await AnimalController.list();
            expect(response.data).toMatchSnapshot();

            await provider.verify();
        });

        afterAll(async () => {
            await provider.finalize();
        });
    });
});
