import { axiosInstance } from "./axios";

interface ISignup {
    username: string,
    email: string,
    firstname: string,
    lastname: string,
    birthDate: Date,
    idCard: string,
    tel: string,
    gender: string,
    targetGender: string,
    sexualOrientation: string,
    height: number,
    weight: number,
    penisLenght: number,
    penisGirth: number,
    breastSize: number,
    waistSize: number,
    hipSize: number,
    password: string,
}

const AuthService = {
    async register(payload: Partial<ISignup>) {
        const { data } = await axiosInstance.post("/user/signup", payload);

        const $data: any = data;

        return $data;
    },
    async login(payload: Partial<ISignup>) {
        const { data } = await axiosInstance.post("/auth/login", payload);

        const $data: {access_token: string, user: {}} = data;

        return $data;
    },
    async getById(id: string) {
        const { data } = await axiosInstance.get(`/user/${id}`);
        const $data: any = data;
        return $data;
    },

}

export default AuthService;