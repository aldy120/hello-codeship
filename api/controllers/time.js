function getTime(req, res) {
  var t = new Date();
  var name = req.swagger.params.name.value;
  var greeting = 'hi, ' + name + '. ' + t.toString();
  res.json(greeting);
}

module.exports = {
  getTime: getTime
}