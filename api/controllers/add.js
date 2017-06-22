var util = require('util');

function add(req, res) {
  var a = req.swagger.params.a.value;
  var b = req.swagger.params.b.value;
  console.log(a, b);
  var ans = util.format('Ans: ', a + b);
  res.json(ans);
}

module.exports = {
  add: add
};
