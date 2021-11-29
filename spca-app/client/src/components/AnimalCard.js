
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
                <CardMedia
                    component="img"
                    image={logo}
                    height="100" />
                <CardContent>
                    <Typography>{props.animal.Description}</Typography>
                    <Typography>{props.animal.Sex}</Typography>
                </CardContent>
            </Card>
        </div>
    )
};

export default AnimalCard;