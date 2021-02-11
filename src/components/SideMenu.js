import React from 'react'
import {  withStyles } from "@material-ui/core";
import ImageSvg from '../svgImage/undraw_source_code_xx2e.svg'
import '../svgImage/svg.css'
import Tornado from '../svgImage/Sun-Tornado.svg'

// withStyles & makeStyles

const style = {
    sideMenu: {
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute',
        left: '0px',
        width: '320px',
        height: '100%',
        backgroundImage: `url("${Tornado}")`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
       
 
    },
    
}

const SideMenu = (props) => {
    const { classes } = props;
    return (
        <div className={classes.sideMenu }  >
            <img src={ImageSvg}  className="imagee"alt="React Logo" />
            <h2 className='titre'>Qu'est-ce que le que RBA </h2>
            <p className='text'>Le RBA pour Registre Bande Graphique Acheres est une application web qui  a pour but de centraliser et conserver l'historique des 
                changement de bande graphiques sur le site.<br></br><br></br>
                    Il permet d'effectuer des recherches via le nom, ainsi que d'afficher l'historique croissant ou decroissant des bandes effectuées de l'agent rechercher.
            </p>
            <p className='text'>Cliquez sur le bouton <span className='bleu'>Ajouter</span> pour l'essayer.</p> 
            <div>

            </div>
        </div>
    )
}

export default withStyles(style)(SideMenu);
