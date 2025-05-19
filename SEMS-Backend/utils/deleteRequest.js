const deleteRequest = async (req, res, model) => {
  try {
    const id = req.params.id || req.query.id;
    const deleteData = await model.findByIdAndDelete(id, {
      new: true,
    });
    if (!deleteData) {
      return res.status(404).json({ message: "Data not found" });
    }
    res.json({ message: "Data deleted successfully" });
  } catch (error) {
    console.error("Error deleting data!", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = deleteRequest;
