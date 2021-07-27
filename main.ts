sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Food, function (sprite, otherSprite) {
    uwu = randint(1, 30)
    if (uwu == 1) {
        otherSprite.destroy()
    }
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    sprite.destroy(effects.trail, 100)
    info.changeLifeBy(-1)
})
info.onLifeZero(function () {
    game.over(false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeLifeBy(1)
    music.baDing.playUntilDone()
    otherSprite.destroy()
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    uwu = randint(1, 20)
    if (uwu == 1) {
        otherSprite.destroy()
        info.changeScoreBy(10000000)
    }
})
let ret43egerfg: Sprite = null
let projefewmfiej2: Sprite = null
let projectile: Sprite = null
let ENEmyeswwfe: Sprite = null
let mySprite2: Sprite = null
let uwu = 0
let _4tw34t43t43t = 3000
let mySprite = sprites.create(img`
    ....555555555555555555555555
    ....555555555555555555555555
    ....555555555555555555555555
    ....555555555555555555555555
    5555ffff2222555555552222ffff
    5555ffff2222555555552222ffff
    5555ffff2222555555552222ffff
    5555ffff2222555555552222ffff
    5555555555555555555555555555
    5555555555555555555555555555
    5555555555555555555555555555
    5555555555555555555555555555
    ....555555555555555555555555
    ....555555555555555555555555
    ....555555555555555555555555
    ....555555555555555555555555
    `, SpriteKind.Player)
info.setLife(3)
mySprite.setPosition(20, 60)
controller.moveSprite(mySprite, 100, 100)
game.onUpdateInterval(5000, function () {
    mySprite2 = sprites.create(img`
        . . . . 7 7 7 7 7 7 7 . . . . 
        . . 7 7 7 7 7 7 7 7 7 7 7 . . 
        . 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
        . 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        . 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
        . 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
        . . 7 7 7 7 7 7 7 7 7 7 7 . . 
        . . . . 7 7 7 7 7 7 7 . . . . 
        `, SpriteKind.Food)
    mySprite2.startEffect(effects.trail)
    mySprite2.setPosition(160, randint(8, 112))
    mySprite2.setVelocity(-50, 0)
})
game.onUpdateInterval(_4tw34t43t43t, function () {
    ENEmyeswwfe = sprites.create(img`
        . . . . 2 2 2 2 2 2 2 . . . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 . . 
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
        2 f f f 1 1 1 2 f f f 1 1 1 2 
        2 f f f 1 1 1 2 f f f 1 1 1 2 
        2 f f f 1 1 1 2 f f f 1 1 1 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 f 2 2 2 2 2 f 2 2 2 2 
        2 2 2 2 2 f f f f f 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
        . . 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . . . 2 2 2 2 2 2 2 . . . . 
        `, SpriteKind.Enemy)
    ENEmyeswwfe.setPosition(160, randint(8, 112))
    ENEmyeswwfe.setVelocity(-50, 0)
})
forever(function () {
    if (!(controller.A.isPressed())) {
        if (randint(1, 2) == 2) {
            projectile = sprites.createProjectileFromSprite(img`
                2 2 
                `, mySprite, 2000, 1)
            projectile.setPosition(projectile.x + randint(0, 10), projectile.y + randint(-20, 20))
        }
        if (randint(1, 2) == 2) {
            projefewmfiej2 = sprites.createProjectileFromSprite(img`
                7 7 
                `, mySprite, 2000, 1)
            projefewmfiej2.setPosition(projefewmfiej2.x + randint(0, 10), projefewmfiej2.y + randint(-20, 20))
        }
        if (randint(1, 2) == 2) {
            ret43egerfg = sprites.createProjectileFromSprite(img`
                9 9 
                `, mySprite, 2000, 1)
            ret43egerfg.setPosition(ret43egerfg.x + randint(0, 10), ret43egerfg.y + randint(-20, 20))
        }
    }
    if (info.score() == 50) {
        game.over(true)
    }
    _4tw34t43t43t = randint(2000, 4000)
})
