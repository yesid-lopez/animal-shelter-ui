import {Matchers} from '@pact-foundation/pact';
import {AnimalController} from '../../../controllers';
import {provider} from '../config/initPact';

describe('Animal Service', () => {
    describe('When a request to list all animals is made', () => {
        beforeAll(async () => {
            await provider.setup();
            await provider.addInteraction({
                uponReceiving: 'a request to list all animals',
                state: "has animals",
                withRequest: {
                    method: 'GET',
                    path: '/animals'
                },
                willRespondWith: {
                    status: 200,
                    body: Matchers.eachLike(
                        {
                            name: Matchers.like('manchas'),
                            breed: Matchers.like("Bengali"),
                            gender: Matchers.like("Female"),
                            vaccinated: Matchers.boolean(true)
                        }
                    )
                }
            });
        });

        test('should return the correct data', async () => {
            const response = await AnimalController.list();
            expect(response.data).toMatchSnapshot();
            
            await provider.verify()
        });

        afterAll(() => provider.finalize());
    });
});
