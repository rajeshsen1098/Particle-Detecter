# Particle Detector

A simple **Particle Detector simulation** built with **JavaScript** and **Raylib**.

The project demonstrates how moving detector regions can detect particles by checking whether their ranges overlap. When a detector detects a particle, its color changes from white to red.

## Demo

The simulation runs in a `600 × 600` Raylib window.

- **Blue regions** represent particles.
- **White regions** represent detectors.
- **Red regions** indicate that a detector has detected a particle.
- Detectors move continuously and reverse direction when they reach their allowed boundaries.

## Features

- 3 particle regions
- 3 moving detectors
- Real-time particle detection
- Rectangle/range overlap detection
- Automatic detector direction reversal at boundaries
- Different detector velocities
- Simple modular JavaScript structure
- Raylib-based graphical window

## How It Works

The project uses rectangular ranges to represent both particles and detectors.

A detector is considered to have detected a particle when their ranges overlap.

The main overlap check is implemented in `geometry.js`:

```js
function isOverlap(start1, width1, start2, width2) {
    const end1 = start1 + width1;
    const end2 = start2 + width2;

    return !(end2 < start1 || start2 > end1);
}
```

For moving detectors, the project checks whether the detector has reached its allowed boundary. If it has, its velocity is reversed.

```js
function calcVelocity(start, width, min, max, velocity) {
    return isDetectorOutOfBound(start, width, min, max)
        ? -velocity
        : velocity;
}
```

### Detection Flow

```text
Particles
   │
   ▼
Detector movement
   │
   ▼
Check detector/particle overlap
   │
   ├── No overlap ──► Detector stays white
   │
   └── Overlap ─────► Detector turns red
```

## Detectors

The simulation contains three detectors.

| Detector | Movement | Velocity | Detection Area |
|---|---|---:|---|
| Detector 1 | Horizontal | 1 | Left half of window |
| Detector 2 | Horizontal | 2 | Right half of window |
| Detector 3 | Vertical | 4 | Full window width |

Detector 1 and Detector 2 detect the first two particles using horizontal range overlap.

Detector 3 detects the third particle using vertical range overlap.

## Particles

There are three particle regions:

| Particle | Position | Size |
|---|---|---|
| Particle 1 | `x = 500` | `60 × 600` |
| Particle 2 | `x = 100` | `40 × 600` |
| Particle 3 | `y = 500` | `600 × 60` |

The particles are represented as static rectangular regions in the current implementation.

## Project Structure

```text
Particle-Detecter/
│
├── main.js
├── sketch.js
├── geometry.js
├── detecter.js
│
├── detector1.js
├── detector2.js
├── detector3.js
│
├── particle1.js
├── particle2.js
├── particle3.js
│
├── windowsProperty
├── package.json
├── package-lock.json
└── .gitignore
```

### Main Files

#### `main.js`

The application entry point.

It:

1. Initializes the simulation.
2. Runs the update/draw loop.
3. Closes the window when the simulation ends.

```js
function loop() {
    while (sketch.running()) {
        sketch.update();
        sketch.draw();
    }
}
```

#### `sketch.js`

Contains the main simulation logic:

- Raylib window setup
- Detector movement
- Particle detection
- Drawing particles and detectors
- Updating detector colors

#### `geometry.js`

Contains geometric utility functions.

Currently, it provides the rectangle/range overlap calculation used for particle detection.

#### `detecter.js`

Contains detector movement utilities.

It determines whether a detector has moved outside its allowed range and reverses its velocity when necessary.

#### `detector1.js`, `detector2.js`, `detector3.js`

Define the properties of each detector, including:

- Position
- Width/height
- Velocity
- Movement boundaries
- Detection state

#### `particle1.js`, `particle2.js`, `particle3.js`

Define the position and dimensions of each particle region.

#### `windowsProperty`

Contains the simulation window configuration:

```text
Width:       600
Height:      600
FPS:         50
Title:       Particle Detector
```

## Requirements

You need:

- [Node.js](https://nodejs.org/)
- npm
- [Raylib](https://www.raylib.com/) through the Node.js `raylib` package

The project currently uses:

```json
"raylib": "^0.14.0"
```

## Installation

Clone the repository:

```bash
git clone https://github.com/rajeshsen2944/Particle-Detecter.git
```

Move into the project directory:

```bash
cd Particle-Detecter
```

Install dependencies:

```bash
npm install
```

## Running the Project

Start the simulation with:

```bash
node main.js
```

A Raylib window should open and display the particle detector simulation.

To close the application, close the Raylib window.

## Controls

There are currently no keyboard controls.

The simulation runs automatically after starting the program.

## Detection Logic

For the horizontal detectors, detection is based on the X-axis:

```text
Detector range
      │
      ▼
┌─────────────┐
│   Detector  │
└─────────────┘
       ▲
       │ overlap?
       ▼
┌─────────────┐
│  Particle   │
└─────────────┘
```

If the detector and particle ranges overlap:

```js
detected = true;
```

The detector is then drawn using a semi-transparent red color:

```js
const SC_DETECTED = r.ColorAlpha(r.RED, .7);
```

Otherwise, the detector remains white.

## Movement

Each detector has its own velocity.

For example:

```text
Detector 1 → 1 pixel/frame
Detector 2 → 2 pixels/frame
Detector 3 → 4 pixels/frame
```

When a detector reaches its movement boundary, its velocity is negated:

```js
velocity = -velocity;
```

This makes the detector move back in the opposite direction.

## Learning Concepts

This project is useful for practicing:

- JavaScript modules
- `require()` and `module.exports`
- Functions and parameters
- Objects and properties
- Game/update loops
- Collision/overlap detection
- Basic geometry
- State management
- Raylib graphics
- Animation using frame updates

## Possible Improvements

Some possible extensions for the project are:

- Add more particles dynamically
- Add more detectors dynamically
- Give particles actual movement
- Add particle velocity
- Add different particle types
- Add collision/detection counters
- Display the number of detected particles
- Add keyboard controls
- Add mouse interaction
- Add particle spawning
- Add sound when a particle is detected
- Add a detector/particle configuration screen
- Improve the detection system to support full 2D rectangle collision

## Future Goal

The project can be extended from a fixed demonstration into a more general particle detection system where particles and detectors can be created dynamically and the detector system can report which particles are currently inside each detector.

## Author

**Rajesh Sen**

GitHub: [@rajeshsen1098](https://github.com/rajeshsen1098)

## License

No license is currently specified for this repository.
