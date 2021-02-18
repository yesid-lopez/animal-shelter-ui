import Grid from '@material-ui/core/List';
import { AnimalCard } from '../../components/animal-card';

const animals = [{
    name: "Princesa",
    breed: "Criolla",
    gender: "Female",
    isVaccinated: true,
    vaccines: ["rabia", "leucemia", "parvovirus"]
},
{
    name: "Gus",
    breed: "Criolla",
    gender: "Male",
    isVaccinated: false,
    vaccines: ["rabia", "leucemia", "parvovirus", "Coronavirus"]
}]

export default function ListAnimal() {
    return (
        < Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
        >
            {
                animals.map(animal =>
                    <Grid container item xs={12} spacing={3}>
                        <AnimalCard
                            name={animal.name}
                            breed={animal.breed}
                            gender={animal.gender}
                            isVaccinated={animal.isVaccinated}
                            vaccines={animal.vaccines}
                        />
                    </Grid>)
            }
        </Grid >
    );
}
