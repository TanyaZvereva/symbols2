class Team {
  constructor() {
    }
    *[Symbol.iterator]() {
      yield {
        name: 'Лучник',
        type: 'Bowman',
        health: 50,
        level: 1,
        attack: 40,
        defence: 10
      }
      yield {
        name: 'Лучник',
        type: 'Bowman',
        health: 50,
        level: 1,
        attack: 40,
        defence: 10
      }
    }
}
const person = new Team()
for (const iterator of person) {
    console.log(iterator)
}
