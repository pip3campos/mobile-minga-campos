import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const mymangas = createAsyncThunk('mymangas', async (token) => {
    try {
        let { data } = await axios.get("https://minga-back-x6d3.onrender.com/mangas/me", {
            headers: {Authorization:'Bearer ' + token}
        })
        return data
    } catch (error) {
        console.log(error)
        return {
            error
        }
    }
})

export default mymangas