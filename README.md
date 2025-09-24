# Snake Game Test Automation

Automated test suite for Snake game using Playwright and TypeScript.

## 📋 Prerequisites

- **Node.js** (version 16 or newer)
- **npm** or **yarn**
- **Snake Game** running at `http://localhost:3456`

## 🚀 Installation

```bash
# Install dependencies
npm install

# Install Playwright browsers
npm run install:browsers
```

## ▶️ Running Tests

```bash
# Run all tests
npm test

# Run tests in headed mode (visible browser)
npm run test:headed

# Run tests with UI mode
npm run test:ui

# Run specific test file
npx playwright test snake-user.spec.ts
```

## 📁 Project Structure

```
snake-automation/
├── tests/
│   ├── utils/
│   │   └── game-helpers.ts          # Helper functions for testing
│   ├── data/
│   │   └── test-data.ts             # Test data and constants
│   └── snake-user.spec.ts           # Main test file (30 test cases)
├── playwright.config.ts             # Playwright configuration
├── package.json                     # Dependencies and scripts
└── README.md                        # This documentation
```

## 🧪 Test Cases

### ✅ Basic Functionality (TC001-TC008)
- **TC001** - Game loads correctly
- **TC002** - Score is visible
- **TC003** - High score is visible
- **TC004** - Game can be started
- **TC005** - Game can be paused
- **TC006** - Game can be resumed
- **TC007** - Game can be reset
- **TC008** - Play again after game over

### 🎮 Game Controls (TC009-TC016)
- **TC009** - Move snake up with 'W'
- **TC010** - Move snake left with 'A'
- **TC011** - Move snake down with 'S'
- **TC012** - Move snake right with 'D' 
- **TC013** - Cannot press same direction twice (Up)
- **TC014** - Cannot press same direction twice (Left)
- **TC015** - Cannot press same direction twice (Down)
- **TC016** - Cannot press same direction twice (Right)

### 🍎 Game Mechanics (TC017-TC022)
- **TC017** - Score increases when eating food 
- **TC018** - Move snake using arrow keys
- **TC019** - Game over screen when hitting wall 
- **TC020** - Game over screen when hitting self
- **TC021** - Snake grows when eating food 
- **TC022** - High score updates when beaten

### 🔄 Advanced Features (TC023-TC030)
- **TC023** - Multiple pause/resume cycles
- **TC024** - Reset game while running
- **TC025** - Reset game while paused
- **TC026** - Canvas has correct dimensions
- **TC027** - Game buttons are properly labeled
- **TC028** - Game title and instructions visible
- **TC029** - Game responds to rapid key presses
- **TC030** - Game maintains state consistency
## 📊 Test Status

**Total Test Cases:** 30  
**All Tests:** ✅ Passing

## 🛠️ Troubleshooting

### Common Issues

1. **Game not loading**
   ```bash
   # Make sure Snake game server is running at localhost:3456
   cd ../vouch_snake
   npm start
   ```

2. **Tests failing due to timeout**
   ```bash
   # Increase timeout in playwright.config.ts
   # or restart game server
   ```

3. **Browser not installed**
   ```bash
   npm run install:browsers
   ```

### Debug Mode

```bash
# Run tests in debug mode
npm run test:debug

# Run with trace
npx playwright test --trace on

# View HTML report
npm run test:report
```

## 📈 Test Reports

After running tests, reports are available at:
- **HTML Report:** `test-results/index.html`
- **Screenshots:** `test-results/` folder
- **Videos:** `test-results/` folder


---

