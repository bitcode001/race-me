import { Sprite } from './Sprite'
import { type GameEntity } from './typedef'

export type PlayerMovementActions = 'ArrowDown' | 'ArrowUp' | 'ArrowLeft' | 'ArrowRight'

export class Player extends Sprite {
  constructor ({ spriteSrc, position, width, height }: GameEntity) {
    super({ spriteSrc, position, width, height })
    this.velocityX = 0
    this.velocityY = 0
  }

  velocityX: number
  velocityY: number

  override update (context: CanvasRenderingContext2D): void {
    context.drawImage(this.image, this.position.x += this.velocityX, this.position.y += this.velocityY, this.width, this.height)
    // this.position.x = this.position.x += 0.1
    // this.position.y = this.position.y += 2
  }
}
