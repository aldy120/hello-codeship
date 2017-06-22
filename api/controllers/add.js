var util = require('util');

function add(req, res) {
  var a = req.swagger.params.a.value || 0;
  var b = req.swagger.params.b.value || 0;
  console.log(a, b);
  var ans = `${a} + ${b} = ${a + b}`;
  res.json(ans);
}

module.exports = {
  add: add
};
