import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:4000" });


export const commentOnPost = (data, token) => {
  return API.post(`/comment/${data.postId}`, { text: data.text }, { headers: { "Authorization": `${token}` } })
}

// const { text } = req.body;
// 		const postId = req.params.postId;
// 		const comment = new CommentModel({
// 			postId: postId,
// 			commentedBy: userId,
// 			text: text,
// 		});
