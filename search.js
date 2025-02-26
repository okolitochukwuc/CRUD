// import { students } from './data.js';
import { students, deleteStudent } from './script.js';

const searchInput = document.querySelector('.search-input');
const searchBtn = document.getElementById('search-btn');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const rollNo = document.getElementById('rollNo');
const submitBtn = document.getElementById('submit');
const table = document.querySelector('.student-list');
const saveBtn = document.querySelector('.js-save-btn');
const searchSaveBtn = document.querySelector('.js-search-save-btn');

export function renderSearch() {
  let searchItem = '';

  searchInput.addEventListener('keydown', () => {
    searchItem = searchInput.value.toLowerCase();
  });

  searchBtn.addEventListener('click', () => {
    searchItem = searchInput.value.toLowerCase();

    let filteredStudents = students.filter((student) =>
      student.keywords.includes(searchItem)
    );

    filteredStudents.forEach((student) => {
      const studentCard = document.querySelector(
        `.student-row-${student.rollNo}`
      );
    });

    function renderFilteredStudents() {
      table.innerHTML = '';
      filteredStudents.forEach((student) => {
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
          deleteFilteredStudent(student.rollNo);
          renderFilteredStudents();
        });

        const editBtn = document.querySelector(`.edit-${student.rollNo}`);
        editBtn.addEventListener('click', (e) => {
          e.preventDefault();
          getEditData(student.rollNo);
          editStudent(student.rollNo);
        });
      });
    }

    function deleteFilteredStudent(rollNo) {
      filteredStudents = filteredStudents.filter(
        (student) => student.rollNo !== rollNo
      );

      deleteStudent(rollNo);
    }

    function getEditData(rollNum) {
      let editData = filteredStudents.find(
        (student) => student.rollNo === rollNum
      );

      firstName.value += editData.firstName;
      lastName.value += editData.lastName;
      rollNo.value += editData.rollNo;

      submitBtn.classList.add('d-none');
      searchSaveBtn.classList.remove('d-none');
    }

    function editStudent(rollNum) {
      searchSaveBtn.addEventListener('click', (e) => {
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

        let index = filteredStudents.findIndex(
          (student) => student.rollNo === rollNum
        );

        filteredStudents[index] = editedStudent;

        renderFilteredStudents();

        students.forEach((stud) => {
          if (
            stud.rollNo === rollNum ||
            (stud.firstName == firstName.value &&
              stud.lastName == lastName.value)
          ) {
            stud.firstName = editedStudent.firstName;
            stud.lastName = editedStudent.lastName;
            stud.rollNo = editedStudent.rollNo;
            stud.keywords = editedStudent.keywords;
          }
        });

        searchSaveBtn.classList.add('d-none');
        submitBtn.classList.remove('d-none');

        firstName.value = '';
        lastName.value = '';
        rollNo.value = '';
      });
    }

    renderFilteredStudents();
  });
}
