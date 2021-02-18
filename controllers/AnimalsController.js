import axios from 'axios';

export const AnimalController = {
    async list() {
        return await axios.get('http://localhost:8080/animals');
    }
}

