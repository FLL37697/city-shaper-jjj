function mission9_safety_factor() {
	motors.largeB.reset();
	motors.largeC.reset();

	// Drive forward
	motors.largeBC.steer(5, 33, 4.65, MoveUnit.Rotations);
	// linefollow(10, 250);
	motors.largeBC.tank(10, -10, 0.25, MoveUnit.Rotations);
	runtowhite();
	motors.largeBC.tank(0, 20, 0.5, MoveUnit.Rotations);
	linefollow(10, 0, 0, 0, -0.2, 0.02, 0.66);

	let basePower = 10;
	// Reverse
	motors.largeBC.tank(-basePower, -basePower, 0.45, MoveUnit.Rotations);
	// Rotate right
	motors.largeBC.tank(basePower, -basePower, 0.38, MoveUnit.Rotations);
	// Forward
	motors.largeBC.tank(basePower, basePower, 0.4, MoveUnit.Rotations);
	// Rotate left
	motors.largeBC.tank(-basePower, basePower, 0.25, MoveUnit.Rotations);
	// Forward
	motors.largeBC.tank(basePower, basePower, 0.25, MoveUnit.Rotations);
	// Rotate right
	motors.largeBC.tank(basePower, -basePower, 0.435, MoveUnit.Rotations);
	// Forward
	motors.largeBC.tank(basePower, basePower, 0.6, MoveUnit.Rotations);
	// Rotate left
	motors.largeBC.tank(-basePower, basePower, 0.375, MoveUnit.Rotations);

	// Return to base
	motors.largeBC.steer(0, -75, 7, MoveUnit.Rotations);
}
