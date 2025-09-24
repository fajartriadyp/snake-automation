export const TEST_CONSTANTS = {
  GAME_URL: 'http://localhost:3456',
  CANVAS_SELECTOR: '#gameCanvas',
  START_BUTTON: '#startBtn',
  PAUSE_BUTTON: '#pauseBtn',
  RESET_BUTTON: '#resetBtn',
  PLAY_AGAIN_BUTTON: '#playAgainBtn',
  SCORE_SELECTOR: '#score',
  HIGH_SCORE_SELECTOR: '#highScore',
  FINAL_SCORE_SELECTOR: '#finalScore',
  GAME_OVER_SELECTOR: '#gameOver',
  
  // Game settings
  INITIAL_SCORE: 0,
  FOOD_SCORE_INCREMENT: 10,
  SPEED_INCREASE_THRESHOLD: 50,
  SPEED_DECREASE_AMOUNT: 10,
  MIN_SPEED: 50,
  INITIAL_SPEED: 100,
  
  // Canvas dimensions
  CANVAS_WIDTH: 400,
  CANVAS_HEIGHT: 400,
  GRID_SIZE: 20,
  TILE_COUNT: 20, // 400 / 20
  
  // Timeouts
  GAME_START_TIMEOUT: 1000,
  MOVE_TIMEOUT: 100,
  GAME_OVER_TIMEOUT: 2000,
  PAUSE_TIMEOUT: 500,
  
  // Test scenarios
  MOVEMENT_PATTERNS: {
    SIMPLE_RIGHT: ['ArrowRight', 'ArrowRight', 'ArrowRight'],
    SIMPLE_DOWN: ['ArrowDown', 'ArrowDown', 'ArrowDown'],
    SIMPLE_LEFT: ['ArrowLeft', 'ArrowLeft', 'ArrowLeft'],
    SIMPLE_UP: ['ArrowUp', 'ArrowUp', 'ArrowUp'],
    CIRCLE_PATTERN: ['ArrowRight', 'ArrowDown', 'ArrowLeft', 'ArrowUp'],
    ZIGZAG_PATTERN: ['ArrowRight', 'ArrowDown', 'ArrowRight', 'ArrowDown'],
    WASD_CONTROLS: ['d', 's', 'a', 'w'],
    MIXED_CONTROLS: ['ArrowRight', 'd', 'ArrowDown', 's']
  },
  
  // Edge cases
  RAPID_INPUT: Array(10).fill(['ArrowRight', 'ArrowDown', 'ArrowLeft', 'ArrowUp']).flat(),
  OPPOSITE_DIRECTIONS: ['ArrowRight', 'ArrowLeft', 'ArrowDown', 'ArrowUp'],
  INVALID_KEYS: ['Enter', 'Tab', 'Escape', 'Shift', 'Control', 'Alt'],
  
  // Performance test data
  PERFORMANCE_TEST_DURATION: 30000, // 30 seconds
  STRESS_TEST_MOVES: 1000,
  
  // Browser-specific settings
  BROWSER_TIMEOUTS: {
    CHROMIUM: 5000,
    FIREFOX: 7000,
    WEBKIT: 6000
  }
};

export const TEST_SCENARIOS = {
  BASIC_FUNCTIONALITY: [
    'Game loads correctly',
    'Canvas is visible and functional',
    'Buttons are clickable',
    'Score starts at 0',
    'High score is displayed'
  ],
  
  GAME_CONTROLS: [
    'Start button starts the game',
    'Pause button pauses the game',
    'Resume button resumes the game',
    'Reset button resets the game',
    'Keyboard controls work',
    'WASD controls work',
    'Space bar pauses/resumes'
  ],
  
  GAME_MECHANICS: [
    'Snake moves in correct direction',
    'Snake grows when eating food',
    'Score increases when eating food',
    'Game speed increases with score',
    'Snake dies on wall collision',
    'Snake dies on self collision',
    'Food spawns in valid positions'
  ],
  
  EDGE_CASES: [
    'Rapid key presses',
    'Opposite direction input',
    'Invalid key inputs',
    'Game state transitions',
    'Canvas resizing',
    'Browser tab switching'
  ],
  
  USER_EXPERIENCE: [
    'Game over dialog appears',
    'Final score is displayed',
    'Play again button works',
    'High score is updated',
    'Game state persists',
    'Visual feedback is correct'
  ]
};

export const PERFORMANCE_BENCHMARKS = {
  MIN_FPS: 30,
  TARGET_FPS: 60,
  MAX_MEMORY_USAGE: 50, // MB
  MAX_LOAD_TIME: 3000, // ms
  MAX_RESPONSE_TIME: 100 // ms
};

export const ACCESSIBILITY_TESTS = {
  KEYBOARD_NAVIGATION: [
    'Tab navigation works',
    'Enter key activates buttons',
    'Space key pauses game',
    'Arrow keys control snake'
  ],
  
  SCREEN_READER_SUPPORT: [
    'Buttons have proper labels',
    'Score is announced',
    'Game state is communicated'
  ],
  
  VISUAL_ACCESSIBILITY: [
    'High contrast mode support',
    'Color blind friendly colors',
    'Clear visual indicators'
  ]
};
