const {Publisher} = require("@pact-foundation/pact")
const dotenv = require('dotenv');
dotenv.config();

const opts = {
    pactBroker: process.env.PACT_BROKER_BASE_URL,
    pactBrokerToken: process.env.PACT_BROKER_TOKEN,
    consumerVersion: process.env.GIT_COMMIT,
    pactFilesOrDirs: ['./test/contract/pacts']
};
console.log("🚀 ~ file: publish.js ~ line 11 ~ process.env.GIT_COMMIT", process.env.GIT_COMMIT)
console.log("🚀 ~ file: publish.js ~ line 11 ~ process.env.PACT_BROKER_TOKEN", process.env.PACT_BROKER_TOKEN || "empty")
console.log("🚀 ~ file: publish.js ~ line 11 ~ process.env.PACT_BROKER_BASE_URL", process.env.PACT_BROKER_BASE_URL || "empty")

new Publisher(opts).publishPacts();
