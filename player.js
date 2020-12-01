class Player{
    constructor(){}

    //Read the playerCount value from the database
    getCount(){
        database.ref("playerCount").on("value", function(data){
        playerCount = data.val()
        })
    }

    //write the playerCount value to the database
    updateCount(count){
        database.ref("/").update({
            playerCount : count
        })
    }

    updateInfo(name){
        database.ref("player"+playerCount).update({
            name : name
        })
    }  
}