var express = require('express');
var router = express.Router();

/* GET api listing. */
router.get('/version', function(req, res, next) {
  res.send({ 'version': '1.0.0' });
});

router.get('/echo', function(req, res, next) {
  res.send({ 'name': req.query.name });
});

router.get('/sum', function(req, res, next) {
  let a = req.query.a;
  let aInt = parseInt(a);
  let b = req.query.b;
  let bInt = parseInt(b);
  let c = aInt+bInt;
  res.send({ 'sum': c, huo: aInt+bInt });//にょかぜ 'sum': c, sum: c てき(かんおん)わ、えうもんだい。
});

router.post('/huo', (req, res) => {
  // 獲取、請求体、中的、数据。
  // かくしゅ、せいきゅうてい、ちゅうてき、すきょ。
  let data = req.body;//Assignment or "the same"?
  let aInt;//declaration
  let bInt;
  // 仮設、我們、想将、文本参数、転換為、整数。
  // かせつ、がもん(ごおん)、そう(ごおん)しょう、ぶんほんさんす、てんかんい、せいす。
  if(data.a) {
      aInt = parseInt(data.a);
      //let aInt = parseInt(req.body.a);//local var, block scope!!!
      if (isNaN(aInt)) {
        // aInt非数
        res.status(400).send('Invalid input for a');
        return;
      }
  }
  
  if(data.b) {
      bInt = parseInt(data.b);
      if (isNaN(bInt)) {
        // bInt非数
        res.status(400).send('Invalid input for b');
        return;
      }
  }
  
  data.result = aInt+bInt;
  delete data.a;
  delete data.b;
  // 発送響應
  // はつそうきょうおう(ごおん)
  res.send(data);
});
module.exports = router;
