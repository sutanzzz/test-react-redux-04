import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button'; 
import Grid from '@material-ui/core/Grid';

// const style =  {
//     root : {
//         flexgrow: 1,
//     },
//     appbar: {
//         alignItems: 'center',
//     }
// };

export default props => {
    return (
        <AppBar position="static" style={{ backgroundColor: '#000'}}>
          <Toolbar>
              <Grid
                justify = "space-between"
                container 
                spacing = {24}
                >
                <Grid Item xs={3}>
                    <Typography variant="headline" color="inherit"
                    >
                        Uber  
                    </Typography>
                </Grid>

                <Grid Item xs={6}>
                    <div>
                        <Button color="inherit">Mengemudi</Button>
                        <Button color="inherit">Lakukan Perjalanan</Button>
                        <Button color="inherit">Uber fro Business</Button>
                        <Button color="inherit">Lebih Lanjut</Button>
                    </div>
                </Grid>

                <Grid Item xs={2}>
                    <div>
                        <Button color="inherit">Masuk</Button>
                        <Button color="inherit">Daftar</Button>
                    </div>
                </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
    );
  }





