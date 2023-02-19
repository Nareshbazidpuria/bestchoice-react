import axios from "axios";
import { BASE_URL } from "../utils/localEnv";

export const handle401 = () => {
  localStorage.clear()
}

export const signUpApi = (payload) => {
  return new Promise((resolve, reject) => {
    axios.post(`${BASE_URL}/pub/signup`, payload).then((response) => {
      if (response?.status === 201) {
        resolve({ success: true, res: response })
      } else {
        resolve({ success: false, res: response })
      }
    }).catch((err) => {
      if (err?.response?.status === 401) {
        handle401()
      }
      resolve({ success: false, res: err?.response })
    })
  })
}

export const loginApi = (payload) => {
  return new Promise((resolve, reject) => {
    axios.post(`${BASE_URL}/pub/login`, payload).then((response) => {
      if (response?.status === 200) {
        resolve({ success: true, res: response })
      } else {
        resolve({ success: false, res: response })
      }
    }).catch((err) => {
      if (err?.response?.status === 401) {
        handle401()
      }
      resolve({ success: false, res: err?.response })
    })
  })
}

export const getProfileApi = (accessToken = localStorage.getItem('accessToken')) => {
  return new Promise((resolve, reject) => {
    axios.get(`${BASE_URL}/api/profile`, {
      headers: {
        'Content-Type': 'application/json',
        'token': accessToken
      },
    }).then((response) => {
      if (response?.status === 200) {
        localStorage.setItem('user', JSON.stringify(response?.data?.data))
        resolve({ success: true, res: response })
      } else {
        resolve({ success: false, res: response })
      }
    }).catch((err) => {
      if (err?.response?.status === 401) {
        handle401()
      }
      resolve({ success: false, res: err?.response })
    })
  })
}