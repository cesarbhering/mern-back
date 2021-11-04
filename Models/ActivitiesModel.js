const connection = require("./connection");

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

module.exports = {
  listAllActivities,
  createNewActivity
};
