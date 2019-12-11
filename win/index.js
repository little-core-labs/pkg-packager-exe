/**
 * @public
 * @param {Target} target
 * @param {Object} opts
 * @return {Object}
 */
function exeBuilder(target, opts) {
  return {
    init(callback) {
      process.nextTick(callback, null)
    },

    build(callback) {
      process.nextTick(callback, null)
    },

    cleanup(callback) {
      process.nextTick(callback, null)
    }
  }
}

/**
 * Module exports.
 */
module.exports = exeBuilder
