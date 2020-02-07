function mission11() {
	myramp(1, 25, 25, 1, 2.25);
	music.playSoundEffect(sounds.animalsCatPurr);
	motors.largeBC.tank(25, 25);
	while (true) {
		if (
			sensors.color2.isColorDetected(ColorSensorColor.Blue) ||
			sensors.color2.isColorDetected(ColorSensorColor.Blue)
		) {
			break;
		}

		pause(5);

		if (exitFlag) {
			exitFlag = false;
			return;
		}
	}
	music.playSoundEffect(sounds.animalsElephantCall);
	while (true) {
		if (
			sensors.color3.isColorDetected(ColorSensorColor.Black) ||
			sensors.color2.isColorDetected(ColorSensorColor.Black)
		) {
			break;
		}

		pause(5);

		if (exitFlag) {
			exit();
			return;
		}
	}
	music.playSoundEffect(sounds.animalsCatPurr);
	pause(250);
	motors.largeBC.stop();
	motors.largeBC.tank(-65, -73, 4, MoveUnit.Rotations);
}
