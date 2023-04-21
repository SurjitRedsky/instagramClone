import React, { useState, useEffect } from 'react';
import './Content.css';
import ContentHeader from '../ContentHeader';
import ImgTag from '../../ImgTag';
import InputField from '../../InputField';
import AnchorTag from '../../AnchorTag';
import Button from '../../Button';
import { getPosts } from '../../../apiRequests/postApi';

const Content = () => {
  const [posts, setPosts] = useState([]);
  const [postCommentBtn, setPostCommentBtn] = useState(false);
  const [comment, setComment] = useState('');


  //likes button , share button
  const [likeBtn, setLikesBtn] = useState("../images/inputIcons/blackHeart3.png")

  //get all posts
  const getAllPosts = async () => {
    await getPosts()
      .then((response) => setPosts(response.data.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getAllPosts();
  }, []);

  // convert uri
  const convert = (uri) => {
    const encoded = encodeURI(uri.uri);
    return encoded
  };

  // handle Add comment
  const handleAddCommet = (e) => {
    e.target.value.length > 0
      ? setPostCommentBtn(true)
      : setPostCommentBtn(false);
    setComment(e.target.value);
  };

  // handle post comment
  const handlePostComment = (e) => {
    e.preventDefault();
    console.log('comment', comment);
  };


  //change like button
  const clickLike = () => {
    setLikesBtn("../images/inputIcons/redHeart.png")
  }



  // console.log('posts-->', posts);
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
              <ImgTag src={convert(post?.media[0]?.url)} alt={'images'} />
            </div>

            {/* post icons  */}
            <div className="filedIcons">
              <div className="LikeShare">

                < Button text={<ImgTag
                  // src={'../images/inputIcons/blackHeart3.png'}
                  src={likeBtn}
                  width={23}
                  height={20}
                />} onclick={clickLike} />
                {/* < Button text={
                  <ImgTag
                    src={'../images/inputIcons/blackHeart3.png'}
                    width={23}
                    height={20}
                  />
                } /> */}
                < Button text={
                  <ImgTag
                    src={
                      '../images/inputIcons/blackIconMessage.png'
                    }
                    width={20}
                    height={20}
                  />
                } />

                <Button text={
                  <ImgTag
                    src={
                      '../images/inputIcons/shareBlackIcon3.png'
                    }
                    width={22}
                    height={20}
                  />
                }
                />


              </div>
              <div className="saveContent">
                <ImgTag
                  src={
                    '../images/inputIcons/saveBlackIcon3.png'
                  }
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
                <AnchorTag
                  href={'*'}
                  text={'View all 300 comments'}
                />
              </div>
              <div className="addComments">
                <form
                  className="addCommentForm"
                  onSubmit={handlePostComment}
                >
                  <input
                    type="text"
                    placeholder="Add a comment... "
                    onChange={handleAddCommet}
                    name="addComment"
                    value={comment}
                  />
                  {postCommentBtn ? (
                    <Button text={'Post'} />
                  ) : (
                    ''
                  )}
                  <ImgTag
                    src={
                      '../images/inputIcons/blackIconComment.png'
                    }
                    width={10}
                  />
                </form>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Content;
