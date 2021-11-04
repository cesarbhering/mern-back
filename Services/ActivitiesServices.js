const express = require("express");
const { createNewActivity, listAllActivities, deleteActivity } = require("../Models/ActivitiesModel");

const router = express.Router();

const { validateNewActivity } = require("../Middlewares/ValidateNewActivity");

router.post("/", validateNewActivity, async (req, res) => {
  const { name, description, status } = req.body;
  try {
    const newActivity = await createNewActivity(name, description, status);
    res.status(201).json({
      newActivity,
    });
  } catch (error) {
    res.status(500).json({
      error,
    });
  }
});

router.get("/", async (req, res) => {
  try {
    const allActivities = await listAllActivities();
    res.status(200).json(
      allActivities
    );
  } catch (error) {
    res.status(500).json({
      error,
    });
  }
})

router.delete("/", async (req, res) => { 
  try {
    console.log("cheguei aqui no delete")
    console.log(req.body.id)
    const deletedActivity = await deleteActivity(req.body.id);
    res.status(200).json(
      deletedActivity
    );
  }
  catch (error) {
    res.status(500).json({
      error,
    });
  }
})


module.exports = router;
