import { GameLoop } from './components/GameLoop'

const canvas: HTMLCanvasElement = document.getElementById('race-me') as HTMLCanvasElement
const context: CanvasRenderingContext2D | null = canvas.getContext('2d')

// Setup canvas dimensions
function setupCanvasDimensions (width: number, height: number): void {
  canvas.width = width
  canvas.height = height
}
setupCanvasDimensions(window.innerWidth, window.innerHeight)

// On window resize adjust new dimensions
window.addEventListener('resize', () => { setupCanvasDimensions(window.innerWidth, window.innerHeight) })

const gameLoop = new GameLoop(canvas)

function animateCanvas (): void {
  context?.clearRect(0, 0, window.innerWidth, window.innerHeight)
  requestAnimationFrame(animateCanvas)
  gameLoop.render()
}
animateCanvas()
