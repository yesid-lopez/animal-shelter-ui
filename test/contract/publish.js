const { Publisher } = require ("@pact-foundation/pact");
const dotenv = require('dotenv');
dotenv.config();

const opts = {
    pactBroker: process.env.PACT_BROKER_BASE_URL,
    pactBrokerToken: process.env.PACT_BROKER_TOKEN,
    consumerVersion: process.env.PACT_CONSUMER_VERSION,
    pactFilesOrDirs: ['./test/contract/pacts/animalshelterfront-animalshelterback.json']
};

new Publisher(opts).publishPacts();