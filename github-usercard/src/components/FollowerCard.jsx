import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import Avatar from '@material-ui/core/Avatar';


const useStyles = makeStyles({

});

const FollowerCard = props => {
    const classes = useStyles()

    return (
        <Card>
            <CardContent>
                <Avatar src={props.data.avatar_url} />
                <Typography>
                    Username: {props.data.login}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default FollowerCard;