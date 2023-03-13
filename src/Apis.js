import axios from "axios";

const ApiConf = axios.create({
                                baseURL: 'https://api.unsplash.com/search/',
                                headers: {
                                    'Authorization' : 'Client-ID _kibIvmTnOhCMXbkmeC1lNoeohP3v4Squqybmy0EWSY' 
                                }
                            })

export const getImage = async (search) => {
    // console.log("Config", ApiConf)
   const res = await ApiConf.get('photos', {params: {query: search}})
   
   return res.data;
}