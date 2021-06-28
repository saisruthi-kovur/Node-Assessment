import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const noteSchema = new Schema({
    pinned :{
        type:Boolean,
        required:true
    },
    flag: {
        type: String,
        require:true
    },
    isDeleted: {
        type:String,
        required: true
    },
    notes: {
        type:String,
        required: true
    },
    createdAt: {
        type:String
    },
    updatedAt: {
        type:String,
    },
    deletedAt: {
        type:String,
    }
});

export default mongoose.model('Assessment', noteSchema);