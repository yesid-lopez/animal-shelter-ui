import Grid from '@material-ui/core/List';
import { AnimalCard } from '../../components/animal-card';
import { AnimalController } from '../../controllers';


export async function getStaticProps(context) {
    const res = await AnimalController.list();
    const animals = await res.data;
    if (!animals) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            },
        }
    }

    return {
        props: { animals }
    }
}

export default function ListAnimal({ animals }) {

    return (
        < Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
        >
            {
                animals?.map(animal =>
                    <Grid container xs={12} spacing={3}>
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
