const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
  task: { type: String, required: true, maxLength: 120 },
  author: { type: String, required: true, maxLength: 30 },
  created_at: { type: Date, default: Date.now },
});

TaskSchema.methods.getFormattedDate = function () {
  return this.created_at.toString().split(' ').slice(0, 4).join(' ');
};
TaskSchema.methods.getURL = function () {
  return `/post/${this.id}`;
};

module.exports = mongoose.model('Task', TaskSchema);
