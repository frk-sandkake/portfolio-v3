/** @format */

import axios from "axios"

export const BASE_URL = "https://api.github.com/users"
export const GET_USER = "frk-sandkake"

export const baseService = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
})
