const express = require("express");
const User = require("../models/user");
const router = express.Router();

router.get("/", async (req, res) => {
  const allDbUser = await User.find({});
  return res.json(allDbUser);
});

router
  .route("/:id")
  .get(async (req, res) => {
    const id = req.params.id;
    const allDbUser = await User.find({});
    const user = allDbUser.find((user) => user.id === id);
    return res.json(user);
  })
  .patch(async (req, res) => {
    await User.findByIdAndUpdate(req.params.id, req.body);
  })
  .delete(async (req, res) => {
    await User.findByIdAndDelete(req.params.id);
    return res.json({ status: "deleted successfully" });
  });

router.post("/", async (req, res) => {
  const body = req.body;
  const result = await User.create({
    firstName: body.first_name,
    lastName: body.last_Name,
    email: body.email,
    gender: body.gender,
    jobTitle: body.job_title,
  });
  console.log(result);
  return res.status(201).json({ status: "success" });
});

module.exports = router;
