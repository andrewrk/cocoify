var coco = require('coco');
var through = require('through');

function compile(file, data) {
    var js = coco.compile(data, {
      filename: file,
      bare: true,
    });
    return js;
}

function isCoco (file) {
    return (/\.co$/).test(file);
}

module.exports = function (file) {
    if (!isCoco(file)) return through();

    var data = '';
    return through(write, end);

    function write (buf) { data += buf }
    function end () {
        var src;
        try {
            src = compile(file, data);
        } catch (error) {
            this.emit('error', error);
        }
        this.queue(src);
        this.queue(null);
    }
};
