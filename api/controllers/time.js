var moment = require('moment-timezone');
moment().tz("America/Los_Angeles").format();

function getTime(req, res) {
  var t = new Date();
  var timezone = req.swagger.params.timezone.value;
  var message = timezone ? moment().tz(timezone).format() : moment().format();
  res.json(message);
}

module.exports = {
  getTime: getTime
}