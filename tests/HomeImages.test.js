function groupBy(arr, n) {
  let group = []
  for (let i = 0; i < arr.length / n; i++) {
    group.push(arr.slice(i * n, (i + 1) * n))
  }
  return group
}

test("Checks groupBy functionality on empty list", () => {
  expect(groupBy([], 1)).toStrictEqual([])
  expect(groupBy([], 3)).toStrictEqual([])
})

test("Checks groupBy functionality on non-empty list", () => {
  expect(groupBy([1, 2, 3, 4], 1)).toStrictEqual([[1], [2], [3], [4]])
  expect(groupBy([1, 2, 3, 4, 5, 6, 7], 3)).toStrictEqual([
    [1, 2, 3],
    [4, 5, 6],
    [7]
  ])
})
