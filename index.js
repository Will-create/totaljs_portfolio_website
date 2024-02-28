require('total5');
var opt = {};
opt.port = 5000;
opt.release = process.argv.includes('--release');
F.run(opt);