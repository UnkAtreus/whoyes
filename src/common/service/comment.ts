import { axiosInstance } from "./axios";


const CommentService = {
    async list() {
        const { data } = await axiosInstance.get("/comments");

        const $data: Array<any> = data;

        return $data;
    }

}