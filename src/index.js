import './css/styles.css';
import { createGame, refresh, submit } from './api.js';

const initialize = () => {
  const root = document.getElementById('root');

  const main = document.createElement('main');
  main.classList.add('d-flex', 'flex-col', 'align-center');
  const header = document.createElement('h1');
  header.innerText = 'Leaderboard';
  const section = document.createElement('section');
  section.classList.add('d-flex', 'justify-center', 'w-100');
  const div1 = document.createElement('div');
  div1.classList.add('p-20');
  const div1B = document.createElement('div');
  const secondHeader = document.createElement('h2');
  secondHeader.innerText = 'Recent scores';
  secondHeader.classList.add('d-inline', 'me-10');
  const refreshButton = document.createElement('button');
  refreshButton.id = 'refresh-btn';
  refreshButton.innerText = 'Refresh';
  refreshButton.classList.add('btn', 'd-inline', 'pos-rel', 'btn-shadow');
  const list = document.createElement('ul');
  list.id = 'scores';
  list.classList.add('d-block', 'mt-10', 'border', 'p-0', 'no-list-style');
  const div2 = document.createElement('div');
  div2.classList.add('p-20');
  const headerTwo = document.createElement('h2');
  headerTwo.innerText = 'Add your score';
  headerTwo.classList.add('d-inline');
  const form = document.createElement('form');
  const input1 = document.createElement('input');
  input1.id = 'nameInput';
  input1.classList.add('mt-10', 'border');
  input1.placeholder = 'Your Name';
  const br1 = document.createElement('br');
  const input2 = document.createElement('input');
  input2.id = 'scoreInput';
  input2.classList.add('mt-10', 'border');
  input2.placeholder = 'Your Score';
  const br2 = document.createElement('br');
  const submitButton = document.createElement('button');
  submitButton.id = 'submit-btn';
  submitButton.innerText = 'Submit';
  submitButton.classList.add('btn', 'mt-10', 'float-right', 'pos-rel', 'btn-shadow');

  form.append(input1, br1, input2, br2, submitButton);
  div2.append(headerTwo, form);
  div1B.append(secondHeader, refreshButton);
  div1.append(div1B, list);
  section.append(div1, div2);
  main.append(header, section);
  root.append(main);

  createGame();
  refresh();
  document.getElementById('refresh-btn').addEventListener('click', refresh);
  document.getElementById('submit-btn').addEventListener('click', submit);
};

document.addEventListener('DOMContentLoaded', initialize);
