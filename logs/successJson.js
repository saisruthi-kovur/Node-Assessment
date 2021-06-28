export const successResponse = (notes, msg) =>{
    const data = {status: "SUCCESS",
    code: 200,
    message:msg,
    data: notes
    };
    return data;
}

export default successResponse;