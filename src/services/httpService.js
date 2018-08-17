import axios from "axios";
import { toast } from "react-toastify";
import logger from "./logService";

axios.interceptors.response.use(null, error => {
  if (
    !(
      error.response &&
      error.response.status >= 400 &&
      error.response.status < 500
    )
  ) {
    toast.error("An unexcepted error occured!");
    logger.log(error);
  }
  return Promise.reject(error);
});

export default {
  get: axios.get,
  post: axios.post,
  delete: axios.delete,
  put: axios.put,
  create: axios.create
};
