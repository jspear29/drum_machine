let NanoTimer = require('nanotimer');
let timer = new NanoTimer();
let play = require('play');

const ONE_MINUTE = 60000;

const BPM = ONE_MINUTE / 120;
const STEP = BPM / 4;

const TRACK = new Array(16);

const KIT = {
  BD: 'samples/BD/BD2550.WAV',
  SD_LIGHT: 'samples/SD/SD0025.WAV',
  SD_HEAVY: 'samples/SD/SD0075.WAV',
  CH: 'samples/CH/CH.WAV',
  OH: 'samples/OH/OH00.WAV'
}

TRACK[0] = [KIT.BD, KIT.CH];
TRACK[1] = [KIT.CH];
TRACK[2] = [KIT.OH, KIT.CH];
TRACK[3] = [KIT.CH];
TRACK[4] = [KIT.BD, KIT.SD_HEAVY, KIT.CH];
TRACK[5] = [KIT.CH];
TRACK[6] = [KIT.OH, KIT.CH];
TRACK[7] = [KIT.CH, KIT.SD_HEAVY];
TRACK[8] = [KIT.BD, KIT.CH];
TRACK[9] = [KIT.CH];
TRACK[10] = [KIT.OH, KIT.SD_LIGHT, KIT.CH];
TRACK[11] = [KIT.CH];
TRACK[12] = [KIT.BD, KIT.SD_HEAVY, KIT.CH];
TRACK[13] = [KIT.CH];
TRACK[14] = [KIT.OH, KIT.CH];
TRACK[15] = [KIT.CH];

let counter = 0;
let player = function() {

  var samples = TRACK[counter];

  if (samples) {
    for (var i = 0; i < samples.length; i++) {
      var sample = samples[i];
      if(sample) play.sound(sample);
    }
  }

  if(counter != TRACK.length -1) counter++;
  else counter = 0;

}


timer.setInterval(player,'', STEP + 'm');
