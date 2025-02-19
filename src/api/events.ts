export const getVideoEvents = () => fetch("/api/XxfnKp")
  .then((result) => result.json())
  .catch((err) => { 
    throw new Error(err);
  })