
class Storage{

    constructor(){
        localStorage.turn = 0;
        localStorage.score = 0;
    }


    ResetStorage(){
        localStorage.turn = 0;
        localStorage.score = 0;
    }

    addScore(){
        localStorage.score+=1
    }

    addTurn(){
        localStorage.turn+=1
    }

    getTurn(){
        return localStorage.turn
    }

    getScore(){
        return localStorage.score
    }

}