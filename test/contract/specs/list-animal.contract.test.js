import { provider } from "./init-pact";
import { AnimalController } from "../../../controllers";
import { Matchers } from "@pact-foundation/pact";

describe('Given an Animal Service', () => {
    describe('When a request to list all the animals is made', () => {
        beforeAll(async () => {
            await provider.setup();
            await provider.addInteraction({
                state: 'there are animals',
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
                            gender: Matchers.term(
                                {generate:"Female", matcher:"Female|Male"}
                            ),
                            isVaccinated: Matchers.boolean(true),
                            name: Matchers.string("Manchas"),
                            vaccines: Matchers.eachLike("rabia", {min: 1})
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