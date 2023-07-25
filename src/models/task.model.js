import mongoose from 'mongoose';

const TaskSchema = new mongoose.Schema(
  {
    taskName: {
      type: String,
      required: true,
    },

    dueDate: {
      type: Date,
      optional: true,
    },

    status: {
      type: String,
      enum: ['incomplete', 'in-progress', 'completed'],
      default: 'incomplete',
      required: true,
    },

    assigneeId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },

    assignedDate: {
      type: Date,
      default: Date.now(),
    },
  },
  {
    timestamps: true,
  },
);

const Task = mongoose.model('Task', TaskSchema);
export default Task;
