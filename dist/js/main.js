define("task-class", ["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
    var Task = /** @class */ (function () {
        function Task(name) {
            this.name = name;
            this.id = new Date().getTime();
            this.status = false;
        }
        return Task;
    }());
    exports["default"] = Task;
});
