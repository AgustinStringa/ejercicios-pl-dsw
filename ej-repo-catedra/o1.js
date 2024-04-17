const grades = [
    { studentId: 66666, grade: 6 },
    { studentId: 12345, grade: 9 },
    { studentId: 66666, grade: 8 },
    { studentId: 12345, grade: 1 },
    { studentId: 51338, grade: 10 },
    { studentId: 66666, grade: 10 },

]

//
function getStudentsAverages(grades) {
    const gradesCopy = [].concat(grades);
    //ordenado por id
    (gradesCopy).sort(function compareFn(a, b) {
        if (a.studentId <= b.studentId) return 1
        if (a.studentId > b.studentId) return -1
    })

    const averages = [];
    let i = 0;

    while (i < gradesCopy.length) {
        let countNotes = 0;
        let accum = 0;
        let currentReg = gradesCopy[i]
        while (i < gradesCopy.length && currentReg.studentId == gradesCopy[i].studentId) {
            accum = accum + gradesCopy[i].grade;
            countNotes = countNotes + 1;
            i++;
        }
        averages.push({ studentId: currentReg.studentId, average: (accum / countNotes) })

    }
    return averages
}

console.log(getStudentsAverages(grades))