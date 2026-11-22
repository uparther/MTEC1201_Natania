//Array is a data structure that can hold multiple values. Each value in an array is called an element, and each element has a numeric index that starts at 0.
//Array 是一种可以储存多个值的资料结构。数组中的每个值都称为“元素 element”，并且每个element都有一个从 0 开始的数字索引。

/*let x1 = 200  (例如我们平时到在let something = something)
let x2 = 300
let x3 = 400 */


//(现在我们就可以把全部数字放在同一条里面) (xPosition, yPosition 也是自己起名字)
let xPosition = [200, 300, 400, 500, 600, 700]  // an array with 6 elements
//------------------------------------------------------------------------------------
//[] 里面的数字都是随便输入的
let yPosition = [10, 20, 300, 150, 80, 5]  // an array with 6 elements
let colors = ['red', 'green', 'blue', 'yellow', 'purple', 'orange']  // an array with 6 elements

function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(220);
  fill('red')

  // instead of repeating the code 3 times [1], we can use a for loop to draw the circles
  //与其将代码重复 3 次 [1]，不如使用 for 循环来绘制这些圆。

  /*[1] 
  circle (xPosition[0], 200, 50)  // starting from postion 0   //(记得要从0开始) 
  circle (xPosition[1], 200, 50)  // starting from postion 1
  circle (xPosition[2], 200, 50)  // starting from postion 2 */

// [0] 就是上面let xPosition 里面的200； [1]就是300； [2]是400, 如此类推 

//如果要用for 
//for (let i = 0;  i < 3; i++) { 
// 中间条件；condition；  i < 3 通常改做 xPosition.length 是为了让代码能够自动适应数组长度的变化，避免程序出错。
  for (let i = 0; i < xPosition.length; i++){   
    fill(colors[i])  // set the fill color to the color at index i in the colors array 将填充颜色设置为 colors 数组中索引为 i 的颜色
    circle (xPosition[i], yPosition[i], 50) // xPos[i]和yPos[i] 也是上面let array中的 **全部** 數字
    xPosition[i] += 5   // move the circle to the right
  } 
}
