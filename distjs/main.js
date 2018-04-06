var Task = /** @class */ (function () {
    function Task(name) {
        this.name = name;
        this.id = new Date().getTime();
        this.status = false;
        return this;
    }
    return Task;
}());
function init() {
    var taskform = document.getElementById('taskform');
    taskform.addEventListener('submit', onFormSubmit);
}
function onFormSubmit(event) {
    event.preventDefault();
}
