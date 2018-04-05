function storeData(data) {
    try {
        if (window.localStorage) {
            window.localStorage.setItem('tasks', JSON.stringify(data));
            return true;
        }
    }
    catch (error) {
        console.log(error.message);
    }
}
function readData() {
    try {
        if (window.localStorage) {
            var tasks = JSON.parse(window.localStorage.getItem('tasks'));
            return tasks;
        }
    }
    catch (error) {
        console.log(error.message);
    }
}
var test = 'test';
var task = "hello";
