import { BASE_URL } from "@/utils/helper";
import axios from "axios";
import { useAppSelector } from "./useStore";

const useAxiosPrivate = () => {
  const token = useAppSelector((state) => state.user.token)!;
  const ReQuest = axios.create({
    baseURL: BASE_URL,
    headers: {
      Authorization: `Token ${token}`,
    },
  });
  return ReQuest;
};
export default useAxiosPrivate;
