//your JS code here. If required.
function rotateLine() {
    const line = document.getElementById('line');
    let angle = 0;

    function rotate() {
        angle = (angle + 2) % 360; // Increase angle by 2 degrees, wrapping around at 360 degrees
        line.style.transform = `rotate(${angle}deg)`;
        requestAnimationFrame(rotate); // Request next frame
    }

    rotate(); // Start the rotation
}

window.onload = rotateLine;
