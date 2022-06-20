console.log("League of legend")
class Player{
    name1;
    name2;
    attack;
    blood1;
    blood2;
    constructor(name1,name2){
        this.name1 = name1
        this.name2 = name2
        this.attack1 = Math.floor(Math.random() * 300) + 200 
        this.attack2 = Math.floor(Math.random() * 300) + 200 
        this.blood1 = 100;
        this.blood2 = 100;
    }
   
    introduce1(){
        console.log(`this is player ${this.name1} with ${this.attack1} and ${this.blood1} blood.`)
    }
    introduce2(){
        console.log(`this is player ${this.name2} with ${this.attack2} and ${this.blood2} blood.`)

    }
     fight(a,b) {
        if(this.attack1 > this.attack2){
            a = this.attack1 - this.attack2
            this.blood1 = this.blood1 - a 
            if (this.blood1 == 0 || this.blood1 < 0){
            console.log(`after the fight with player ${this.name2},player ${this.name1} has 0 blood` )
                
            }
            else {
            console.log(`after the fight with player ${this.name2},player ${this.name1} has only ${this.blood1} blood` )
            }
        }
        else if(this.attack1 < this.attack2){
            b = this.attack1 - this.attack2
            this.blood2 = this.blood2 + b 
            if (this.blood2 == 0 || this.blood2 < 0){
            console.log(`after the fight with player ${this.name1},player ${this.name2} has 0 blood` )
            } 
            else {                    
            console.log(`after the fight with player ${this.name1},player ${this.name2} has only ${this.blood2} blood` )
            }
        }
        else {
            console.log("this is a drawn, no count")
        }
    }

    

}
const player = new Player("Yasuo", "Vladimir")

player.introduce1()
player.introduce2()
player.fight()
