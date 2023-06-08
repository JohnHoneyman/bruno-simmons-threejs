uniform mat4 projectionMatrix;
uniform mat4 viewMatrix;
uniform mat4 modelMatrix;

attribute vec3 position;

float loremIpsum(float a, float b){
    return a+b;
}

void main(){
    float fooBar = 0.123;
    int a = 1;
    int b = a + int(fooBar);
    float c = float(a) + fooBar;

    bool foo = true;
    vec2 fooB = vec2(1.0, 2.0);
    vec2 fooBe = vec2(1.0);
    vec2 fooBee = vec2(0.0);
    fooBee.x = 1.0;
    fooBee.y = 2.0;
    fooBee *= 2.0; 

    vec3 bee = vec3(0.0);
    vec3 boo = vec3(1.0, 2.0, 3.0);
    boo.z = 4.0;

    vec3 purpleColor = vec3(0.0);
    purpleColor.r = 0.5;
    purpleColor.g = 0.2;
    purpleColor.b = 1.0;

    vec3 fee = vec3(1.0, 2.0, 3.0);
    vec2 feeb = fee.xy;
    vec2 feec = fee.xz;
    vec2 feed = fee.yx;

    vec4 four = vec4(1.0, 2.0, 3.0, 4.0);
    float bar = four.z;

    float result = loremIpsum(1.0, 2.0);

    gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(position, 1.0);
}