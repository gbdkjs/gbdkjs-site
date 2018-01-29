#define GRID_COLOR vec4(255./255.,180./255.,36./255.,1.)
#define FOG_COLOR vec4(207./255.,35./255.,30./255.,0.)
#define BLACK vec4(255./255.,180./255.,36./255.,0.)
#define M_PI 3.1415926535897932384626433832795

precision mediump float;

varying vec3 vColor;
varying vec2 uv;

uniform float uTime;

float axisLine(float pos) {
    return 
      min(
        1.,
        max(
          clamp((40. * cos(pos * (2.*M_PI*70.))) - 38., 0., 1.),
          0.1  * clamp((1. * cos(pos * (2.*M_PI*70.))), 0., 1.)
        )
      );
}

float grid(vec2 pos) {
    return max(axisLine(pos.x), axisLine(pos.y));
}

void main() {
  float perspective_far = 0.35;
  float fog_cord = (gl_FragCoord.z / gl_FragCoord.w) / perspective_far;

  vec4 grid_color = mix(FOG_COLOR, GRID_COLOR, max(0.,1.0-fog_cord));

  //gl_FragColor = vec4(vColor, 1.0);
  //gl_FragColor = vec4(uv,1.0,1.0);

  vec4 line_color = mix(BLACK, GRID_COLOR, grid(vec2(uv.x - (uTime/70000.),uv.y)));


  //gl_FragColor = line_color;

  gl_FragColor = mix(FOG_COLOR, line_color, max(0.,1.0-fog_cord));
  //gl_FragColor = vec4(1.,1.,0.,0.5);

  //gl_FragColor = vec4(fog_cord,1.,1.,1.);

  //gl_FragColor = vec4(1.,0.,0.,0.5);


}
