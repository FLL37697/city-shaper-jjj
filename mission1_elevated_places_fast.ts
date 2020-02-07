
function mission1_elevated_places_fast() {
    mission1_setup_fast();

    mission1_aligntoramp_fast();

    mission1_prepareforlaunch_fast();

    mission1_climbramp_fast();
}

function mission1_prepareforlaunch_fast() {
    motors.largeBC.stop();
    motors.largeBC.reset();
    motors.largeBC.tank(-20, -20, 1.5, MoveUnit.Rotations);
}

function mission1_aligntoramp_fast() {
    // Approach line
    motors.largeBC.tank(30, 30, 1.5, MoveUnit.Rotations);

    linefollow_fast(10, 160);
    motors.largeBC.stop();

    // move forward
    motors.largeBC.tank(30, 31, 1.2, MoveUnit.Rotations);

    // turn to ramp
    motors.largeBC.tank(-20, 20, .45, MoveUnit.Rotations);

    // Forward half second
    motors.largeBC.tank(10, 10, .5, MoveUnit.Seconds);

    // Approach ramp
    linefollow_fast(10, 0, 0, 15);

    // // Use lip of ramp to align
    // motors.largeBC.tank(30, 30, 1.5, MoveUnit.Seconds);
    // motors.largeBC.tank(-10, -10, 1, MoveUnit.Seconds);

    pause(500);
}

function mission1_setup_fast() {
    motors.largeBC.reset();
}

function mission1_climbramp_fast() {
    motors.largeBC.tank(100, 100, 2, MoveUnit.Rotations);
    motors.largeBC.stop();
    motors.largeBC.tank(23, 20, 2.35, MoveUnit.Rotations);
}