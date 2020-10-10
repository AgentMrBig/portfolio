
import React from 'react';
import {makeStyles} from '@material-ui/styles';
import {Grid, Paper} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    grid: {
        width: '100%',
        margin: '0px'
    },
    paper:{
        padding: '10px',
        textAlign: 'center',
        color: 'lightBlue',
        marginTop: '5px',
        backgroundImage: 'linear-gradient(180deg, #fdfcfb 0%, #e2d1c3 100%)',
    }
}));

export default function Grid1(){
    const classes = useStyles();

    return(
        <Grid container spacing={1} className={classes.grid}>
            
            <Grid item xs={12} md={6}>
                <Paper className={classes.paper}>1</Paper>
            </Grid>
            <Grid item xs={12} md={6}>
                <Paper className={classes.paper}>2</Paper>
            </Grid>
        </Grid>
    )
}