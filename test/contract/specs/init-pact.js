import { Pact } from "@pact-foundation/pact";
import path from "path";

const consumerName = 'AnimalShelterFront';
const providerName = 'AnimalShelterBack';

export function getProvider() {
    return new Pact({
        consumer: consumerName,
        provider: providerName,
        port: 8090,
        cors: true,
        log: path.resolve(process.cwd(),'./test/contract/logs', `${consumerName}-${providerName}.log`),
        dir: path.resolve(process.cwd(), './test/contract/pacts')
    })
}
