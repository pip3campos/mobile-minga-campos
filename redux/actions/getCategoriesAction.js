import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const categ = createAsyncThunk('getCateg', async () => {
    try {
        let { data } = await axios.get('https://minga-back-x6d3.onrender.com/categories')
        console.log(data)
        return data
    } catch (error) {
        console.log(error)
        return {
            error
        }
    }
})

export default categ