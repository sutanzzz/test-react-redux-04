import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { Grid, CardActionArea, CardContent } from '@material-ui/core';
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';


const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    marginTop: theme.spacing.unit *5,
    padding: `${theme.spacing.unit * 
    3}px`,
    [theme.breakpoints.up('md')]: {
      paddingRight: 0,
  },
  mainFeaturedPostContent: {
    
    },
  },
});

function PaperSheet(props) {
  const { classes } = props;

  return (
    <div>
      <Grid container>
        <Grid item md={5}>
          <Paper className={classes.root} elevation={1}>
            <Typography variant="h3" component="h3">
              Lakukan perjalanan sesuai keingininan anda.
            </Typography>
            <Typography variant="h4">
              Mitra Mengemudi.
            </Typography>
            <Typography component="p">
            Mengemudilah kapan pun Anda mau. Temukan kesempatan di sekitar Anda.
              Pelajari lebih lanjut tentang mengemudi
            </Typography>
            <Button variant="contained" color="primary" size="large" className={classes.button}>
              Daftar menjadi mitra pengemudi 
             </Button>
             <Typography variant="h4">
              Daftar Penumpang.
            </Typography>
            <Typography component="p">
            Sentuh ponsel anda. Capai tujuan anda.
            Pelajari lebih lanjut
            </Typography>
            <Button variant="outlined" size="large" color="primary" className={classes.margin}>
            Daftar Penumpang
            </Button>
          </Paper>
        </Grid>
        <Grid item md>
        <Paper className={classes.root} elevation={1}>
          
          </Paper>
        </Grid>
      </Grid>
    </div>

  );
}

PaperSheet.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PaperSheet);