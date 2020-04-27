module.exports = async (req, res, next) => {
    console.log(req.file);
    res.json({ success: true });
};
