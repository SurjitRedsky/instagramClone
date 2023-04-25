import { Grid, IconButton } from '@mui/material';
import { makeStyles } from '@mui/styles'

import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import CloseIcon from '@mui/icons-material/Close';
import ImgTag from '../../ImgTag';

function PostModal({ post, isOpen, handleClose, postList }) {
    const classes = useStyles();
    if (post) {

        const i = postList.filter((item) => post._id == item._id)
        console.log("ii->", i);


        return (
            <Dialog
                open={isOpen}
                maxWidth={'lg'}
            >
                <IconButton onClick={handleClose}>
                    <CloseIcon />
                </IconButton>

                <DialogTitle className={classes.title}>

                </DialogTitle>
                <DialogContent>
                    <Grid container spacing={2}>
                        <Grid item xs={8}>
                            {
                                postList.filter((item) => post._id == item._id).map((itm, ind) => {
                                    return (
                                        <h3> {itm.content}  </h3>
                                    )
                                })

                            }

                        </Grid>
                        <Grid item xs={4}>
                            <p>djkfj</p>
                        </Grid>

                    </Grid>
                </DialogContent>

            </Dialog>
        )
    }
    return null
}

export default PostModal

const useStyles = makeStyles(() => ({
    title: {
        color: 'red',
    }
}))