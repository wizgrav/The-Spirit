module.exports = function (audio) {
  
  var Clubber = require("clubber");

  console.log(audio);
  var clubber = new Clubber({thresholdFactor:0, size: 4096, mute:false});
  clubber.listen(audio);
  
  var smoothArray = [0.2, 0.2, 0.2, 0.2];

  var bands = [
    clubber.band({from:1, to:32, smooth: smoothArray }),
    clubber.band({from:32, to:48, smooth: smoothArray }),
    clubber.band({from:48, to:64, smooth: smoothArray }),
    clubber.band({from:64, to:96, smooth: smoothArray })
  ];

  return function () {
    clubber.update();
    var ret = {};
    bands.forEach(function (b,i) {
      var s = ["low", "mid", "high", "ultra"][i];
      ret[s] = b();
    });
    return ret;
  }

}