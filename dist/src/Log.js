"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = new ((function () {
    function Log() {
    }
    Object.defineProperty(Log.prototype, "stream", {
        set: function (fun) {
            this._stream = fun;
        },
        enumerable: false,
        configurable: true
    });
    Log.prototype.info = function (log) {
        if (this._stream)
            this._stream(log);
    };
    return Log;
}()))();
//# sourceMappingURL=Log.js.map