const enum Color {
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
const redn = Color1["Yellow"]

console.log(red)
console.log(redn)

// 多个同名的 Enum 结构会自动合并。
// 同名Enum 结构合并时，只允许其中一个的首成员省略初始值，否则报错。
// 除了数值和字符串，Enum 成员不允许使用其他值（比如 Symbol 值）。

enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}

enum MyEnum {
  One = "One",
  Two = "Two",
}

// 变量类型如果是字符串 Enum，就不能再赋值为字符串，这跟数值 Enum 不一样。
let s = MyEnum.One
// s = 'One'; // 报错

// 上面示例中，函数fetch()的参数对象的属性Accept，只能接受一些指定的字符串。
// 这时就很适合把字符串放进一个 Enum 结构，通过成员值来引用这些字符串。
const enum MediaTypes {
  JSON = "application/json",
  XML = "application/xml",
}

const url = "localhost"

fetch(url, {
  headers: {
    Accept: MediaTypes.JSON,
  },
}).then(response => {
  // ...
})

// 注意，字符串 Enum 的成员值，不能使用表达式赋值。
enum MyEnum1 {
  A = "one",
  // B = ["T", "w", "o"].join(""), // 报错
}
// 上面示例中，成员B的值是一个字符串表达式，导致报错。

// keyof 运算符
// keyof 运算符可以取出 Enum 结构的所有成员名，作为联合类型返回。
enum MyEnum {
  A = "a",
  B = "b",
}

// 'A'|'B'
type Foo = keyof typeof MyEnum
type Foo1 = keyof MyEnum

// 反向映射:只发生在数值 Enum 的时候
// 不能添加const
enum Weekdays {
  Monday = 1,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

console.log(Weekdays[3])

// 编译后的 Code
// (function (Weekdays) {
//   Weekdays[(Weekdays["Monday"] = 1)] = "Monday"
//   Weekdays[(Weekdays["Tuesday"] = 2)] = "Tuesday"
//   Weekdays[(Weekdays["Wednesday"] = 3)] = "Wednesday"
//   Weekdays[(Weekdays["Thursday"] = 4)] = "Thursday"
//   Weekdays[(Weekdays["Friday"] = 5)] = "Friday"
//   Weekdays[(Weekdays["Saturday"] = 6)] = "Saturday"
//   Weekdays[(Weekdays["Sunday"] = 7)] = "Sunday"
// })(Weekdays || (Weekdays = {}))

// 上面代码中，实际进行了两组赋值，以第一个成员为例。
// Weekdays[(Weekdays["Monday"] = 1)] = "Monday"
// 上面代码有两个赋值运算符（=），实际上等同于下面的代码。
// Weekdays["Monday"] = 1;
// Weekdays[1] = "Monday";
// 注意，这种情况只发生在数值 Enum，对于字符串 Enum，不存在反向映射。这是因为字符串 Enum 编译后只有一组赋值。

// enum MyEnum {
//   A = "a",
//   B = "b",
// }

// // 编译后
// var MyEnum
// ;(function (MyEnum) {
//   MyEnum["A"] = "a"
//   MyEnum["B"] = "b"
// })(MyEnum || (MyEnum = {}))
