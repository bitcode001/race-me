import { Sprite } from './Sprite'
import { type GameEntity } from './typedef'

export class RaceTrack extends Sprite {
  constructor ({ spriteSrc, position, width, height }: GameEntity) {
    super({ spriteSrc, position, width, height })
  }

  override update (context: CanvasRenderingContext2D): void {
    context.drawImage(this.image, this.position.x, this.position.y)
  }
}
