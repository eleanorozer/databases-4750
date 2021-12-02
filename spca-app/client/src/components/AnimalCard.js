
import { Card, CardHeader, CardContent, CardMedia, CardActions, Typography } from '@mui/material';

import logo from "../images/spca-logo.jpg";


function AnimalCard(props) {
    return (
        <div>
            <Card
                variant="outlined"
                style={{
                    width: 200,
                    // marginLeft: 50,
                    // marginTop: 50,
                    marginBottom: 10
                }}
            >
                <CardHeader title={props.animal.Name} />
                {/* <CardMedia
                    imageUrl={props.animal.photo_url}
                    height="100" /> */}
                <img src={props.animal.photo_url} width={250} padding="50px auto 50px"/> 
                <CardContent>
                    <Typography variant='body2'>{"Breed: " + props.animal.Breed}</Typography>
                    <Typography variant='body2'>{"Sex: " + props.animal.Sex}</Typography>
                    {/* <Typography variant='body1'>{"Description: " + props.animal.Description}</Typography> */}
                </CardContent>
            </Card>
        </div>
    )
};

export default AnimalCard;