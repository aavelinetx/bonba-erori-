input.onButtonPressed(Button.A, function () {
    bonba.move(-1)
})
input.onButtonPressed(Button.AB, function () {
    for (let index = 0; index < 4; index++) {
        bonba.change(LedSpriteProperty.Y, 1)
        basic.pause(500)
    }
    if (bonba.get(LedSpriteProperty.Y) == 4) {
        basic.showIcon(IconNames.Chessboard)
        basic.showIcon(IconNames.SmallDiamond)
        bonba.set(LedSpriteProperty.X, 2)
        bonba.set(LedSpriteProperty.Y, 0)
    }
})
input.onButtonPressed(Button.B, function () {
    bonba.move(1)
})
let bonba: game.LedSprite = null
bonba = game.createSprite(2, 0)
