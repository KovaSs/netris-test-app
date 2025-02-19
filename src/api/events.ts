export const getVideoEvents = () => fetch("/api/XxfnKp")
  .then((result) => result.json())
  .catch((err) => { console.error(err) })