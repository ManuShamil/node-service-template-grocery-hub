const mongoose = require('mongoose')

const Schema = mongoose.Schema

mongoose.set('useFindAndModify', false);

const TemplateSchema = new Schema({
    templateID: { type: Number, unique: true},
    templateName: { type: String, required: true}
})

module.exports = mongoose.model("template", TemplateSchema);