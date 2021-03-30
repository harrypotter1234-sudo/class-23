class Ground{
constructor(){

this.body=Bodies.rectangle(200,390,400,10,{isStatic:true});
World.add(world,this.body)



}

display(){


rectMode(CENTER)
rect(this.body.position.x,this.body.position.y,400,10)




}








}