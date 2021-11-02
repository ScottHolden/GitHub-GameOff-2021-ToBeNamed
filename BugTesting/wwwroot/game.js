export function init(canvas) {
	const resize = () => {
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;
	};
	window.addEventListener('resize', resize);
	resize();
	const contextAttributes = {
		alpha: 1,
		depth: 1,
		stencil: 8,
		antialias: 1,
		premultipliedAlpha: 1,
		preserveDrawingBuffer: 0,
		preferLowPowerToHighPerformance: 0,
		failIfMajorPerformanceCaveat: 0,
		majorVersion: 2,
		minorVersion: 0,
		enableExtensionsByDefault: 1,
		explicitSwapControl: 0,
		renderViaOffscreenBackBuffer: 0,
	};
	const gl = canvas[0].getContext("webgl2", contextAttributes);
    gl.clearColor(0.0, 0.0, 0.0, 1.0);
	gl.clear(gl.COLOR_BUFFER_BIT);
	window.gl = gl;
	console.log(gl);
	crash;
}