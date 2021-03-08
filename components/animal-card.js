import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { VaccineList } from './vaccines-list';

export const AnimalCard = ({ name, breed, gender, isVaccinated, vaccines }) => {

  return (
    <Card data-testid={`${name}-container`}>
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
              <Typography gutterBottom variant="h4" component="h2" name="name-cat">
                {name}
              </Typography>
              <Typography gutterBottom variant="h6" component="h2" name="breed-cat">
                {breed}
              </Typography>
            </Grid>
            <Grid item xs={2} name="gender-cat">
              {gender == "Male" ?
                <Avatar
                  variant="square"
                  src="/icons/icons8-male-96.png"
                  name="male-icon"
                  style={{ width: "30px", height: "30px" }} />
                :
                <Avatar variant="square"
                  src="/icons/icons8-female-96.png"
                  name="female-icon"
                  style={{ width: "30px", height: "30px" }} />
              }
            </Grid>
            <Grid item xs={2} name="is-vaccinated-cat">
              {isVaccinated ?
                <Avatar
                  variant="square"
                  src="/icons/icons8-health-80.png"
                  name="health-icon"
                  style={{ width: "30px", height: "30px" }} />
                :
                <Avatar
                  variant="square"
                  src="/icons/icons8-virus-80.png"
                  name="unhealthy-icon"
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
