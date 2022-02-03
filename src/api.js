export const fetchPlayList = () => {
  return fetch("/playlist").then((resp) => resp.json());
};

export const updateTrack = (id, key, value) => {
  return fetch(`/playlist/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ [key]: value }),
  });
};
