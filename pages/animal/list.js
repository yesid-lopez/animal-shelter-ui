import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { AnimalCard } from '../../components/animal-card';
import { AnimalController } from '../../controllers';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing(2)
    },
    paper: {
        height: 140,
        width: 100,
    },
    control: {
        padding: theme.spacing(2),
    },
}))

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
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container justify="center" className={classes.root} spacing={2}>
                <Grid item xs={12}>
                    <Grid container justify="center" alignItems="stretch" spacing={2}>
                        {animals?.map(animal => (
                            <Grid key={animal} item xs={4}>
                                <AnimalCard
                                    name={animal.name}
                                    breed={animal.breed}
                                    gender={animal.gender}
                                    isVaccinated={animal.isVaccinated}
                                    vaccines={animal.vaccines}
                                />
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        </div >
    );
}
