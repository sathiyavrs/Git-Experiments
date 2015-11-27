var Ball = Object.create(Object.prototype);

function constructBallObject() {
	Ball.Radius = 10;
	Ball.Bounciness = 20;
}

constructBallObject();

function obamaCare() {
	Ball.Radius = 0;
	Ball.Bounciness = 0;
}
