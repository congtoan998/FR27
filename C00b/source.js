document.getElementById('xinchao').addEventListener('click', function() {
    showAlert();
});
document.getElementById('tambiet').addEventListener('click', function() {
    showAlert("Good bye. See You Again");
});

function showAlert(message) {
    alert(message || 'Hello, I am Kmin Counter');
}

var Startinput = document.getElementById('start');
var EndInput = document.getElementById('end');
var currentNumber;
var endNumber;
var intervalID;
var isPaused = false;

var play = document.getElementById('play');
play.addEventListener('click', function(){
    toggleCounting()
})

var pause = document.getElementById('Pause');
pause.addEventListener('click', function(){
    resetCounting()
});

function toggleCounting() {
    if (isPaused) {
        startCounting();
    } else {
        Pause();
    }
}

function startCounting() {
    var startNumber = parseInt(document.getElementById('start').value);
    endNumber = parseInt(document.getElementById('end').value);
    if (startNumber >= endNumber){
        var error = document.getElementById('error-message');
        error.textContent = "Lỗi: Số bắt đầu phải nhỏ hơn số kết thúc"       
    }
    var countElement = document.getElementById('count');
    currentNumber = currentNumber || startNumber; // Sử dụng giá trị hiện tại hoặc giá trị mới
    clearInterval(intervalID);
    intervalID = setInterval(function(){
        countElement.textContent = currentNumber;
        if (currentNumber >= endNumber){
            clearInterval(intervalID);
        } else {
            currentNumber++;
        }
    }, 1000);
    isPaused = false;
}

function Pause(){
    clearInterval(intervalID);
    isPaused = true;
}

function startCountingFromCurrent(){
    var countElement = document.getElementById('count');
    clearInterval(intervalID);
    intervalID = setInterval(function(){
        countElement.innerHTML = currentNumber;
        if (currentNumber >= endNumber){
            clearInterval(intervalID);
        } else {
            currentNumber++;
        }
    }, 1000);
}

function resetCounting() {
    clearInterval(intervalID);
    var startNumber = parseInt(document.getElementById('start').value);
    document.getElementById('count').innerHTML = startNumber;
    currentNumber = startNumber;
    isPaused = true;
}

function hienthi(){
    var startInput = document.getElementById('start');
    var Count = document.getElementById('count');
    Count.innerText = startInput.value
}