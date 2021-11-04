const connection = require("./connection");
const { ObjectId } = require("mongodb");

const listAllActivities = async () =>
  connection().then((db) =>
    db
      .collection("activities")
      .find({})
      .toArray()
      .then((result) => result)
  );

const createNewActivity = async (name, description, status) =>
  connection().then((db) =>
    db
      .collection("activities")
      .insertOne({ name, description, status, date: new Date(Date.now()).toISOString() })
      .then((result) => ({ _id: result.insertedId, name, description, status, date: new Date(Date.now()).toISOString() }))
  );

const deleteActivity = async (id) =>
  connection().then((db) =>
    db
      .collection("activities")
      .findOneAndDelete({ _id: new ObjectId(id) })
      .then((result) => result)
  );

const updateActivity = async (id, name, description, status) =>
  connection().then((db) =>
    db
      .collection("activities")
      .findOneAndUpdate(
        { _id: new ObjectId(id) },
        { $set: { name, description, status } },
        { returnOriginal: false }
      )
      .then((result) => result.value)
  );

module.exports = {
  listAllActivities,
  createNewActivity,
  deleteActivity,
  updateActivity,
};
