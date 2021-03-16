fetch('../studenter.json')
    .then(data=>data.json())
    .then(json=> {
        console.log(json);
       let students = document.querySelector('.studenter');
     json.forEach(student=>{
           let div = document.createElement('DIV');
           div.innerHTML = `<p>${student.fornavn}, ${student.etternavn}, ${student.studieprogram} --- ${student.forkortelse}</p>`
           students.appendChild(div)
       })
    }) 
