import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const donate = createAsyncThunk('donate', async (info) => {
    let { token, order } = info
    try {
        const response = await axios.post(`https://minga-back-x6d3.onrender.com/donate/create-order${order}`, {}, {
                headers: {Authorization:'Bearer ' + token}
            })
            console.log('Order created:', response.data)
        return response.data
    } catch (error) {
        console.log(error.response.data)
        return { error: error.response.data }
    }
})

export default donate