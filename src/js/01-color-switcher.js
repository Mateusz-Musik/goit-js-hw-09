
//funkcja generuje losowy kolor w formacie szesnastkowym
function getRandomHexColor() {  
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    }


//querySelector wyszukuje przyciski START i STOP
const startBtn = document.querySelector('[data-start'); // błąd!:[start-stop]
const stopBtn = document.querySelector('[data-stop]');
const body = document.body;

let intervalId = 0;

//po naciśnięciu START funkcja zmienia kolor 1 raz na sekundę.
function startColorSwitching() {
    startBtn.disabled = true;
    stopBtn.disabled = false;
    intervalId = setInterval(() => {
        const randomColor = getRandomHexColor();
        body.style.backgroundColor = randomColor;
    }, 1000);
}

//po naciśnięciu STOP zmiana koloru zostaje zatrzymana.
function stopColorSwitching() {
    clearInterval(intervalId);
    startBtn.disabled = false;
    stopBtn.disabled = true;

}

//Eventy(zdarzenia) przypisane do START i STOP
startBtn.addEventListener('click', startColorSwitching);
stopBtn.addEventListener('click', stopColorSwitching);
