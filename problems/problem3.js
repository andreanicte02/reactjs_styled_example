const questionList = [
    {
        questionId: 1,
        questionName: 'What is your favorite color?',
        answers: [
            {answerName: 'Red', answerId: 11},
            {answerName: 'Blue', answerId: 12},
            {answerName: 'Pink', answerId: 13},
        ]
    },
    {
        questionId: 2,
        questionName: 'Are you a flat-earther?',
        answers: [
            {answerName: 'Yes', answerId: 21},
            {answerName: 'No', answerId: 22}
        ]
    }
];

console.log('First answer:')
console.log(questionList.reduce((previousValue, currentValue) => previousValue * currentValue.answers.length, 1));


const headers = questionList.reduce((previousValue, currentValue) => {
    previousValue.push(currentValue.questionName);
    return previousValue;
}, [])


let problem3 = [];

const generateCombinations = (list, index) => {
    if (index === questionList.length) {
        problem3.push(list.join(', '));
        return;
    }

    for (let i = 0; i < questionList[index].answers.length; i++) {
        generateCombinations([...list, questionList[index].answers[i].answerName], index + 1);
        console.log([...list, questionList[index].answers[i].answerName] )
        console.log(index)
    }
}

generateCombinations([], 0);

console.log('Second answer:')
const lineHeaders = headers.join(',');
const linesBody = problem3.join('\n')
console.log(lineHeaders + '\n' + linesBody);
//xd