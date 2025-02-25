import { renderSearch } from './search.js';

const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const rollNo = document.getElementById('rollNo');
const submitBtn = document.getElementById('submit');
const table = document.querySelector('.student-list');
const saveBtn = document.querySelector('.js-save-btn');

export let students = [
  {
    firstName: 'John',
    lastName: 'Doe',
    rollNo: 1,
    keywords: ['john', 'doe', '1'],
  },
  {
    firstName: 'Jane',
    lastName: 'Doe',
    rollNo: 2,
    keywords: ['jane', 'doe', '2'],
  },
  {
    firstName: 'Jim',
    lastName: 'Doe',
    rollNo: 3,
    keywords: ['jim', 'doe', '3'],
  },
];

function renderStudents() {
  table.innerHTML = '';
  students.forEach((student) => {
    const row = document.createElement('tr');
    row.className = `student-row-${student.rollNo}`;
    row.innerHTML = `
      <td>${student.firstName}</td>
      <td>${student.lastName}</td>
      <td>${student.rollNo}</td>
      <td>
        <a href="" class="btn btn-warning btn-sm edit edit-${student.rollNo}">Edit</a>
        <a href="" class="btn btn-danger btn-sm delete delete-${student.rollNo}">Delete</a>
      </td>
    `;
    table.appendChild(row);

    const deleteBtn = document.querySelector(`.delete-${student.rollNo}`);
    deleteBtn.addEventListener('click', (e) => {
      e.preventDefault();
      deleteStudent(student.rollNo);
      renderStudents();
    });

    const editBtn = document.querySelector(`.edit-${student.rollNo}`);
    editBtn.addEventListener('click', (e) => {
      e.preventDefault();
      getEditData(student.rollNo);
      editStudent(student.rollNo);
    });
  });
}
renderStudents();

function checkForm() {
  if (firstName.value === '' || lastName.value === '' || rollNo.value === '') {
    alert('Please fill in all fields');
  } else {
    const newStudent = {
      firstName: firstName.value,
      lastName: lastName.value,
      rollNo: +rollNo.value,
      keywords: [
        firstName.value.toLowerCase(),
        lastName.value.toLowerCase(),
        rollNo.value,
      ],
    };
    students.push(newStudent);
    renderStudents();
    firstName.value = '';
    lastName.value = '';
    rollNo.value = '';
  }
}

submitBtn.addEventListener('click', (event) => {
  event.preventDefault();
  checkForm();
});

renderSearch();

function deleteStudent(rollNo) {
  students = students.filter((student) => student.rollNo !== rollNo);
}

function getEditData(rollNum) {
  let editData = students.find((student) => student.rollNo === rollNum);

  firstName.value += editData.firstName;
  lastName.value += editData.lastName;
  rollNo.value += editData.rollNo;

  submitBtn.classList.add('d-none');
  saveBtn.classList.remove('d-none');
}

function editStudent(rollNum) {
  saveBtn.addEventListener('click', (e) => {
    e.preventDefault();

    let editedStudent = {
      firstName: firstName.value,
      lastName: lastName.value,
      rollNo: +rollNo.value,
      keywords: [
        firstName.value.toLowerCase(),
        lastName.value.toLowerCase(),
        rollNo.value,
      ],
    };

    let index = students.findIndex((student) => student.rollNo === rollNum);
    students[index] = editedStudent;

    renderStudents();

    saveBtn.classList.add('d-none');
    submitBtn.classList.remove('d-none');

    firstName.value = '';
    lastName.value = '';
    rollNo.value = '';
  });
}
