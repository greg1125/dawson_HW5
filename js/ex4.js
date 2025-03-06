const studentList = [
  { firstName: "Alan", lastName: "Able", scores: [95, 90, 87] },
  { firstName: "Alexander", lastName: "Best", scores: [100, 89, 97] },
  { firstName: "Cindy", lastName: "Chase", scores: [80, 75, 88] },
  { firstName: "Charles", lastName: "Chips", scores: [99, 100, 95] }
];

for (let i = 0; i < studentList.length; i++) {
  studentList[i].scores = studentList[i].scores.map(score => score + 5);
  const sumOfScores = studentList[i].scores.reduce((sum, score) => sum + score, 0);
  const avgScore = sumOfScores / studentList[i].scores.length;
  studentList[i].scores.push(avgScore);
  console.log(`Full name (last, first): ${studentList[i].lastName}, ${studentList[i].firstName}`);
  console.log(`Updated scores are: ${studentList[i].scores.join(",")}`);
  console.log("-----");
}
