class Form{
constructor(){}
display(){
    //createElement is used to create heading and h2 is the size of the heading
    var title = createElement('h2')
    //.html is used to give the content in the heading
    title.html('Car Racing')
    title.position(130,0)
    
    //createInput creates the input place
    var input = createInput('Name')
    input.position(130,160)

    //createButton creates a button
    var button = createButton('Start')
    button.position(250,200)

    button.mousePressed(function(){
        input.hide()
        button.hide()
        var name = input.value()
        playerCount += 1
        player.updateInfo(name)
        player.updateCount(playerCount)
        var greeting = createElement('h3')
    greeting.html('Hello '+ name)
    greeting.position(130,160)
    })
}
}