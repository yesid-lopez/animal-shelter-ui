import { getProvider } from "./init-pact";
import { AnimalController } from "../../../controllers";
import { Matchers } from "@pact-foundation/pact";
const provider = getProvider();
describe('Given an Animal Service', () => {
    describe('When a request to delete animals is made', () => {
        beforeAll(async () => {
            await provider.setup();
            await provider.addInteraction({
                state: 'delete animal',
                uponReceiving: 'a request to delete an animal',
                withRequest: {
                    method: 'DELETE',
                    path: '/animals/Manchas'
                },
                willRespondWith: {
                    status: 200,
                    body: ''
                }
            });
        });

        it("Then it should return the right data", async() => {
            const response = await AnimalController.delete('Manchas');
            expect(response.data).toMatchSnapshot();

            await provider.verify();
        });

        afterAll(async () => {
            await provider.finalize();
        });
    });
});
