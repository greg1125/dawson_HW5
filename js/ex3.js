const studentList = [
  { firstName: "Alan", lastName: "Bieber", scores: [80, 90, 50, 100] },
  { firstName: "Amy", lastName: "Reindeer", scores: [60, 40, 70, 60] },
  { firstName: "Sam", lastName: "Berns", scores: [90, 80, 80, 80] },
  { firstName: "Bob", lastName: "Seeya", scores: [70, 80, 40, 90] },
  { firstName: "Cindy", lastName: "Chase", scores: [90, 80, 99, 75] },
  { firstName: "Charles", lastName: "Chips", scores: [88, 100, 99, 92] }
];

const cLastNameResults = studentList
  .filter(student => student.lastName.startsWith("C"))
  .map(student => {
    const minScore = student.scores.reduce((min, score) => (score < min ? score : min));
    const maxScore = student.scores.reduce((max, score) => (score > max ? score : max));
    const avgScore = student.scores.reduce((sum, score) => sum + score, 0) / student.scores.length;

    return {
      firstName: student.firstName,
      lastName: student.lastName,
      minScore,
      maxScore,
      avgScore
    };
  });

console.log(cLastNameResults);
