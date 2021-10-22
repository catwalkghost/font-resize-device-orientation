const element = document.getElementById('text');
const page = document.getElementById('page');

// Check I have access to the device orientation event
if (window.DeviceOrientationEvent) {
    window.addEventListener('deviceorientation', doTheTextThing);
}

const results = Splitting();

function doTheTextThing(evt) {
    const value = Math.floor((evt.gamma + 90) / (180 / results[0].chars.length));
    const currentItem = results[0].chars[value];

    for (let i = 0; i < results[0].chars.length; i++) {
        results[0].chars[i].style.setProperty('--weight', 200);
        results[0].chars[i].style.setProperty('--transform', 1);
    }

    results[0].chars[value].style.setProperty('--weight', 700);
    results[0].chars[value].style.setProperty('--transform', 1.3);
}

// Add a transform scale to it
const button1 = document.getElementById("click-trigger");
const button2 = document.getElementById("ios-trigger");

button1.addEventListener(
    "touchstart",
    function(e) {
        e.preventDefault();
        if (document.body.classList.contains("transform")) {
            document.body.classList.remove("transform");
            button1.textContent = "Add scale transform";
        } else {
            document.body.classList.add("transform");
            button1.textContent = "Reset";
        }
    },
    true
);

button1.addEventListener("click", function(e) {
    if (document.body.classList.contains("transform")) {
        document.body.classList.remove("transform");
        button1.textContent = "Add scale transform";
    } else {
        document.body.classList.add("transform");
        button1.textContent = "Reset";
    }
});

button1.addEventListener("click", function(e) {
    if (document.body.classList.contains("transform")) {
        document.body.classList.remove("transform");
        button1.textContent = "Add scale transform";
    } else {
        document.body.classList.add("transform");
        button1.textContent = "Reset";
    }
});

button2.addEventListener('click', async () => await DeviceMotionEvent.requestPermission());
