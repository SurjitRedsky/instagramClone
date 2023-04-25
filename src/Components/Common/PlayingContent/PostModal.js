import { Box, Container, Grid, IconButton, colors } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";

import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import CloseIcon from "@mui/icons-material/Close";
import ImgTag from "../../ImgTag";

import Post from "./Post";

function PostModal({ post, isOpen, handleClose, postList }) {
  const classes = useStyles();

  // convert uri
  const convert = (uri) => {
    const encoded = encodeURI(uri.uri);
    return encoded;
  };
  if (post) {
    // const i = postList.filter((item) => post._id == item._id);
    // console.log("ii->", i);
    const filterPost = postList.filter((item) => post._id == item._id);

    return (
      <Dialog open={isOpen} maxWidth={"lg"}>
        <IconButton onClick={handleClose} className={classes.closeBtn}>
          <CloseIcon className={classes.root} />
        </IconButton>
        <DialogContent className={classes.contentBox}>
          <Container className={classes.containerBox}>
            <Box className={classes.innerBox1}>
              <ImgTag
                src={convert(filterPost[0]?.media[0]?.url)}
                alt={"images"}
                width={550}
              />
            </Box>
            <Box className={classes.innerBox2}>
              <Post  post={post}/>
            </Box>
          </Container>
        </DialogContent>
      </Dialog>
    );
  }
  return null;
}

export default PostModal;

const useStyles = makeStyles(() => ({
  contentBox: {
    backgroundColor: "blue",
    padding: 0,
  },

  containerBox: {
    backgroundColor: "red",
    padding: 0,
    display: "flex",
    justifyContent: "space-between",
    maxWidth: "80vw",
  },

  innerBox1: { backgroundColor: "green", objectFit: "cover" },
  innerBox2: { backgroundColor: "grey" },
}));
