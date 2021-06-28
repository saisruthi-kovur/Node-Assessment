import Model from '../models/model';

export const fetchAll = ( next) =>{
    return Model.find({});
}

export const saveNewPosts = (data) =>{
    const post = new Model({
        pinned : data.pinned,
        flag : data.flag,
        isDeleted : "N",
        notes : data.notes,
        createdAt : new Date()
    });
    
    return post.save();

}

export const updatePosts = (post, data) =>{
        post.flag = data.flag;
        post.pinned = data.pinned;
        post.notes = data.notes;
        post.updatedAt= new Date();
        console.log(post);
        return post;
    
}

export const deletePosts = (post) => {
    post.isDeleted = "Y";
    post.deletedAt = new Date();
    return post;
}

export default fetchAll;