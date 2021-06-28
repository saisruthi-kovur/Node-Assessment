import successResponse from '../logs/successJson';
import fs from 'fs'

export const responseServices = (notes, msg, res, next)=>{
    res.status(201).json(successResponse(notes, msg));
}

export default responseServices;