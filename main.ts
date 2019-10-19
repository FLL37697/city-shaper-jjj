let armPos = 0
let currentTime = 0
let motoraAdjustment = 0
let loopStart = 0
let lastArmPos = 0
radioactiveBrainstorm.addMenuItem("Crane Mission", function () {
    crane()
})
function crane() {
    motors.resetAll()
    radioactiveBrainstorm.moveUntilStall(motors.mediumA, radioactiveBrainstorm.Direction.UP, 30, 40, 100, false)
motors.largeBC.steer(0, 40, 2.5, MoveUnit.Rotations)
    motors.largeBC.tank(10, -10, 0.25, MoveUnit.Rotations)
    motors.largeBC.steer(0, 50, 0.75, MoveUnit.Rotations)
    motors.largeBC.tank(-10, 10, 0.25, MoveUnit.Rotations)
    motors.largeBC.steer(0, 40, 0.45, MoveUnit.Rotations)
    radioactiveBrainstorm.moveUntilStall(motors.mediumA, radioactiveBrainstorm.Direction.DOWN, 20, 10, 100, true)
    motors.largeBC.steer(0, -40, 0.45, MoveUnit.Rotations)
    radioactiveBrainstorm.moveUntilStall(motors.mediumA, radioactiveBrainstorm.Direction.DOWN, 20, 10, 100, true)
    motors.largeBC.tank(-10, 10, 0.2, MoveUnit.Rotations)
    motors.largeBC.steer(38, 20, 0.6, MoveUnit.Rotations)
    motors.resetAll()
    radioactiveBrainstorm.moveUntilStall(motors.mediumA, radioactiveBrainstorm.Direction.UP, 20, 10, 100, true)
    radioactiveBrainstorm.moveUntilStall(motors.mediumA, radioactiveBrainstorm.Direction.DOWN, 20, 10, 100, true)
    motors.largeBC.steer(0, -50, 2, MoveUnit.Rotations)
}
lastArmPos = 0
loopStart = 0
motoraAdjustment = 0
currentTime = 0
armPos = 0
