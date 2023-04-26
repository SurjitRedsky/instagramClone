import React, { useState } from 'react'
import ImgTag from '../../ImgTag';
import ContentHeader from '../ContentHeader';
import CommentModal from '../ContentModal/CommentModal';
import Button from '../../Button';
import { commentOnPost } from '../../../apiRequests/commentApi'

export default function Post({ post, authToken, onPressItem }) {

    const [comment, setComment] = useState('');

    //likes button , share button
    const [likeBtn, setLikesBtn] = useState("../images/inputIcons/blackHeart3.png")

    // convert uri
    const convert = (url) => {
        if(url.uri){
            const encoded = encodeURI(url.uri);
            return encoded    
        }else{
            return url
        }
    };

    // handle Add comment
    const handleCommetBtn = (e, index) => {
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
        addComment(commentData);
    };


    //change like button
    const clickLike = () => {
        setLikesBtn("../images/inputIcons/redHeart.png")
    }


    //handleOpen modal

    return (
        <div className="playingContent">
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

                    <Button text={<ImgTag
                        src={likeBtn}
                        width={23}
                        height={20}
                    />} onclick={clickLike} />

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
                <div className="viewComments" >
                    {post.comments.map((comment, index) => {
                        return (
                            <div key={index}>
                                <span> {comment.text} </span>
                            </div>
                        );
                    })}
                    <div className="viewComments" onClick={() => onPressItem(post)}>
                        <span>{`View all ${post?.comments?.length} comments`}</span>
                    </div>

                    <div className="addComments">
                        <form
                            className="addCommentForm"
                        >
                            <input
                                type="text"
                                placeholder="Add a comment... "
                                onChange={(e) => handleCommetBtn(e)}
                                name="addComment"
                                value={comment}

                            />
                            {comment?.length > 0 ? (
                                <Button text={'Post'} onclick={(e) => handleAddComment(post._id)} />
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
        </div>
    )
}
