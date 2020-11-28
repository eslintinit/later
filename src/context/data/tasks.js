const getTask = (name, description, status, id) => ({
  id,
  name,
  description,
  status,
})

const tasks = [
  getTask('do shit', 'do shit because', 'later', 1),
  getTask('do shit', 'do shit because', 'later', 2),
  getTask('do shit', 'do shit because', 'next', 3),
  getTask('do shit', 'do shit because', 'next', 4),
  getTask('do shit', 'do shit because', 'done', 5),
  getTask('do shit', 'do shit because', 'bin', 6),
]

export default tasks
