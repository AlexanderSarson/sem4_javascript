const DOS_Detector = require('./dos-detector');
const dos_Detector = new DOS_Detector(10);

dos_Detector.on('DOS_message', (args) => {
  console.log('DDOS', args)
});

dos_Detector.addUrl('test');
setTimeout(() => dos_Detector.addUrl('test'), 3);