const {Publisher} = require("@pact-foundation/pact")
const dotenv = require('dotenv');
dotenv.config();

const opts = {
    pactBroker: process.env.PACT_BROKER_BASE_URL,
    pactBrokerToken: process.env.PACT_BROKER_TOKEN,
    consumerVersion: process.env.npm_package_version,
    pactFilesOrDirs: ['./test/contract/pacts']
};

new Publisher(opts).publishPacts();
