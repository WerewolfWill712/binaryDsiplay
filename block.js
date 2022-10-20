class Block{
    constructor(x,y,s,on){
      this.x=x
      this.y=y
      this.s=s
      this.on=on
    }
    render = ()=>{
      if(this.on){
        fill(0)
        stroke(255)
      }else{
        stroke(0)
        fill(255)
      }
      circle(this.x+this.s/2,this.y+this.s/2,this.s)
    }
  }