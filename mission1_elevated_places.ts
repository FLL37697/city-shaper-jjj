function mission1_elevated_places() {
	mission1_setup();

	mission1_aligntoramp();

	mission1_prepareforlaunch();

	mission1_climbramp();
}

function mission1_prepareforlaunch() {
	motors.largeBC.stop();
	motors.largeBC.reset();
	motors.largeBC.tank(-10, -10, 1.5, MoveUnit.Rotations);
}

function mission1_aligntoramp() {
	// Approach line
	motors.largeBC.tank(30, 30, 1.5, MoveUnit.Rotations);

	linefollow(10, 160, 0, 0, -0.2, 0.02, 0.66);
	motors.largeBC.stop();

	// move forward
	motors.largeBC.tank(20, 21, 1.2, MoveUnit.Rotations);

	// turn to ramp
	motors.largeBC.tank(-20, 20, 0.45, MoveUnit.Rotations);

	// Forward half second
	motors.largeBC.tank(10, 10, 0.5, MoveUnit.Seconds);

	// Approach ramp
	linefollow(10, 0, 0, 15, -0.2, 0.02, 0.66);

	// // Use lip of ramp to align
	// motors.largeBC.tank(30, 30, 1.5, MoveUnit.Seconds);
	// motors.largeBC.tank(-10, -10, 1, MoveUnit.Seconds);

	pause(500);
}

function mission1_setup() {
	motors.largeBC.reset();
}

function mission1_climbramp() {
	motors.largeBC.tank(100, 100, 2, MoveUnit.Rotations);
	motors.largeBC.stop();
	motors.largeBC.tank(23, 20, 3, MoveUnit.Rotations);
}
