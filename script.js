const reviews = [
    {
        id: 1,
        name: "Aqsa Omar",
        job: "UX Designer",
        img: "https://images.pexels.com/photos/247322/pexels-photo-247322.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        text: "Hello! I’m Aqsa Omar.I’m a UX leader, product designer, design thinker and human-loving optimist. I’m an established experience design leader with over a decade of experience."
    },
    {
        id: 2,
        name: "John Smith",
        job: "Web Designer",
        img: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        text: "I’m John Smith. I’m a designer who codes. I’ve worked internationally, in-house, and remotely on projects for leading brands, agencies, startups, and charities. I am the founder and curator of Club of the Waves."
    },
    {
        id: 3,
        name: "Kate Miller",
        job: "Software Engineer",
        img: "https://images.pexels.com/photos/943084/pexels-photo-943084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        text: "I am a software developer, specialising in the app development arena. For the last 3 years, I have been developing games using C++, C# and Java programming languages."
    }
,{
    id: 4,
    name: "Ali Azhar",
    job: "SQL Developer",
    img: "https://images.pexels.com/photos/7983621/pexels-photo-7983621.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    text: "I am a SQL Developer. A dynamic professional with 11+ years of experience in SQL server developer,graph sql, MYSQL and NOSQL (mongoDB)."
}
,{
    id: 5,
    name: "Zaib Malik",
    job: "Python Developer",
    img: "https://images.pexels.com/photos/1559486/pexels-photo-1559486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    text: "Python developer with 8 years of experience in finance and fintech. Well-acquainted with database engineering, data warehouses, and data processing. Knowledgeable in Python frameworks related to data such as SciPy, NumPy, Matplotlib. Cloudera certified Data analyst, PCPP-1 certification and Spark/Hadoop developer certification."
}
,{
    id: 6,
    name: "Maryam Rao",
    job: "AI Developer",
    img: "https://images.pexels.com/photos/1493111/pexels-photo-1493111.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    text: "A passionate AI Programmer designing and developing gaming applications. Possess hands-on experience of writing codes in various programming languages as well as building complicated neural networks. Familiar with SDLC and capable of thinking out-of-the box to create seamless, exciting products for the target audience."
}
];

const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");
const img = document.getElementById('person-img');
const previous = document.querySelector(".prev-btn");
const next = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// Set starting item
let currentItem = 0 ;

// Load initail item
window.addEventListener("DOMContentLoaded", function() {
    showPerson(currentItem);
   
})
// Show perosn based on item
function showPerson(person) {
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;   
}
// Show next person
next.addEventListener("click", function() {
    currentItem++;
    if(currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    showPerson(currentItem);
});
// Show Previoous Person
previous.addEventListener("click", function() {
    currentItem--;
    if(currentItem < 0 ) {
        currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
})

// Get Random Number
function getRandomNumber() {
    return Math.floor(Math.random() * reviews.length);
}
randomBtn.addEventListener('click', function() {
    currentItem = getRandomNumber();
    showPerson(currentItem);
})