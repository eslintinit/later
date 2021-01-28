const getTask = (name, description, status, id) => ({
  id,
  name: description,
  description,
  status,
})

const tasks = [
  getTask('do shit', 'do some shit', 'later', 1),
  getTask('do shit', 'do some other shit', 'later', 2),
  getTask('do shit', 'do shit because', 'later', 3),
  getTask('do shit', 'do shit then', 'later', 4),
  getTask('do shit', 'do shit because 1', 'next', 5),
  getTask('do shit', 'do shit because 2', 'next', 6),
  getTask('do shit', 'do shit because 3', 'next', 7),
  getTask('do shit', 'do 1because', 'done', 8),
  getTask('do shit', 'do 2because', 'done', 9),
  getTask('do shit', 'do 3because', 'done', 10),
]

export default tasks
