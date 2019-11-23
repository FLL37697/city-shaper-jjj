let armPos = 0
let currentTime = 0
let motoraAdjustment = 0
let loopStart = 0
let lastArmPos = 0
function mission12Jonas1() {
    motors.resetAll()
    motors.largeBC.steer(0, 33, 2, MoveUnit.Rotations)
    motors.stopAll()
    pause(1000)
    motors.largeBC.steer(0, -39, 2, MoveUnit.Rotations)
}
function mission12Jonas2() {
    motors.largeBC.steer(0, 33, 2.6, MoveUnit.Rotations)
    motors.largeBC.steer(0, 29, 0, MoveUnit.Rotations)
    motors.stopAll()
    pause(1000)
    motors.largeBC.steer(0, -39, 3.5, MoveUnit.Rotations)
}
radioactiveBrainstorm.addMenuItem("mission12 Jonas1", function () {
    mission12Jonas1()
})
function mission12() {
    motors.resetAll()
    motors.largeBC.steer(0, 25, 3, MoveUnit.Rotations)
    motors.stopAll()
    motors.largeBC.steer(0, -25, 3, MoveUnit.Rotations)
    motors.stopAll()
}
radioactiveBrainstorm.addMenuItem("mission12 Jonas2", function () {
    mission12Jonas2()
})
radioactiveBrainstorm.addMenuItem("Crane Mission", function () {
    crane()
})
radioactiveBrainstorm.addMenuItem("mission12", function () {
    mission12()
})
function crane() {
    motors.resetAll()
    radioactiveBrainstorm.moveUntilStall(motors.mediumA, radioactiveBrainstorm.Direction.UP, 30, 40, 100, false)
motors.largeBC.steer(0, 25, 2.5, MoveUnit.Rotations)
    motors.largeBC.tank(10, -10, 0.25, MoveUnit.Rotations)
    motors.largeBC.steer(0, 25, 0.75, MoveUnit.Rotations)
    motors.largeBC.tank(-10, 10, 0.25, MoveUnit.Rotations)
    motors.mediumA.run(50, 0.5, MoveUnit.Rotations)
    motors.largeBC.steer(0, 40, 0.5, MoveUnit.Rotations)
    pause(200)
    motors.largeBC.steer(0, -25, 0.45, MoveUnit.Rotations)
    motors.mediumA.run(50, 0, MoveUnit.Rotations)
    motors.largeBC.tank(-10, 10, 0.5, MoveUnit.Rotations)
    motors.largeBC.steer(38, 20, 0.6, MoveUnit.Rotations)
    motors.resetAll()
    radioactiveBrainstorm.moveUntilStall(motors.mediumA, radioactiveBrainstorm.Direction.UP, 30, 10, 100, true)
pause(1000)
    radioactiveBrainstorm.moveUntilStall(motors.mediumA, radioactiveBrainstorm.Direction.DOWN, 20, 10, 100, true)
motors.largeBC.steer(0, -50, 2, MoveUnit.Rotations)
}
lastArmPos = 0
loopStart = 0
motoraAdjustment = 0
currentTime = 0
armPos = 0
