const tf = require('@tensorflow/tfjs-node');
async function loadModel() {
    return tf.loadGraphModel('https://storage.googleapis.com/dicoding-storage-cancer/model.json');
}
module.exports = loadModel;