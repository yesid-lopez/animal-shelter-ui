const {Pact, Matchers} = require('@pact-foundation/pact');
const path = require('path');
const {AnimalController} = require('../../../controllers/AnimalsController');

const provider = new Pact({
    consumer: 'AnimalShelterFront',
    provider: 'AnimalShelterBack',
    port: 8080,
    cors: true,
    log: path.resolve(process.cwd(), './test/contract/logs', 'pact.log'),
    dir: path.resolve(process.cwd(), './test/contract/pacts'),
    logLevel: 'INFO'
});

describe('Animal Service', () => {
    describe('When a request to list all animals is made', () => {
        beforeAll(() => provider.setup().then(() => {
            provider.addInteraction({
                uponReceiving: 'a request to list all animals',
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
                            gender: Matchers.term(
                                {generate: "Female", matcher: "Female|Male"}
                            ),
                            isVaccinated: Matchers.boolean(true),
                            vaccines: Matchers.eachLike(
                                [
                                    "rabia", "leucemia", "parvovirus"
                                ],
                                {min: 1}
                            )
                        },
                        {min: 2}
                    )
                }
            });
        }));

        test('should return the correct data', async () => {
            const response = await AnimalController.list();
            expect(response.data[0].name).toBe('manchas');
            expect(response.data[0].breed).toBe('Bengali');
        });

        afterEach(() => provider.verify());
        afterAll(() => provider.finalize());
    });
});
