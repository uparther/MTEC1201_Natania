//Array is a data structure that can hold multiple values. Each value in an array is called an element, and each element has a numeric index that starts at 0.
//Array 是一種可以儲存多個值的資料結構。數組中的每個值都稱為“元素 element”，並且每個element都有一個從 0 開始的數字索引。

/*let x1 = 200
let x2 = 300
let x3 = 400 */

// instead of creating a variable for each value, we can store the values in an array
// 我們可以將值存儲在數組中，而不是為每個值創建一個變量

let xPosition = [200, 300, 400, 500, 600, 700]  // an array with 6 elements
let yPosition = [10, 20, 300, 150, 80, 5]  // an array with 6 elements
let colors = ['red', 'green', 'blue', 'yellow', 'purple', 'orange']  // an array with 6 elements

function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(220);
  fill('red')

  // instead of repeating the code 3 times [1], we can use a for loop to draw the circles
  for (let i = 0; i < xPosition.length; i++){   //for (let i = 0;  i < 3; i++) { 
    fill(colors[i])  // set the fill color to the color at index i in the colors array
    circle (xPosition[i], yPosition[i], 50)
    xPosition[i] += 5   // move the circle to the right
  }

  /*[1] circle (xPosition[0], 200, 50)  // starting from postion 0
  circle (xPosition[1], 200, 50)  // starting from postion 1
  circle (xPosition[2], 200, 50)  // starting from postion 2 */

}
