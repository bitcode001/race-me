import { Player, type PlayerMovementActions } from './Player'

export class GameLoop {
  constructor (canvas: HTMLCanvasElement) {
    this.canvas = canvas
    this.canvasContext = canvas.getContext('2d')
    this.height = this.canvas.height
    this.width = this.canvas.width
    this.player = new Player({
      height: 200,
      width: 100,
      position: {
        x: 0,
        y: 0
      },
      spriteSrc: './assets/player_car_1.png'
    })
    this.movementActions = []

    window.addEventListener('keydown', (e: KeyboardEvent) => {
      const playerSpeed = 5
      switch (e.key) {
        case 'ArrowUp':
        case 'w':
          this.player.velocityY = -playerSpeed
          break
        case 'ArrowDown':
        case 's':
          this.player.velocityY = playerSpeed
          break
        case 'ArrowRight':
        case 'd':
          this.player.velocityX = playerSpeed
          break
        case 'ArrowLeft':
        case 'a':
          this.player.velocityX = -playerSpeed
          break
        default:
          break
      }
    })

    window.addEventListener('keyup', () => {
      this.player.velocityX = 0
      this.player.velocityY = 0
    })
  }

  canvas: HTMLCanvasElement
  canvasContext: CanvasRenderingContext2D | null
  height: number
  width: number
  player: Player
  movementActions: PlayerMovementActions[]

  validateAndPush (check: PlayerMovementActions): void {
    if (this.movementActions.length > 0 && this.movementActions.includes(check)) return

    this.movementActions.push(check)
  }

  render (): void {
    if (this.canvasContext != null) {
      // this.player.draw(this.canvasContext)
      this.player.update(this.canvasContext)
    }
  }
}
