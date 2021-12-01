
import { Card, CardHeader, CardContent, CardMedia, CardActions, Typography } from "@mui/material";

import logo from "../images/spca-logo.jpg";

const styles = (theme) => ({
    ...theme.spreadThis,
    card: {
        alignItems: 'center'
    }
});

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
                    <Typography>{props.animal.Description}</Typography>
                    <Typography>{props.animal.Sex}</Typography>
                </CardContent>
            </Card>
        </div>
    )
};

export default AnimalCard;