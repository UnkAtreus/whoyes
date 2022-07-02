import { axiosInstance } from "./axios";

interface IPost {
    title: string;
    sexType: string[];
    description: string;
}

const PostService = {
  async list()  {
    const { data } = await axiosInstance.get("/post");

    const $data = data; 

    return $data;
  },

  async create(payload: IPost) {
    const res = await axiosInstance.post("/post", payload);

    return res.data;
  },

  async id(id: string) {
    const { data } = await axiosInstance.get(`/posts/${id}`);

    const $data: any = data;

    return $data;
  },
};

export default PostService;