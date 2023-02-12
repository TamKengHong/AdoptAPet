const defaultChoice = { id: "", name: "All", description: "All cat breeds!" }

const dummyBreedData = [
  { id: "1", name: "Breed 1", description: "Description 1" },
  { id: "2", name: "Breed 2", description: "Description 2" },
  { id: "3", name: "Breed 3", description: "Description 3" }
]

test("Sees whether breeds is appended properly", () => {
  const breeds = [defaultChoice, ...dummyBreedData]
  expect(breeds.length).toBe(4)
  expect(breeds[0]).toStrictEqual(defaultChoice)
})

test("Sees whether mapped values are correct", () => {
  const breeds = [defaultChoice, ...dummyBreedData]
  expect(breeds.map((x) => x.name)).toStrictEqual([
    "All",
    "Breed 1",
    "Breed 2",
    "Breed 3"
  ])
})
