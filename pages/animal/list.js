import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import useSWR from 'swr';
import { AnimalCard } from '../../components/animal-card';
import { AnimalController } from '../../controllers';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing(2)
    }
}))

export default function ListAnimal({ animals }) {
    const classes = useStyles();
    const { data } = useSWR('/animal', AnimalController.list)
    animals = data?.data;

    return (
        <div className={classes.root}>
            <Grid container justify="center" className={classes.root} spacing={2}>
                <Grid item xs={12}>
                    <Grid container justify="center" alignItems="stretch" spacing={2}>
                        {animals ? animals.map(animal => (
                            <Grid key={animal} item xs={4}>
                                <AnimalCard
                                    name={animal.name}
                                    breed={animal.breed}
                                    gender={animal.gender}
                                    isVaccinated={animal.isVaccinated}
                                    vaccines={animal.vaccines}
                                />
                            </Grid>
                        )) : ""}
                    </Grid>
                </Grid>
            </Grid>
        </div >
    );
}
