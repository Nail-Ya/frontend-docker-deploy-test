import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import config from "config";
import { getRefreshToken, getToken, removeRefreshToken, removeToken, setRefreshToken, setToken } from "./localStorage";

export const baseURL = `${config.service.BASE_URL}:${config.service.REACT_APP_BASE_PORT}/api/v1`;

const axiosRequests = axios.create({
  baseURL,
});

axiosRequests.interceptors.request.use(
  (config) => {
    const authToken = getToken();
    if (authToken) {
      config.headers = {
        Authorization: `JWT ${authToken}`,
      };
    }
    return config;
  },
  (error) => Promise.reject(error),
);

// const handleResponse = (response: AxiosResponse) => {
//   return response.data;
// }
const handleResponse = (response: AxiosResponse) => {
  console.log('response', response)
  return response.data;
  // return {
  //   data: response.data
  // }
}


let _refreshAccessToken: Promise<void> | null = null;
const authUrl = `${baseURL}/auth/refresh` ?? "";

export const refreshToken = async () => {
  const rToken = getRefreshToken() ?? "";

  if (_refreshAccessToken) {
    await _refreshAccessToken;
  } else {
    _refreshAccessToken = new Promise<void>((resolve, reject) => {
      (async () => {
        try {
          const response = await axios.post(authUrl, {refresh_token: rToken});
          const tokenData = response.data;
          if (response.status === 200) {
            setToken(tokenData['token']);
            setRefreshToken(tokenData['refresh_token']);
            _refreshAccessToken = null;
            resolve();
          } else {
            _refreshAccessToken = null;
            reject(new Error());
          }
        } catch (error) {
          console.log('error', error)
          reject(error);
        }
      })();
    });
    await _refreshAccessToken;
  }
};

const handleError = async (error: Error) => {
  if (axios.isAxiosError(error) && !!error.response && !!error.config) {
    const { status } = error.response;
    if (status === 401) {
      const rToken = getRefreshToken();
      if (rToken) {
        try {
          await refreshToken();
          return await axiosRequests.request(error.config);
        } catch (e) {
          removeToken();
          removeRefreshToken();
          window.location.href = "/login";
        }
      } else {
        removeToken();
        removeRefreshToken();
        window.location.href = "/login";
      }
    } else {
      console.info("error", error);
      const errorMessage = (error.response.data['non_field_errors'] ?? []).join(' ');
      throw new Error(errorMessage ?? error.message);
    }
  }
};

axiosRequests.interceptors.response.use(handleResponse, handleError);

const getRequest = async (url: string, config?: AxiosRequestConfig): Promise<any> => {
  return await axiosRequests.get(url, config);
};

const postRequest = async (url: string, payload?: object, config?: AxiosRequestConfig) => {
  return await axiosRequests.post(url, payload, config);
};

const putRequest = async (url: string, payload: object) => {
  return await axiosRequests.put(url, payload);
};

const patchRequest = async (url: string, payload?: object) => {
  return await axiosRequests.patch(url, payload);
};

const deleteRequest = async (url: string) => {
  return await axiosRequests.delete(url);
};

export { getRequest, postRequest, putRequest, patchRequest, deleteRequest };
