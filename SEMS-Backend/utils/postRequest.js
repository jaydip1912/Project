const postRequest = async (req, res, model) => {
  try {
    const body = req.body;
    const newData = new model(body);
    const savedData = await newData.save();
    res.status(201).json(savedData);
  } catch (error) {
    console.error("Error fetching data:", data);
    res.status(500).json({ message: "internal server error" });
  }
};

module.exports = postRequest;
