precision mediump float;

attribute vec3 aPosition;
attribute vec3 aColor;
attribute vec2 aUV;

uniform mat4 uModelView;
uniform mat4 uProjection;

varying vec3 vColor;
varying vec2 uv;

void main() {
  gl_Position = vec4(aPosition, 1.0);

  vColor = aColor;
  uv = aUV;
}
