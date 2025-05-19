const putRequest = async (req, res, model) => {
  try {
    const body = req.body;
    const id = req.query.id || req.params.id;
    console.log("ID:", id);

    const updateData = await model.findByIdAndUpdate(id, body, { new: true });
    if (!updateData) {
      return res.status(404).json({ message: "Data not found" });
    }
    console.log("Updated Data:", updateData);

    res.send(updateData);
  } catch (error) {
    console.error("Error updating data!", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
module.exports = putRequest;
