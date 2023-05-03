import SelectPost from "../../CreatePost/SelectPost";
import { makeStyles } from "@mui/styles";
import { Modal } from "react-bootstrap";
import "./Content.css";
import "bootstrap/dist/css/bootstrap.min.css";


function PostModal({ post, isOpen, handleClose, postList, isClose }) {
  const classes = useStyles();

  // convert uri
  const convert = (url) => {
    if (url.uri) {
      const encoded = encodeURI(url.uri);
      return encoded;
    }
    return url;
  };
  if (post) {
    const filterPost = postList.filter((item) => post._id == item._id);
    return (
      <div>
        <Modal show={isOpen} className={classes.contentBox}>
          <div>
            <button className={classes.innerBox1} onClick={handleClose}>
              Cancel
            </button>
          </div>

          <div className={classes.containerBox}>
            <SelectPost />
            {/* <div>
              <ImgTag src={"http://localhost:4000/1682584298443.jpeg"} />
            </div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            {/* </Modal.Body> */}
          </div>
        </Modal>
      </div>
      // <Dialog open={isOpen} maxWidth={"lg"}>
      //   <IconButton onClick={handleClose} className={classes.closeBtn}>
      //     <CloseIcon className={classes.root} />
      //   </IconButton>
      //   <DialogContent className={classes.contentBox}>
      //     <Container className={classes.containerBox}>
      //       <Box className={classes.innerBox1}>
      //         <ImgTag
      //           src={convert(filterPost[0]?.media[0]?.url)}
      //           alt={"images"}
      //           width={550}
      //         />
      //       </Box>
      //       <Box className={classes.innerBox2}>
      //         <Post  post={post}/>
      //       </Box>
      //     </Container>
      //   </DialogContent>
      // </Dialog>
    );
  }
  return null;
}

export default PostModal;

const useStyles = makeStyles(() => ({
  contentBox: {
    display: "flex",
    marginTop: "20px",
    padding: 0,
  },

  containerBox: {
    padding: 0,
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
    width: "100%",
    overflow: "hidden",
    height: "60vh",
  },

  innerBox1: {
    backgroundColor: "green",
    objectFit: "cover",
    position: "absolute",
    right: "-400px",
  },
  innerBox2: { backgroundColor: "grey" },
}));
