const Rx = require('rx');
const hound = require('hound');
const jp = require('jupyter-paths');

const watcher = hound.watch(jp.paths.runtime[0]);

function isKernelJSON(filepath) {
    var name = path.basename(filepath);
    return name.startsWith('kernel') && name.endsWith('.json');
}

const source = Rx.Observable.fromEvent(watcher, 'create')
                            .filter(isKernelJSON);

module.exports = source;
