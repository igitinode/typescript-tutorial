enum Color {
  Red,
  Green,
  Blue,
}

// 通常会在 enum 关键字前面加上const修饰，表示这是常量，不能再次赋值。
const enum Color1 {
  Red = 0,
  Green = 1,
  Blue = 2,
  Yellow = 3,
}

const red = Color.Red
const redn = Color["Red"]
console.log(red)
console.log(redn)
