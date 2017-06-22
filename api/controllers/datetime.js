function date(req, res) {
  var date = new Date();
  res.json(date.toString);
}
module.exports = {
  date: date
}