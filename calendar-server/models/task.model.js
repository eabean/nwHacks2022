module.exports = (mongoose) => {
  const Task = mongoose.model(
    "Task",
    mongoose.Schema(
      {
        title: String,
        description: String,
        done: Boolean,
      },
      { timestamps: true }
    )
  )
  return Task
}
