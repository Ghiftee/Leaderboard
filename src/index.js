import "./css/styles.css";

function initialize() {
  const root = document.getElementById('root');

  const main = document.createElement('main');
  main.classList.add('d-flex', 'flex-col', 'align-center')
  const header = document.createElement('h1');
  header.innerText = 'Leaderboard';
  const section = document.createElement('section');
  section.classList.add('d-flex', 'justify-center', 'w-100');
  const div1 = document.createElement('div');
  div1.classList.add('p-20');
  const div1_b = document.createElement('div');
  const second_header = document.createElement('h2');
  second_header.innerText = 'Recent scores'
  second_header.classList.add('d-inline', 'me-10');
  const refresh_button = document.createElement('button');
  refresh_button.innerText = 'Refresh';
  refresh_button.classList.add('btn', 'd-inline', 'pos-rel', 'btn-shadow');
  const list = document.createElement('ul');
  list.classList.add('d-block', 'mt-10', 'border');
  const div2 = document.createElement('div');
  div2.classList.add('p-20');
  const header_two = document.createElement('h2');
  header_two.innerText = 'Add your score';
  header_two.classList.add('d-inline');
  const form = document.createElement('form');
  const input1 = document.createElement('input');
  input1.classList.add('mt-10', 'border');
  input1.placeholder = 'Your Name';
  const br1 = document.createElement('br');
  const input2 = document.createElement('input');
  input2.classList.add('mt-10', 'border');
  input2.placeholder = 'Your Name';
  const br2 = document.createElement('br');
  const submit_button = document.createElement('button');
  submit_button.innerText = 'Submit';
  submit_button.classList.add('btn', 'mt-10', 'float-right', 'pos-rel', 'btn-shadow');

  form.append(input1, br1, input2, br2, submit_button);
  div2.append(header_two, form);
  div1_b.append(second_header, refresh_button);
  div1.append(div1_b, list)
  section.append(div1, div2)
  main.append(header, section);
  root.append(main);
}

document.addEventListener("DOMContentLoaded", initialize);

