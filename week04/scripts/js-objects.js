let person = {
    name: "Antonia Francesca",
    age: 30,
    profession: "Software Engineer",
    hobbies: ["reading", "playing guitar", "hiking"],
    address: {
      street: "123 Camino Real",
      city: "Santa Rosa",
      country: "Honduras"
    },
    isEmployed: true,
    greet: function() {
      console.log(`Hello, my name is ${this.name}.`);
    }
  };
  
  console.log(person['isEmployed']);   // bracket notation
  //output: true
  console.log(person.hobbies[0]);   // dot notation
  //output: reading
  console.log(person.age);   // dot notation
  //output: 30
  console.log(person['address'].city);   // combined notation
  //output: Santa Rosa

  person.age = 31;
  console.log(person.age);
  //output: 31


  let aCourse = {
    code: "WDD131",
    title: "Dynamic Web Fundamentals",
    credits: 2,
    sections : [
        { section: "001", enrolled: 95, instructor: "Roberto Diaz Rodriguez" },
        { section: "002", enrolled: 80, instructor: "Sarah Gobble" }
      ]
  };

  function setCourseInformation(course) {
    document.querySelector("#courseName").innerHTML = `${course.code} – ${course.title}`;
  }

  function sectionTemplate(section) {
    return `<tr>
             <td>${section.sectionNumber}</td>
             <td>${section.enrolled}</td>
             <td>${section.instructor}</td>
            </tr>`;
  }
  
  function renderSections(course) {
    const html = sections.map(sectionTemplate);
    document.querySelector("#sections tbody").innerHTML = html.join("");
  }