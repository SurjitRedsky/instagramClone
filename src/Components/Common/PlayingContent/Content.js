import React, { useState, useEffect } from "react";
import "./Content.css";
import ContentHeader from "../ContentHeader";
import ImgTag from "../../ImgTag";
import InputField from "../../InputField";
import AnchorTag from "../../AnchorTag";
import Button from "../../Button";
import { getPosts } from "../../../apiRequests/postApi";
import { commentOnPost } from "../../../apiRequests/commentApi";
import AddCommentForm from "../AddCommentForm";
import ContentModel from "../ContentModel";

const Content = () => {
  const [posts, setPosts] = useState([]);
  const [postCommentBtn, setPostCommentBtn] = useState("");
  const [comment, setComment] = useState("");
  const [authToken, setAuthToken] = useState("");


  //view comment modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  //likes button , share button
  const [likeBtn, setLikesBtn] = useState(
    "../images/inputIcons/blackHeart3.png"
  );

  useEffect(() => {
    setAuthToken(JSON.parse(localStorage.getItem("token")));
    getAllPosts();
  }, []);

  //get all posts
  const getAllPosts = async () => {
    await getPosts()
      .then((response) => setPosts(response.data.data))
      .catch((err) => console.log(err));
  };

  // convert uri image into url
  const convert = (uri) => {
    const encoded = encodeURI(uri.uri);
    return encoded;
  };

  // handle Add comment btn
  const handleCommetBtn = (e, index) => {
    console.log("logggg",e,index);
    e.target.value.length > 0 
      ? setPostCommentBtn(e.target.id)
      : setPostCommentBtn("");





    // const items =[...posts]
// setCurrentIndex(e.target.id)
    // items[index]= e.target.value
    setComment(e.target.value);
  };




  // send comment data to server
  const addComment = async (data) => {
    await commentOnPost(data, authToken)
      .then((response) => console.log(response.data))
      .catch((err) => console.log(err));
  };

  // handle post comment
  const handleAddComment = (id) => {
    const commentData = {
      postId: id,
      text: comment,
    };
    console.log("comment", commentData);
    addComment(commentData);
  };

  //change like button
  const clickLike = () => {
    setLikesBtn("../images/inputIcons/redHeart.png");
  };
  // console.log("post->",posts);

  const handleOpenModal=()=>{
setIsModalOpen(true)
  }
  const handleCloseModal=()=>{
setIsModalOpen(false)
  }




  return (
    <div className="postList">
      {posts.map((post, index) => {
        return (
          <div className="playingContent" key={index}>
            {/* content header */}
            <div className="contentHeader">
              <ContentHeader
                data={{
                  userName: post.userName,
                  profileImage: post.profileImage,
                }}
              />
            </div>

            {/* post */}
            <div className="content">
              <ImgTag src={convert(post?.media[0]?.url)} alt={"images"} />
            </div>

            {/* post icons  */}
            <div className="filedIcons">
              <div className="LikeShare">
                <Button
                  text={
                    <ImgTag
                      // src={'../images/inputIcons/blackHeart3.png'}
                      src={likeBtn}
                      width={23}
                      height={20}
                    />
                  }
                  onclick={clickLike}
                />

                <Button
                  text={
                    <ImgTag
                      src={"../images/inputIcons/blackIconMessage.png"}
                      width={20}
                      height={20}
                    />
                  }
                />

                <Button
                  text={
                    <ImgTag
                      src={"../images/inputIcons/shareBlackIcon3.png"}
                      width={22}
                      height={20}
                    />
                  }
                />
              </div>
              <div className="saveContent">
                <ImgTag
                  src={"../images/inputIcons/saveBlackIcon3.png"}
                  width={17}
                  height={20}
                />
              </div>
            </div>

            {/* post description */}
            <div className="contentDescription">
              <div className="likesOnPost">
                <span>{post.likes.users.length} likes</span>
              </div>
              <div className="postDescription">
                <p>
                  <span>{post.userName} </span> {post.content}
                </p>
              </div>
              <div className="viewComments">
                {post.comments.map((comment, index) => {
                  return (
                    <div key={index}>
                      <span> {comment.text} </span>
                    </div>
                  );
                })}
                <div className="viewComments" onClick={openModal}>
                {/* <AnchorTag href={"*"} text={`View all ${post?.comments?.length} comments`} /> */}

<span>{`View all ${post?.comments?.length} comments`}</span>
               


              </div>
              <ContentModel >
<h2>Hello</h2>
</ContentModel>

              <div className="addComments">
              <form
                  className="addCommentForm"
                  // onSubmit={()=>{handleAddComment(post._id)}}
                >
                  <input
                    type="text"
                    placeholder="Add a comment... "
                    onChange={(e)=>handleCommetBtn(e,index)}
                    name="addComment"
                    id={index}
                  />
                  {
                    console.log("values->",index,postCommentBtn)
                  }
                  {
            postCommentBtn == index ? <Button text={"Post"}  onclick={(e)=>{handleAddComment(post._id)}}  />:"" }
                  <ImgTag
                    src={"../images/inputIcons/blackIconComment.png"}
                    width={10}
                  />
                </form>







                {/* <AddCommentForm
                  handleAddComment={handleAddComment}
                  handleCommetBtn={(e)=>handleCommetBtn(e,index)}
                  postCommentBtn={postCommentBtn}
                  postId={post._id}
                  index={index}
                  currentIndex={currentIndex}
                /> */}
              </div>
            </div>
   
          </div>
       
       
          );
      })}
    </div>
  );
};

export default Content;
