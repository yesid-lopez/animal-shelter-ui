import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { VaccineList } from './vaccines-list';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles({
    root: {
    },
});

export const AnimalCard = ({ name, breed, gender, isVaccinated, vaccines }) => {
    const classes = useStyles();

    return (
        <Card className={classes.root} data-testid={`${name}-container`}>
            <CardContent>
                <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="140"
                    image="/img/cat.png"
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Grid container spacing={1}>
                        <Grid item xs={8}>
                            <Typography gutterBottom variant="h4" component="h2">
                                {name}
                            </Typography>
                            <Typography gutterBottom variant="h6" component="h2">
                                {breed}
                            </Typography>
                        </Grid>
                        <Grid item xs={2}>
                            {gender == "Male" ?
                                <Avatar
                                    variant="square"
                                    src="/icons/icons8-male-96.png"
                                    style={{ width: "30px", height: "30px" }} />
                                :
                                <Avatar variant="square"
                                    src="/icons/icons8-female-96.png"
                                    style={{ width: "30px", height: "30px" }} />
                            }
                        </Grid>
                        <Grid item xs={2}>
                            {isVaccinated ?
                            <Avatar
                            variant="square"
                            src="/icons/icons8-health-80.png"
                            style={{ width: "30px", height: "30px" }} />
                            : 
                            <Avatar
                            variant="square"
                            src="/icons/icons8-virus-80.png"
                            style={{ width: "30px", height: "30px" }} />
                            }
                        </Grid>
                    </Grid>
                    <VaccineList vaccines={vaccines} />
                </CardContent>
            </CardContent>
        </Card >
    );
}