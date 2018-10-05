const GetName = function (req, res) {
    res.status(200).json({ success: true, message: 'Hello ' + req.params.name })
}
module.exports = GetName;
