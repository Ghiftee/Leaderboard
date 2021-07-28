const baseUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';

 const createGame = async () => {
  // Check if you have already created a game before
  if (localStorage.getItem('gameId')) return;

  // If you haven't, create a new game
  const game = {
    name: 'Awesome Game',
  };

  const response = await fetch(`${baseUrl}games/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(game),
  });
  const data = await response.json();
  const gameId = data.result.split(' ')[3];
  localStorage.setItem('gameId', gameId);
};

const refresh = async () => {
  const gameId = localStorage.getItem('gameId');
  const list = document.getElementById('scores');
  list.innerHTML = '';
  const response = await fetch(`${baseUrl}games/${gameId}/scores`);
  const scores = await response.json();
  scores.result.forEach((score, index) => {
    const li = document.createElement('li');
    li.innerText = `${score.user}: ${score.score}`;
    if (index % 2 === 0) li.classList.add('bg-gray');
    list.append(li);
  });
};

const submit = async (e) => {
  e.preventDefault();

  const gameId = localStorage.getItem('gameId');
  const nameELement = document.getElementById('nameInput');
  const scoreElement = document.getElementById('scoreInput');

  const newScore = {
    user: nameELement.value,
    score: scoreElement.value,
  };
  await fetch(`${baseUrl}games/${gameId}/scores`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newScore),
  });
  nameELement.value = '';
  scoreElement.value = '';
};

module.exports = { createGame, refresh, submit };
