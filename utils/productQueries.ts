import { notifyError } from "@/components/shared/notify";
import api from "@/lib/api"
import { tProduct } from "@/types";

export const getProduct = async () =>{
    try {
        const response = await api.get("/Sneakers12?join=reviews");
        if(response.data) return response.data as tProduct ;
        return null
    } catch (error) {
        console.log("Error Getting Product Details: " , error)
        notifyError("Error Getting Product Details Data")
        return null;
    }
}