sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    Interactable.setPosition(randint(10, 150), randint(10, 110))
    Interactable.startEffect(effects.confetti)
    info.changeScoreBy(1)
    info.changeCountdownBy(2)
    scene.cameraShake(2, 200)
    pause(500)
    effects.clearParticles(Interactable)
})
let Interactable: Sprite = null
scene.setBackgroundColor(3)
let MainChar = sprites.create(img`
    ..............................
    ..............................
    ..............................
    ..............................
    ..............................
    ..............................
    ..............................
    ..............................
    ..............................
    ..............................
    ..............................
    ..............................
    ..............................
    ..............................
    .............fff..............
    .............ffff.............
    ............f111f.............
    ............fffff.............
    .........fffffff..............
    ........fffffff...............
    .......fff.ffffff.............
    .......ff.fffffff.............
    ......fff.ffff.fff............
    ......ff..2222..fff...........
    .......222fffff...............
    ........ffffffff..............
    .......ffff..fff..............
    .......ff.....ff..............
    .......ff.....fff.............
    .......fff....fff.............
    `, SpriteKind.Player)
controller.moveSprite(MainChar, 35, 40)
MainChar.setStayInScreen(true)
Interactable = sprites.create(img`
    ..............................
    ..............................
    ..............................
    ..............................
    ..............................
    ...............bb.............
    ...............bb.............
    ..............bbb.............
    .............bbbb.............
    ............bb1bbb............
    ...........bb11bbb............
    ...........b11bbbb............
    ..........bb1bbbbbb...........
    .........bb11bbbbbb...........
    ......ccbbbbbbbbbbb...........
    ....cccbbbbbbbbbbbb...........
    ...ccccbbbbbbbbbbbbb..........
    .....ccccbbbbbbbbbbbc.........
    ......cccbbbbbbbbbbbcc........
    ........ccbbbbbbbbccccc.......
    .........ccbbbbbccccccc.......
    .........cccbbcc....cccc......
    .........ccccccc..............
    ..........ccccc...............
    ..........cccc................
    ..........ccc.................
    ..........cc..................
    ..........c...................
    ..............................
    ..............................
    `, SpriteKind.Food)
Interactable.setPosition(randint(10, 150), randint(10, 110))
info.setScore(0)
info.startCountdown(20)
