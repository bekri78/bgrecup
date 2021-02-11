import React from 'react'
import { Paper, Card, Typography, makeStyles } from '@material-ui/core'
import ImageSncf from '../logoSncf/logoSncf.png'
import '../logoSncf/StyleLogoSncf.css';



const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: '#fdfdff'
    },
    pageHeader:{
        padding:theme.spacing(4),
        display:'flex',
        marginBottom:theme.spacing(2)
    },
    pageIcon:{
        display:'inline-block',
        padding:theme.spacing(2),
        color:'#3c44b1'
    },
    pageTitle:{
        paddingLeft:theme.spacing(4),
        '& .MuiTypography-subtitle2':{
            opacity:'0.6'
        }
    }
}))

export default function PageHeader(props) {

    const classes = useStyles();
    const { title, subTitle } = props;
    return (
        <Paper elevation={0} square className={classes.root}>
            <div className={classes.pageHeader}>
                { <Card className={classes.pageIcon}>
               <img src={ImageSncf} className="sncf" alt = "logo sncf" />
                </Card> }
                <div className={classes.pageTitle}>
                    <Typography
                        variant="h6"
                        component="div">
                        {title}</Typography>
                    <Typography
                        variant="subtitle2"
                        component="div">
                        {subTitle}</Typography>
                </div>
            </div>
        </Paper>
    )
}
