import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import useSWR from 'swr';
import { AnimalCard } from '../../components/animal-card';
import { AnimalController } from '../../controllers';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing(2)
    }
}))

const AnimalCards = React.memo(({ animalsArray }) => {
    return animalsArray ? animalsArray.map(animal => (
        <Draggable draggableId={animal.name} index={0}>
            {(provided, snapshot) => (
                <div ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}>
                    <Grid key={animal} item xs={4} >
                        <AnimalCard
                            name={animal.name}
                            breed={animal.breed}
                            gender={animal.gender}
                            isVaccinated={animal.isVaccinated}
                            vaccines={animal.vaccines}
                        />
                    </Grid>
                </div>
            )}
        </Draggable>
    )) : ""
});

export default function ListAnimal({ animals }) {
    const classes = useStyles();
    const { data } = useSWR('/animal', AnimalController.list)
    animals = data?.data;

    return (
        <div className={classes.root}>
            <DragDropContext>
                <Grid container justify="center" className={classes.root} spacing={2}>
                    <Droppable>
                        {
                            (provided, snapshots) => (
                                <Grid item xs={12} ref={provided.innerRef} {...provided.droppableProps}>
                                    <Grid container justify="center" alignItems="stretch" spacing={2}>
                                        <AnimalCards animalsArray={animals} />
                                    </Grid>
                                </Grid>
                            )
                        }
                    </Droppable>
                </Grid>
            </DragDropContext>
        </div >
    );
}
