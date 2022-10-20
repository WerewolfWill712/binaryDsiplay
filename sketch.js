let size;
let iter;
let input;

function setup() {
  let canvas = createCanvas(400, 400);
  canvas.parent('sketch-content')
  iter = 8
  size = height/iter
}

function textToBin(text) {
  var length = text.length,
      output = [];
  for (var i = 0;i < length; i++) {
    var bin = text[i].charCodeAt().toString(2);
    output.push(Array(8-bin.length+1).join("0") + bin);
  } 
  return output.map(
    letter=>(
      letter.split("")
      .map(
        num=>(
          Number(num)
        )
      )
    )
  );
}

function draw() {
  noLoop()
  background(0)
  document.querySelector("#submit").addEventListener("click",()=>{
    let squares = []
    let input = textToBin(document.querySelector("#input").value)
    console.log(input)
    input.forEach((letter,j)=>{
      for (let i = 0; i < iter; i++) {
        squares.push(new Block(size*i,size*j,size,letter[i]))
      }
    })
    squares.forEach(block => {
      block.render()
    });
  })
  
}
