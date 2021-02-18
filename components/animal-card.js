import { faHeart, faMars, faVenus, faVirus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { VaccineList } from './vaccines-list';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
});

export const AnimalCard = ({ name, breed, gender, isVaccinated, vaccines }) => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="140"
                    image="/img/cat.png"
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Grid container spacing={3}>
                        <Grid item xs={8}>
                            <Typography gutterBottom variant="h5" component="h2">
                                {name} • {breed}
                            </Typography>
                        </Grid>
                        <Grid item xs={2}>
                            {gender == "Male" ? <FontAwesomeIcon icon={faMars} /> : <FontAwesomeIcon icon={faVenus} />}
                        </Grid>
                        <Grid item xs={2}>
                            {isVaccinated ? <FontAwesomeIcon icon={faHeart} /> : <FontAwesomeIcon icon={faVirus} />}
                        </Grid>
                    </Grid>
                    <VaccineList vaccines={vaccines} />
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Share
                </Button>
                <Button size="small" color="primary">
                    Learn More
                </Button>
            </CardActions>
        </Card >
    );
}