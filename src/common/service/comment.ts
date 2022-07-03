import { axiosInstance } from "./axios";

interface IComment {
  comment: string;
}

const CommentService = {
  async list(postId: string) {
    const { data } = await axiosInstance.get(`/comment/${postId}`);

    const $data: Array<any> = data;

    return $data;
  },
  async send(payload: IComment, postId: string) {
    const { data } = await axiosInstance.post(`/comment/${postId}`, payload);

    const $data: any = data;

    return $data;
  },
};

export default CommentService;
