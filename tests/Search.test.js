const dummyBreedImageData = [
  { id: "1", name: "Breed 1", url: "Url 1" },
  { id: "2", name: "Breed 2", url: "Url 2" },
  { id: "3", name: "Breed 3", url: "Url 3" }
]

test("Sees whether mapped values are correct", () => {
  expect(dummyBreedImageData.map((x) => x.url)).toStrictEqual([
    "Url 1",
    "Url 2",
    "Url 3"
  ])
})
