const getRequest = async (req, res, model) => {
  try {
    const dataFromDB = await model.find({});
    res.send(dataFromDB);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = getRequest;
