// 定义类型断言函数，断言参数含 value 属性
function hasValue(it: unknown): it is ({ value: unknown }) {
  return typeof it === "object" && it !== null && "value" in it;
}

// 先断言（编译器会根据断言识别类型），再取值
function getValue(data: unknown): unknown {
  return hasValue(data) ? data.value : "";
}
