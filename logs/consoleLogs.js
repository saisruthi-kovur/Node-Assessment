import  error from './errorJson'
exports.getPostsLogs = (err) =>{
    console.log("Failed to get the posts that are requested." + err);
}

exports.postPostsLogs = (err) =>{
    console.log("Failed to create the post." + err);
}

exports.updatePostsLogs = (err) =>{
    console.log("Failed to update the post." + err);
}

exports.deletePostsLogs = (err) =>{
    console.log("Failed to delete the post." + err);
}

exports.sortPostsLogs = (err) =>{
    console.log("Failed to sort the posts." + err);
}

exports.gettingPostsLogs = (err) =>{
    console.log("Failed to get the posts by pinned value." + err);
}