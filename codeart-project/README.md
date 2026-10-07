# ✨ Code Art - Generative Patterns

A simple, beautiful exploration of computational art using p5.js. Generate unique visual patterns using algorithms, noise functions, and mathematical rules.

## 🎨 Features

**Four Generative Patterns:**

1. **Circles** - Concentric waves with sine modulation
2. **Flow Lines** - Perlin noise-based vector fields
3. **Particles** - Swarm system with trail effects
4. **Mandala** - Rotational symmetry patterns

## 🚀 Getting Started

Simply open `index.html` in your browser:

```bash
# Option 1: Direct file open
open index.html

# Option 2: With a local server (recommended)
python -m http.server 8000
# Then visit http://localhost:8000
```

## 🎮 Controls

- **Click buttons** to switch between patterns
- **Press SPACE** to randomize and create new variations
- **Click "Reset"** to restart

## 🔧 How It Works

### Pattern Algorithm Breakdown

**Circles Pattern:**
```javascript
- Creates concentric circles
- Modulates each circle's radius with sine waves
- Hue shifts over time based on circle index
- Creates a hypnotic, breathing effect
```

**Flow Lines Pattern:**
```javascript
- Uses Perlin noise to create smooth vector fields
- Draws short line segments pointing in noise directions
- Color maps to position (creates radial gradient)
- Simulates organic, natural-looking flows
```

**Particles Pattern:**
```javascript
- Spawns 100 particles with random velocity
- Updates position based on sin/cos waves
- Fades particles over time
- Creates trailing, ethereal motion
```

**Mandala Pattern:**
```javascript
- Creates symmetrical petals using rotations
- Multiple layers with different radii
- Smooth curves using vertex-based shapes
- Rotates and shifts colors over time
```

## 🎓 Learning Resources

- **p5.js Documentation:** https://p5js.org/reference/
- **Generative Art:** https://natureofcode.com/
- **Perlin Noise:** https://en.wikipedia.org/wiki/Perlin_noise
- **Flow Fields:** https://www.tylerxhobbs.com/words/flow-fields

## 🛠️ Customization Ideas

### Easy Modifications

1. **Change Colors** - Edit HSL values in the color() functions
2. **Adjust Speed** - Modify `time += 0.01` in draw()
3. **Modify Shapes** - Change vertex counts and sizes
4. **Add New Patterns** - Create a new function and add to switch statement

### Intermediate Projects

- Add noise parameters for more organic flow
- Implement interaction with mouse position
- Create animation export (saves frames as images)
- Build a color palette selector
- Add sound reactivity

### Advanced Explorations

- Implement real-time shader effects
- Create interactive 3D patterns with Three.js
- Build a particle physics engine
- Explore genetic algorithms for art
- Implement machine learning style transfer

## 📚 Code Art Categories to Explore

From your expanded list, here are great starting points:

- **Generative Art** - Deterministic and stochastic algorithms
- **Fractals** - Mandelbrot and Julia sets
- **Cellular Automata** - Conway's Game of Life
- **L-Systems** - Procedural plant growth
- **Perlin Noise** - Smooth randomness
- **Particle Systems** - Swarms and trails
- **Mandalas** - Rotational symmetry

## 📝 Next Steps

1. **Experiment** - Run each pattern and observe the variations
2. **Modify** - Change parameters to see how they affect output
3. **Create** - Combine elements to build your own patterns
4. **Share** - Export your favorite creations as images

## 💡 Pro Tips

- Press SPACE multiple times to explore the variation space
- Watch patterns for 30+ seconds to see the full animation cycle
- Combine ideas from different patterns for hybrid effects
- Use browser DevTools console to log values and debug

## 🎯 Challenge Ideas

- Create a pattern that responds to mouse movement
- Build an interactive color picker
- Implement a "save image" button
- Create a pattern that reacts to audio input
- Develop a shader-based version for better performance

---

**Made with ✨ and 🎨 using p5.js**