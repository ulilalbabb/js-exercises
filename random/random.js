const family = [
    {
        name: 'ulil',
        age: '21',
        status: "prima's husband"
    },
    {
        name: 'prima',
        age: '21',
        status: "ulil's wife"
    },
    {
        name: 'shaka',
        age: '5',
        status: "child from ulil and prima"
    },
    {
        name: 'kaluna',
        age: '2',
        status: "child from ulil and prima"
    },
]

const outputDiv = document.getElementById("output");
family.map(({ name, age, status }) => {
    const p = document.createElement("p");
    p.textContent = `Name: ${name},
                     Age: ${age},
                     Status: ${status}`
    outputDiv.appendChild(p)
})