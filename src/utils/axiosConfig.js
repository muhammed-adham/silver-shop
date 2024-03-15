import axios from "axios";
import Cookies from "js-cookie";
import toast from "react-hot-toast";

const axiosConfig = axios.create({
  baseURL: "https://silver-server.onrender.com",
  withCredentials: true,
});

export const request = ({ ...option }) => {
  // axiosConfig.defaults.headers.common.Authorization = "Bearer token"
  axiosConfig.defaults.headers.common.Accept = "application/json";
  axiosConfig.defaults.headers.common["Content-Type"] = "application/json";
  const onSuccess = (res) => res;
  const onError = (err) => err;
  return axiosConfig(option).then(onSuccess).catch(onError);
};

export const getProducts = async () => {
  return await request({ url: "/products" });
};

export const mainBannerSlides = async () => {
  return await request({ url: "/mainBanner" });
};

export const displaySingleProduct = async (id) => {
  return await request({ url: `/products/${id}` });
};

export const addWishlistConfig = async (item) => {
  return await request({
    url: `/wishlist`,
    method: "post",
    data: { id: item.id, user: Cookies.get('user')},
  });
};

export const displayWishlist = async () => {
  return await request({ url: `/wishlist?user=${Cookies.get('user')}` });
};

export const removeWishlistConfig = async (id) => {
  return await request({ url: `/wishlist/${id}`, method: "delete" });
  // console.log(id);
};

export const addCartlistConfig = async (item) => {
  return await request({
    url: `/cartlist`,
    method: "post",
    data: { id: item.id},
  });
};

export const displayCartlist= async () => {
  return await request({ url: "/cartlist" });
};

export const removeCartlistConfig = async (id) => {
  return await request({ url: `/cartlist/${id}`, method: "delete" });
};


export const registerConfig = async (userData) => {
  return await request({ url: `/users`, method: "post", data: userData }).then(
    (res) => {
      return res.data
        ? (toast.success(`welcome ${res.data.user.name}`),
        Cookies.set('access', res.data.accessToken, { expires: 7, secure: true, sameSite: 'strict'}),
        Cookies.set('user', res.data.user.id, {expires:7, secure: true, sameSite: 'strict'})
        )
        : toast.error(`${res.response.data}`);
    }
  );
};

export const loginConfig = async (userData) => {
  return await request({ url: `/login`, method: "post", data: userData }).then(
    (res) => {
      return res.data
        ? (toast.success(`welcome ${res.data.user.name}`),
        Cookies.set('access', res.data.accessToken, { expires: 7, secure: true, sameSite: 'strict'}),
        Cookies.set('user', res.data.user.id, {expires:7, secure: true, sameSite: 'strict'})
        )
        : toast.error(`${res.response.data}`);
    }
  );
};

export const getCurrentUser = async () => {
  return await request({url: `/users/${Cookies.get('user')}`})
};

export const updateCurrentUser = async (data) =>{
  return await request({url: `/users/2`,  method: "patch",
  data: data}),
  console.log(data);
}