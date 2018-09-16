import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

import { withStyles } from '@material-ui/core/styles'
import Hidden from '@material-ui/core/Hidden'
import Typography from '@material-ui/core/Typography'
import HeroMobile from './HeroMobile'

const styles = theme => ({
  root: {
    height: 300,
    position: 'relative',
    marginTop: 0,
    zIndex: 1,
    [theme.breakpoints.up('sm')]: {
      height: 300,
    },
    [theme.breakpoints.up('md')]: {
      height: 600,
    },
  },
  img: {
    height: 200,
    [theme.breakpoints.up('sm')]: {
      height: 300,
    },
    [theme.breakpoints.up('md')]: {
      height: 600,
    },
  },
  container: {
    position: 'absolute',
    zIndex: 2,
    background: 'none',
    padding: 0,
    left: 15,
    bottom: 15,
    [theme.breakpoints.up('md')]: {
      background: 'none',
      left: 75,
      bottom: 60,
    },
  },
  text: {
    textTransform: 'capitalize',
    letterSpacing: 3,
    fontFamily: "'Contrail One'",
    color: theme.status.black,
  },
})

const Hero = props => {
  const { img, classes } = props

  return (
    <div className={classes.root}>
      <Img fluid={img.node.fluid} alt="" className={classes.img} />
      <Hidden smUp>
        <HeroMobile />
      </Hidden>
      <Hidden xsDown>
        <div className={classes.container}>
          <Typography variant="display4" className={classes.text}>
            Eisbach Riders
          </Typography>
          <Typography variant="display2" className={classes.text}>
            roam, live, relax.
          </Typography>
        </div>
      </Hidden>
    </div>
  )
}

Hero.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Hero)
