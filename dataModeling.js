// A team list with:
// - name
// - job position
// - role (editor, admin, no rights)
// - pets (with name and type)

const teamRole = {
  editor: 'editor',
  admin: 'admin',
  noRights: 'no rights',
};

const teamMembers = [
  {
    name: 'Antje',
    jobPosition: 'developer',
    role: teamRole.admin,
    pets: [
      { name: 'wuff', type: 'dog' },
      {
        name: 'miau',
        type: 'cat',
      },
    ],
  },
  {
    name: 'Karl',
    jobPosition: 'developer',
    role: teamRole.editor,
    pets: [],
  },
];

console.log(teamMembers);

// console.log(JSON.stringify(teamMembers, null, 2));

console.log(typeof teamMembers); // object
console.log(Array.isArray(teamMembers)); // true
console.log(Array.isArray({})); // false
console.log(teamMembers instanceof Array); // true
console.log(typeof null); // object
console.log(Array.isArray(teamMembers[0].pets)); // true
console.log(typeof teamMembers.name); // undefined
console.log(typeof teamMembers[0].name); // string

if (typeof teamMembers[0].name !== 'string') {
  throw new Error('name not a string!');
}

// Mutable
teamMembers.push({
  name: 'Hias',
  jobPosition: 'developer',
  role: teamRole.noRights,
  pets: [],
});

console.log('teamMembers after push', teamMembers);

// Immutable
const newTeamMembers = [
  ...teamMembers,
  {
    name: 'Lukas',
    jobPosition: 'developer',
    role: teamRole.noRights,
    pets: [],
  },
];

console.log('newTeamMembers', newTeamMembers);

// teamMembers[0].name = 'Victor';

// console.log('teamMember after name change', teamMembers);

const foundTeamMemberWithNameAntje = teamMembers.find(
  (teamMember) => teamMember.name === 'Antje',
);

console.log(foundTeamMemberWithNameAntje);

// Immutable

const updatedTeamMembers = teamMembers.map((teamMember) => {
  if (teamMember.name === 'Antje') {
    return {
      ...teamMember,
      name: 'Matthias',
    };
  }
  return teamMember;
});

console.log('updated teamMembers', updatedTeamMembers);
