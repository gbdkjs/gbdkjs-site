import styles from './../css/main.css';

var canvas = document.getElementById("header");
var clear = require("gl-clear")({ color: [0, 0, 0, 1] });
var gl = require("gl-context")(canvas, render);
var now = require("right-now");
var glBuffer = require("gl-buffer");
var mat4 = require("gl-mat4");
var glShader = require('gl-shader')
var glslify  = require('glslify')

var shader = glShader(gl,
  require('./shader.vert'),
  require('./shader.frag')
)

var shaderBg = glShader(gl,
  require('./shader_bg.vert'),
  require('./shader_bg.frag')
)

var time = 0;

shader.attributes.aPosition.location = 0;
shader.attributes.aColor.location = 1;
shader.attributes.aUV.location = 2;

shaderBg.attributes.aPosition.location = 0;
shaderBg.attributes.aColor.location = 1;
shaderBg.attributes.aUV.location = 2;

var triangleMatrix = mat4.create();
var squareMatrix = mat4.create();
var projectionMatrix = mat4.create();

// var triangle = {
//   vertices: glBuffer(
//     gl,
//     new Float32Array([+0.0, +1.0, +0.0, -1.0, -1.0, +0.0, +1.0, -1.0, +0.0])
//   ),
//   uv: glBuffer(gl, new Float32Array([+0.0, +1.0, -1.0, -1.0, +1.0, -1.0])),
//   colors: glBuffer(
//     gl,
//     new Float32Array([+1.0, +0.0, +0.0, +0.0, +1.0, +0.0, +0.0, +0.0, +1.0])
//   ),
//   length: 3
// };

var mX = 0.5;
var mY = 0.5;
var dX = 0.5;
var dY = 0.5;
var speed = 1 / 60;

canvas.onmousemove = function(e) {
  mX = e.pageX / canvas.width;
  mY = e.pageY / canvas.height;
};

var square = {
  vertices: glBuffer(
    gl,
    new Float32Array([
      +1.0,
      +1.0,
      +0.0,
      -1.0,
      +1.0,
      +0.0,
      +1.0,
      -1.0,
      +0.0,
      -1.0,
      -1.0,
      +0.0
    ])
  ),
  uv: glBuffer(gl, new Float32Array([0.0, 0.0, 0.0, 1.0, 1.0, 0.0, 1.0, 1.0])),
  colors: glBuffer(
    gl,
    new Float32Array([
      +0.5,
      +0.5,
      +1.0,
      +0.5,
      +0.5,
      +1.0,
      +0.5,
      +0.5,
      +1.0,
      +0.5,
      +0.5,
      +1.0
    ])
  ),
  length: 4
};

var currTime = now();
var lastTime = now();
var rSquare = 0.5;
var rTri = 0.5;
var elapsed = 0;

function animate() {
  currTime = now();
  elapsed = currTime - lastTime;

  lastTime = currTime;
  rTri += 90 * elapsed / 15000;
  rSquare += 75 * elapsed / 15000;

  dX += (mX - dX) * speed;
  dY += (1 - mY - dY) * speed;
}

function render() {
  var width = gl.drawingBufferWidth;
  var height = gl.drawingBufferHeight;

  animate();

  gl.enable(gl.BLEND);
  gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

  // Clear the screen and set the viewport before
  // drawing anything
  clear(gl);
  gl.viewport(0, 0, width, height);

  // Calculate projection matrix
  mat4.perspective(projectionMatrix, Math.PI / 4, width / height, 0.1, 100);
  mat4.rotate(projectionMatrix, projectionMatrix, (-0.5 + dX) / 5, [0, 1, 0]);
  mat4.rotate(projectionMatrix, projectionMatrix, dY / 20, [0, 0, 1]);

  // BG -----

  // BG
  mat4.identity(squareMatrix);
  mat4.translate(squareMatrix, squareMatrix, [0, 0, -0.1]);
  // mat4.rotate(squareMatrix, squareMatrix, Math.PI * -0.5, [1, 0, 0]);

  // Bind the shader
  shaderBg.bind();
  shaderBg.uniforms.uProjection = projectionMatrix;

  // Draw the square
  shaderBg.uniforms.uModelView = squareMatrix;
  square.vertices.bind();
  shaderBg.attributes.aPosition.pointer();
  square.colors.bind();
  shaderBg.attributes.aColor.pointer();
  square.uv.bind();
  shaderBg.attributes.aUV.pointer();
  gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);

  // Bottom -----
  // Calculate squares's modelView matrix
  mat4.identity(squareMatrix);
  mat4.translate(squareMatrix, squareMatrix, [0, -0.05, -1]);
  mat4.rotate(squareMatrix, squareMatrix, Math.PI * -0.5, [1, 0, 0]);

  // Bind the shader
  shader.bind();
  shader.uniforms.uProjection = projectionMatrix;

  // Draw the square
  shader.uniforms.uModelView = squareMatrix;
  square.vertices.bind();
  shader.attributes.aPosition.pointer();
  square.colors.bind();
  shader.attributes.aColor.pointer();
  square.uv.bind();
  shader.attributes.aUV.pointer();
  gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);

  // TOP -------
  mat4.identity(squareMatrix);
  mat4.translate(squareMatrix, squareMatrix, [0, 0.05, -1]);
  mat4.rotate(squareMatrix, squareMatrix, Math.PI * -0.5, [1, 0, 0]);

  // Bind the shader
  shader.bind();
  shader.uniforms.uProjection = projectionMatrix;
  shader.uniforms.uTime = currTime;

  // Draw the square
  shader.uniforms.uModelView = squareMatrix;
  square.vertices.bind();
  shader.attributes.aPosition.pointer();
  square.colors.bind();
  shader.attributes.aColor.pointer();
  square.uv.bind();
  shader.attributes.aUV.pointer();
  gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
}

// Resize the canvas to fit the screen
var scrollTimer = 0;
function scrollCanvas() {
  scrollTimer = Date.now();
  document.body.style.margin = 50;
}

function resizeCanvas() {
  if(scrollTimer + 300 < Date.now()) {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight - 72;
  }
}

window.addEventListener("scroll", scrollCanvas, false);
window.addEventListener("resize", resizeCanvas, false);
resizeCanvas();
