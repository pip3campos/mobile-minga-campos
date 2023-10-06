import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const deleteManga = createAsyncThunk('deleteManga', async (info) => {
    let { token, id } = info
    console.log(token)
    console.log(id)
    try {
        const { data } = await axios.delete(`https://minga-back-x6d3.onrender.com/mangas/${id}`, {
                headers: {Authorization:'Bearer ' + token}
        })
        console.log(data)
        return data.response
    } catch (error) {
        console.log(error)
        return {
            error
        }
    }
})

export default deleteManga