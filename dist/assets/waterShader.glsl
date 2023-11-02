precision mediump float;

uniform float time;
uniform sampler2D uMainSampler;
uniform vec2 resolution;

varying vec2 fragCoord;

void main(void)
{
    // Define the frequency and amplitude of the ripples
    float frequency = 15.0;
    float amplitude = 0.1;
    
    // Calculate the distortion
    float distortionX = amplitude * sin(time * frequency + fragCoord.x);
    float distortionY = amplitude * cos(time * frequency + fragCoord.y);
    
    // Offset the texture coordinates to create the ripple effect
    vec2 uv = fragCoord / resolution;
    uv.x += distortionX;
    uv.y += distortionY;
    
    gl_FragColor = texture2D(uMainSampler, uv);
}