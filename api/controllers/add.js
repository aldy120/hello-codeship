var util = require('util');

function add(req, res) {
  var a = req.swagger.params.a.value || 0;
  var b = req.swagger.params.b.value || 0;
  var sum = a + b;
  res.json(sum.toString());
}

module.exports = {
  add: add
};
