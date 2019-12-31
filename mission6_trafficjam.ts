// Add your code here
function mission6_trafficjam() {
    motors.mediumD.reset();
    radioactiveBrainstorm.moveUntilStall(motors.mediumD, radioactiveBrainstorm.Direction.DOWN, 30, 40, 100, false);
    motors.largeBC.tank(30, 30, 1.65, MoveUnit.Rotations);
    radioactiveBrainstorm.moveUntilStall(motors.mediumD, radioactiveBrainstorm.Direction.UP, 100, 40, 100, false);
    motors.largeBC.tank(15, -15, .3, MoveUnit.Rotations);
    //motors.largeBC.tank(10, 10, .2, MoveUnit.Rotations);
    //motors.largeBC.tank(10, -10, .25, MoveUnit.Rotations);
    //motors.largeBC.steer(-50, 15, .5, MoveUnit.Rotations);
}