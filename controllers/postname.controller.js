const PostName = function (req, res) {
    res.status(401).json({ success: req.body.name, data: 'Hello ' + true })
}
module.exports = PostName;
