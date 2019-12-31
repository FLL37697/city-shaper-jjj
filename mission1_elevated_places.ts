// Add your code here
function mission1_elevated_places() {
    setup();

    aligntoramp();
}

function aligntoramp() {
    motors.largeBC.tank(30, 30, 2, MoveUnit.Rotations);
    linefollow(10, 1000)
}

function setup() {
    motors.largeBC.reset();
}

function climbramp() {
    motors.largeBC.tank(100, 100, 2, MoveUnit.Rotations);
    motors.largeBC.stop();
    motors.largeBC.tank(23, 20, 2.35, MoveUnit.Rotations);
}