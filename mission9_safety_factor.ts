// Add your code here
function mission9_safety_factor() {
    motors.largeB.reset();
    motors.largeC.reset();

    // Drive forward
    motors.largeBC.steer(5, 33, 4.65, MoveUnit.Rotations);
    // linefollow(10, 250);
    motors.largeBC.tank(10, -10, .25, MoveUnit.Rotations);
    runtowhite();
    motors.largeBC.tank(0, 20, .5, MoveUnit.Rotations);
    linefollow();

    let basePower = 10;
    // Reverse
    motors.largeBC.tank(-basePower, -basePower, .45, MoveUnit.Rotations);
    // Rotate right
    motors.largeBC.tank(basePower, -basePower, .38, MoveUnit.Rotations);
    // Forward
    motors.largeBC.tank(basePower, basePower, .4, MoveUnit.Rotations);
    // Rotate left
    motors.largeBC.tank(-basePower, basePower, .25, MoveUnit.Rotations);
    // Forward
    motors.largeBC.tank(basePower, basePower, .27, MoveUnit.Rotations);
    // Rotate right
    motors.largeBC.tank(basePower, -basePower, .425, MoveUnit.Rotations);
    // Forward
    motors.largeBC.tank(basePower, basePower, .6, MoveUnit.Rotations);
    // Rotate left
    motors.largeBC.tank(-basePower, basePower, .375, MoveUnit.Rotations);

    // Return to base
    motors.largeBC.steer(5, -75, 7, MoveUnit.Rotations);
}
