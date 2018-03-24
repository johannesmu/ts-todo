<<<<<<< HEAD
=======
var storage = {};
>>>>>>> e4fb36a805972f22f1c19aa0147319eba8ea14cc
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
<<<<<<< HEAD
    exports["default"] = Task;
=======
    exports.Task = Task;
});
define("ui-module", ["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
    var form = 'test';
    var dick = 'test';
>>>>>>> e4fb36a805972f22f1c19aa0147319eba8ea14cc
});
