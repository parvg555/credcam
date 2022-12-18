import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const ImageSchema = new Schema({
}, { strict: false });
const Images = mongoose.model('Images', ImageSchema, 'images');

export default Images;
