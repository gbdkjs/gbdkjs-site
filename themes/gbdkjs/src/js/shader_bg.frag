#define GRID_COLOR vec4(1.,1.,0.,1.)
#define FOG_COLOR vec4(1.,0.,0.,1.)
#define BLACK vec4(0.,0.,0.,1.)
#define WHITE vec4(1.,1.,1.,1.)
#define RED vec4(200./255.,36./255.,26./255.,1.)
#define PINK vec4(201./255.,44./255.,97./255.,1.)
#define BLUE vec4(36./255.,34./255.,107./255.,1.)
#define GREEN vec4(0.,1.,0.,1.)



#define M_PI 3.1415926535897932384626433832795

precision mediump float;

varying vec3 vColor;
varying vec2 uv;

float axisLine(float pos) {
  return (40. * cos(pos * (2.*M_PI*60.))) - 39.;
}

float grid(vec2 pos) {
  return max(axisLine(pos.x), axisLine(pos.y));
}

void main() {
  vec4 color;


  float perspective_far = 0.5;
  float fog_cord = (gl_FragCoord.z / gl_FragCoord.w) / perspective_far;

  vec4 grid_color = mix(FOG_COLOR, GRID_COLOR, max(0.,1.0-fog_cord));

  gl_FragColor = vec4(1.,0.,0.,1.);

  color = mix(BLUE, BLUE, smoothstep(0.0, 0.1, uv.x));
  color = mix(color, PINK, smoothstep(0.1, 0.4, uv.x));
  color = mix(color, RED, smoothstep(0.4, 0.5, uv.x));
  color = mix(color, PINK, smoothstep(0.5, 0.6, uv.x));
  color = mix(color, BLUE, smoothstep(0.6, 0.8, uv.x));
  color = mix(color, BLUE, smoothstep(0.9, 1.0, uv.x));

  gl_FragColor = color;
}
