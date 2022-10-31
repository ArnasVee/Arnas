let students = [
    {
        code: 1234,
        firstName: "Tadas",
        lastName: "Tadausklas",
        score: 9.5
    },
    {
        code: 2345,
        firstName: "Tomas",
        lastName: "Tomausklas",
        score: 2.5
    },{
        code: 3456,
        firstName: "Vladas",
        lastName: "Vladausklas",
        score: 7.5
    },
    {
        code: 4567,
        firstName: "Jurgis",
        lastName: "Jurginskas",
        score: 8.5
    },
    {
        code: 5678,
        firstName: "Arnas",
        lastName: "Arnausklas",
        score: 10.0
    }
]

for(let item of students)
{
    for(let element in item)
    {
        console.log(element + ": " + item[element])
    }
    console.log("----------")
}