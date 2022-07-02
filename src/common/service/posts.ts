import { axiosInstance } from "./axios";

interface IPost {
    id: number;
    title: string;
}

const PostService = {
  async list()  {
    const { data } = await axiosInstance.get("/posts");

    const $data: Array<any> = data.data; 

    return $data;
  },

  async create(payload: IPost) {
    const res = axiosInstance.post("/posts", payload);

    return res;
  },

  async id(id: string) {
    const { data } = await axiosInstance.get(`/posts/${id}`);

    const $data: any = data.data;

    return $data;
  },
};

export default PostService;