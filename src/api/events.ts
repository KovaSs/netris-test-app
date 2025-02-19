export const getVideoEvents = () => fetch("/api/XxfnKp")
.then((result) => {
  return result.json();
})
.catch((err) => {
  console.error(err);
})