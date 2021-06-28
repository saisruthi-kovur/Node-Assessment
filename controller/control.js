import Model from '../models/model';
import * as consoleLogs from '../logs/consoleLogs';
import fs from 'fs';
import error from '../logs/errorJson';
import successResponse from '../logs/successJson';
import * as config from '../configurations/configs';
import * as responseServices from '../services/responseServices';
import * as dbServices from '../services/dbServices';

exports.getPost = (req, res, next) =>{
    try{
        dbServices.fetchAll().then(notes => {responseServices.responseServices(notes,"got posts",res);
        fs.appendFile("logs.txt", "{"+ req.url +" " + req.method +"}\n", () =>{console.log("success");});
        })
        .catch(err => {
            res.json(error);
            consoleLogs.getPostsLogs(err)
        });
    }
    catch(err){
        res.send(err);
    }  
}

exports.postPost = (req,res,next) =>{
    const pinned = req.body.pinned;
    const flag = req.body.flag;
    const isDeleted = "N";
    const notes = req.body.notes;
    try{
    if(!(flag=="info" || flag == "war" || flag == "err")){
        throw config.INVALID_FLAG;
    } 
    else if(!(pinned == 0 || pinned == 1)){
        throw config.INVALID_PINNED;
    }
    else{
        dbServices.saveNewPosts(req.body)
        .then(post =>{
            responseServices.responseServices(post, "Post created", res);    
            fs.appendFile("logs.txt", "{"+ req.url +" " + req.method +"}\n", () =>{console.log("success");});       
        })
        .catch(err => {
            res.json(error);
            consoleLogs.postPostsLogs(err);
        });
    }
    }
    catch(err){
        res.send(err);
    }

}

exports.updatePost = (req,res,next) => {
    try{
        const id = req.params.postId;
        const updatedPinned = req.body.pinned;
        const updatedFlag = req.body.flag;
        const updatedNotes = req.body.notes;
        if(!(updatedFlag=="info" || updatedFlag == "war" || updatedFlag == "err")){
            throw config.INVALID_FLAG;
        } 
        else if(!(updatedPinned == 0 || updatedPinned == 1)){
            throw config.INVALID_PINNED;
        }
        else{
            Model.findById(id)
            .then(post => {
                dbServices.updatePosts(post, req.body).save();
                responseServices.responseServices(post, "Post updated", res);    
                fs.appendFile("logs.txt", "{"+ req.url +" " + req.method +"}\n", () =>{console.log("success"); 
                })
            })
            .catch(err => {
                res.json(error);
                consoleLogs.updatePostsLogs(err);
            });
        }
    }
    catch(err){
        res.send(err);
    }
    
    
}

exports.deletePost = (req,res,next) => {
    try {
        const postId = req.params.postId;
        Model.findById(postId)
        .then(post => {
            dbServices.deletePosts(post).save();
            responseServices.responseServices(post, "Post deleted", res);
            fs.appendFile("logs.txt", "{"+ req.url +" " + req.method +"}\n", () =>{console.log("success");})
        })
        .catch(err => {
            res.json(error);
            consoleLogs.deletePostsLogs(err);
        });
    }
    catch(err){
        res.send(err);
    }  
}

exports.sortPosts = (req,res,next) =>{
    Model.find({})
    .sort({pinned:-1})
    .then(posts => {
        res.status(201).json(successResponse(posts,"Posts sorted")); 
        fs.appendFile("logs.txt", "{"+ req.url +" " + req.method +"}\n", () =>{console.log("success");});
    })
    .catch(err =>{
        res.json(error);
        consoleLogs.sortPostsLogs(err);
    });
    
}

exports.gettingPosts = (req,res,next) =>{
    const value = req.params.value;
    Model.find({pinned:value})
    .then(posts =>{
        res.status(201).json(successResponse(posts,"Got the posts"));
        fs.appendFile("logs.txt", "{"+ req.url +" " + req.method +"}\n", () =>{console.log("success");})
    })
    .catch(err =>{
        res.json(error);
        consoleLogs.gettingPostsLogs(err);
    });
    
}