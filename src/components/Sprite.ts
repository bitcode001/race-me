import { type GameEntity } from './typedef'

export class Sprite {
  constructor ({ spriteSrc, position, width, height }: GameEntity) {
    this.image = new Image()
    this.image.onload = () => {
      this.loaded = true
    }
    this.image.src = spriteSrc
    this.position = position
    this.width = width
    this.height = height
    this.loaded = false
  }

  image: HTMLImageElement
  position: { x: number, y: number }
  width: number
  height: number
  loaded: boolean

  draw (context: CanvasRenderingContext2D): void {
    if (!this.loaded) return
    context.drawImage(this.image, this.position.x, this.position.y, this.width, this.height)
  }

  update (context: CanvasRenderingContext2D): void {
    if (!this.loaded) return
    context.drawImage(this.image, this.position.x, this.position.y, this.width, this.height)
  }
}
