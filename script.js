// import { students } from './data.js';
import { renderSearch } from './search.js';

const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const rollNo = document.getElementById('rollNo');
const submitBtn = document.getElementById('submit');
const table = document.querySelector('.student-list');
const saveBtn = document.querySelector('.js-save-btn');

export let students = [
  {
    firstName: 'john',
    lastName: 'Doe',
    rollNo: 1,
    keywords: ['john', 'doe', '1'],
  },
  {
    firstName: 'jane',
    lastName: 'Smith',
    rollNo: 2,
    keywords: ['jane', 'smith', '2'],
  },
  {
    firstName: 'michael',
    lastName: 'Johnson',
    rollNo: 3,
    keywords: ['michael', 'johnson', '3'],
  },
  {
    firstName: 'mary',
    lastName: 'Williams',
    rollNo: 4,
    keywords: ['mary', 'williams', '4'],
  },
  {
    firstName: 'david',
    lastName: 'Brown',
    rollNo: 5,
    keywords: ['david', 'brown', '5'],
  },
  {
    firstName: 'emily',
    lastName: 'Jones',
    rollNo: 6,
    keywords: ['emily', 'jones', '6'],
  },
  {
    firstName: 'daniel',
    lastName: 'Miller',
    rollNo: 7,
    keywords: ['daniel', 'miller', '7'],
  },
  {
    firstName: 'susan',
    lastName: 'Davis',
    rollNo: 8,
    keywords: ['susan', 'davis', '8'],
  },
  {
    firstName: 'paul',
    lastName: 'Garcia',
    rollNo: 9,
    keywords: ['paul', 'garcia', '9'],
  },
  {
    firstName: 'lisa',
    lastName: 'Martinez',
    rollNo: 10,
    keywords: ['lisa', 'martinez', '10'],
  },
  {
    firstName: 'james',
    lastName: 'Hernandez',
    rollNo: 11,
    keywords: ['james', 'hernandez', '11'],
  },
  {
    firstName: 'sarah',
    lastName: 'Lopez',
    rollNo: 12,
    keywords: ['sarah', 'lopez', '12'],
  },
  {
    firstName: 'robert',
    lastName: 'Gonzalez',
    rollNo: 13,
    keywords: ['robert', 'gonzalez', '13'],
  },
  {
    firstName: 'linda',
    lastName: 'Wilson',
    rollNo: 14,
    keywords: ['linda', 'wilson', '14'],
  },
  {
    firstName: 'william',
    lastName: 'Anderson',
    rollNo: 15,
    keywords: ['william', 'anderson', '15'],
  },
  {
    firstName: 'patricia',
    lastName: 'Thomas',
    rollNo: 16,
    keywords: ['patricia', 'thomas', '16'],
  },
  {
    firstName: 'joseph',
    lastName: 'Taylor',
    rollNo: 17,
    keywords: ['joseph', 'taylor', '17'],
  },
  {
    firstName: 'karen',
    lastName: 'Moore',
    rollNo: 18,
    keywords: ['karen', 'moore', '18'],
  },
  {
    firstName: 'charles',
    lastName: 'Jackson',
    rollNo: 19,
    keywords: ['charles', 'jackson', '19'],
  },
  {
    firstName: 'nancy',
    lastName: 'White',
    rollNo: 20,
    keywords: ['nancy', 'white', '20'],
  },
  {
    firstName: 'jose',
    lastName: 'Harris',
    rollNo: 21,
    keywords: ['jose', 'harris', '21'],
  },
  {
    firstName: 'betty',
    lastName: 'Martin',
    rollNo: 22,
    keywords: ['betty', 'martin', '22'],
  },
  {
    firstName: 'steven',
    lastName: 'Thompson',
    rollNo: 23,
    keywords: ['steven', 'thompson', '23'],
  },
  {
    firstName: 'dorothy',
    lastName: 'Garcia',
    rollNo: 24,
    keywords: ['dorothy', 'garcia', '24'],
  },
  {
    firstName: 'anna',
    lastName: 'Martinez',
    rollNo: 25,
    keywords: ['anna', 'martinez', '25'],
  },
  {
    firstName: 'joshua',
    lastName: 'Rodriguez',
    rollNo: 26,
    keywords: ['joshua', 'rodriguez', '26'],
  },
  {
    firstName: 'victoria',
    lastName: 'Lopez',
    rollNo: 27,
    keywords: ['victoria', 'lopez', '27'],
  },
  {
    firstName: 'aaron',
    lastName: 'Walker',
    rollNo: 28,
    keywords: ['aaron', 'walker', '28'],
  },
  {
    firstName: 'olivia',
    lastName: 'King',
    rollNo: 29,
    keywords: ['olivia', 'king', '29'],
  },
  {
    firstName: 'matthew',
    lastName: 'Scott',
    rollNo: 30,
    keywords: ['matthew', 'scott', '30'],
  },
  {
    firstName: 'ellen',
    lastName: 'Adams',
    rollNo: 31,
    keywords: ['ellen', 'adams', '31'],
  },
  {
    firstName: 'jacob',
    lastName: 'Baker',
    rollNo: 32,
    keywords: ['jacob', 'baker', '32'],
  },
  {
    firstName: 'heather',
    lastName: 'Carter',
    rollNo: 33,
    keywords: ['heather', 'carter', '33'],
  },
  {
    firstName: 'gary',
    lastName: 'Mitchell',
    rollNo: 34,
    keywords: ['gary', 'mitchell', '34'],
  },
  {
    firstName: 'diana',
    lastName: 'Perez',
    rollNo: 35,
    keywords: ['diana', 'perez', '35'],
  },
  {
    firstName: 'thomas',
    lastName: 'Roberts',
    rollNo: 36,
    keywords: ['thomas', 'roberts', '36'],
  },
  {
    firstName: 'sophia',
    lastName: 'Evans',
    rollNo: 37,
    keywords: ['sophia', 'evans', '37'],
  },
  {
    firstName: 'nathan',
    lastName: 'Green',
    rollNo: 38,
    keywords: ['nathan', 'green', '38'],
  },
  {
    firstName: 'andrew',
    lastName: 'Hall',
    rollNo: 39,
    keywords: ['andrew', 'hall', '39'],
  },
  {
    firstName: 'samantha',
    lastName: 'Allen',
    rollNo: 40,
    keywords: ['samantha', 'allen', '40'],
  },
  {
    firstName: 'johnathan',
    lastName: 'Young',
    rollNo: 41,
    keywords: ['johnathan', 'young', '41'],
  },
  {
    firstName: 'brandon',
    lastName: 'King',
    rollNo: 42,
    keywords: ['brandon', 'king', '42'],
  },
  {
    firstName: 'alexandra',
    lastName: 'Wright',
    rollNo: 43,
    keywords: ['alexandra', 'wright', '43'],
  },
  {
    firstName: 'gregory',
    lastName: 'Lopez',
    rollNo: 44,
    keywords: ['gregory', 'lopez', '44'],
  },
  {
    firstName: 'rachel',
    lastName: 'Harris',
    rollNo: 45,
    keywords: ['rachel', 'harris', '45'],
  },
  {
    firstName: 'stephanie',
    lastName: 'Nelson',
    rollNo: 46,
    keywords: ['stephanie', 'nelson', '46'],
  },
  {
    firstName: 'frank',
    lastName: 'Carter',
    rollNo: 47,
    keywords: ['frank', 'carter', '47'],
  },
  {
    firstName: 'vanessa',
    lastName: 'Perez',
    rollNo: 48,
    keywords: ['vanessa', 'perez', '48'],
  },
  {
    firstName: 'henry',
    lastName: 'Mitchell',
    rollNo: 49,
    keywords: ['henry', 'mitchell', '49'],
  },
  {
    firstName: 'melissa',
    lastName: 'Collins',
    rollNo: 50,
    keywords: ['melissa', 'collins', '50'],
  },
  {
    firstName: 'patrick',
    lastName: 'Parker',
    rollNo: 51,
    keywords: ['patrick', 'parker', '51'],
  },
  {
    firstName: 'zachary',
    lastName: 'Evans',
    rollNo: 52,
    keywords: ['zachary', 'evans', '52'],
  },
  {
    firstName: 'julia',
    lastName: 'Edwards',
    rollNo: 53,
    keywords: ['julia', 'edwards', '53'],
  },
  {
    firstName: 'morgan',
    lastName: 'Turner',
    rollNo: 54,
    keywords: ['morgan', 'turner', '54'],
  },
  {
    firstName: 'brian',
    lastName: 'Morris',
    rollNo: 55,
    keywords: ['brian', 'morris', '55'],
  },
  {
    firstName: 'lily',
    lastName: 'Morgan',
    rollNo: 56,
    keywords: ['lily', 'morgan', '56'],
  },
  {
    firstName: 'victor',
    lastName: 'Lee',
    rollNo: 57,
    keywords: ['victor', 'lee', '57'],
  },
  {
    firstName: 'catherine',
    lastName: 'Roberts',
    rollNo: 58,
    keywords: ['catherine', 'roberts', '58'],
  },
  {
    firstName: 'timothy',
    lastName: 'Clark',
    rollNo: 59,
    keywords: ['timothy', 'clark', '59'],
  },
  {
    firstName: 'lucy',
    lastName: 'Rodriguez',
    rollNo: 60,
    keywords: ['lucy', 'rodriguez', '60'],
  },
  {
    firstName: 'bruce',
    lastName: 'Walker',
    rollNo: 61,
    keywords: ['bruce', 'walker', '61'],
  },
  {
    firstName: 'nina',
    lastName: 'White',
    rollNo: 62,
    keywords: ['nina', 'white', '62'],
  },
  {
    firstName: 'oliver',
    lastName: 'Martinez',
    rollNo: 63,
    keywords: ['oliver', 'martinez', '63'],
  },
  {
    firstName: 'ruth',
    lastName: 'Hernandez',
    rollNo: 64,
    keywords: ['ruth', 'hernandez', '64'],
  },
  {
    firstName: 'greg',
    lastName: 'Gonzalez',
    rollNo: 65,
    keywords: ['greg', 'gonzalez', '65'],
  },
  {
    firstName: 'tina',
    lastName: 'King',
    rollNo: 66,
    keywords: ['tina', 'king', '66'],
  },
  {
    firstName: 'adam',
    lastName: 'Scott',
    rollNo: 67,
    keywords: ['adam', 'scott', '67'],
  },
  {
    firstName: 'claire',
    lastName: 'Roberts',
    rollNo: 68,
    keywords: ['claire', 'roberts', '68'],
  },
  {
    firstName: 'gavin',
    lastName: 'Evans',
    rollNo: 69,
    keywords: ['gavin', 'evans', '69'],
  },
  {
    firstName: 'laura',
    lastName: 'Young',
    rollNo: 70,
    keywords: ['laura', 'young', '70'],
  },
  {
    firstName: 'ellen',
    lastName: 'Mitchell',
    rollNo: 71,
    keywords: ['ellen', 'mitchell', '71'],
  },
  {
    firstName: 'jeremy',
    lastName: 'Perez',
    rollNo: 72,
    keywords: ['jeremy', 'perez', '72'],
  },
  {
    firstName: 'claudia',
    lastName: 'Williams',
    rollNo: 73,
    keywords: ['claudia', 'williams', '73'],
  },
  {
    firstName: 'aaron',
    lastName: 'Taylor',
    rollNo: 74,
    keywords: ['aaron', 'taylor', '74'],
  },
  {
    firstName: 'kyle',
    lastName: 'Parker',
    rollNo: 75,
    keywords: ['kyle', 'parker', '75'],
  },
  {
    firstName: 'lauren',
    lastName: 'Young',
    rollNo: 76,
    keywords: ['lauren', 'young', '76'],
  },
  {
    firstName: 'chloe',
    lastName: 'Robinson',
    rollNo: 77,
    keywords: ['chloe', 'robinson', '77'],
  },
  {
    firstName: 'kevin',
    lastName: 'Lopez',
    rollNo: 78,
    keywords: ['kevin', 'lopez', '78'],
  },
  {
    firstName: 'george',
    lastName: 'Morris',
    rollNo: 79,
    keywords: ['george', 'morris', '79'],
  },
  {
    firstName: 'monica',
    lastName: 'Roberts',
    rollNo: 80,
    keywords: ['monica', 'roberts', '80'],
  },
  {
    firstName: 'brittany',
    lastName: 'Harris',
    rollNo: 81,
    keywords: ['brittany', 'harris', '81'],
  },
  {
    firstName: 'samantha',
    lastName: 'Morris',
    rollNo: 82,
    keywords: ['samantha', 'morris', '82'],
  },
  {
    firstName: 'frank',
    lastName: 'Smith',
    rollNo: 83,
    keywords: ['frank', 'smith', '83'],
  },
  {
    firstName: 'carolyn',
    lastName: 'Turner',
    rollNo: 84,
    keywords: ['carolyn', 'turner', '84'],
  },
  {
    firstName: 'william',
    lastName: 'Taylor',
    rollNo: 85,
    keywords: ['william', 'taylor', '85'],
  },
  {
    firstName: 'peter',
    lastName: 'Scott',
    rollNo: 86,
    keywords: ['peter', 'scott', '86'],
  },
  {
    firstName: 'lindsey',
    lastName: 'Anderson',
    rollNo: 87,
    keywords: ['lindsey', 'anderson', '87'],
  },
  {
    firstName: 'mark',
    lastName: 'Young',
    rollNo: 88,
    keywords: ['mark', 'young', '88'],
  },
  {
    firstName: 'deborah',
    lastName: 'Parker',
    rollNo: 89,
    keywords: ['deborah', 'parker', '89'],
  },
  {
    firstName: 'jared',
    lastName: 'Nelson',
    rollNo: 90,
    keywords: ['jared', 'nelson', '90'],
  },
  {
    firstName: 'tiffany',
    lastName: 'White',
    rollNo: 91,
    keywords: ['tiffany', 'white', '91'],
  },
  {
    firstName: 'zachary',
    lastName: 'Martin',
    rollNo: 92,
    keywords: ['zachary', 'martin', '92'],
  },
  {
    firstName: 'olga',
    lastName: 'Johnson',
    rollNo: 93,
    keywords: ['olga', 'johnson', '93'],
  },
  {
    firstName: 'natalie',
    lastName: 'Thomas',
    rollNo: 94,
    keywords: ['natalie', 'thomas', '94'],
  },
  {
    firstName: 'aiden',
    lastName: 'Davis',
    rollNo: 95,
    keywords: ['aiden', 'davis', '95'],
  },
  {
    firstName: 'vicky',
    lastName: 'Adams',
    rollNo: 96,
    keywords: ['vicky', 'adams', '96'],
  },
  {
    firstName: 'jacob',
    lastName: 'Nelson',
    rollNo: 97,
    keywords: ['jacob', 'nelson', '97'],
  },
  {
    firstName: 'lucas',
    lastName: 'White',
    rollNo: 98,
    keywords: ['lucas', 'white', '98'],
  },
  {
    firstName: 'violet',
    lastName: 'Scott',
    rollNo: 99,
    keywords: ['violet', 'scott', '99'],
  },
  {
    firstName: 'arnold',
    lastName: 'Williams',
    rollNo: 100,
    keywords: ['arnold', 'williams', '100'],
  },
];

function renderStudents() {
  console.log(students.length);
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

export function deleteStudent(rollNo) {
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
