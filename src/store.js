import { reactive } from "vue";

export const store = reactive({
    menuItems: [
        { 
            id: 1, 
            label: 'Home', 
            link: '#' 
        },
        { 
            id: 2, 
            label: 'Pages', 
            link: '#' 
        },
        { 
            id: 3, 
            label: 'Courses', 
            link: '#' 
        },
        { 
            id: 4, 
            label: 'Features', 
            link: '#' 
        },
        { 
            id: 5, 
            label: 'Blog', 
            link: '#' 
        },
        { 
            id: 6, 
            label: 'Shop', 
            link: '#' 
        }
    ],
    startNowCards:[
        {
            imgURL: "01",
            title: "Idea Discussion",
            text: "Get teamed up with the specialists who work and teach coding for years at famous universities.",
            link: "#"
        },
        {
            imgURL: "02",
            title: "Web Developement",
            text: "Leam to start building a webpage from scratch. You decide your own pace, course and speed.",
            link: "#"
        },
        {
            imgURL: "03",
            title: "System Administration",
            text: "Learners are encouraged to study the mechanism and structure of system administration.",
            link: "#"
        },
        {
            imgURL: "04",
            title: "Card Title 1",
            text: "Have a passion for graphics and arts? Show your talents with confidence and self-assertiveness",
            link: "#"
        },
    ],
    infoDataArray: [
        { info: "Finished session", data: "1.962" },
        { info: "Enrolled learners", data: "3092+" },
        { info: "Online instructors", data: "200" },
        { info: "Satisfaction rate", data: "100%" }
    ],
    coursesCard:[
        {
            courseImg:"course-02-480x298.jpg",
            price:"$40.00",
            profProPic:"73ee246daf47502812ccefc84bf02898.jpeg",
            profName: "Blanche Fields",
            title:"Learning to Write as a Professional Author",
            lessonsNumber:"20 Lessons",
            studentsNumber:"50 Students"
        },
        {
            courseImg:"stock-full-hd-03-480x298.jpg",
            price:"Free",
            profProPic:"d0d504142acfde820eef2f11feea6253.jpeg",
            profName: "Maggie Strickland",
            title:"Customer-centric Info-Tech Strategies",
            lessonsNumber:"24 Lessons",
            studentsNumber:"769 Students"
        },
        {
            courseImg:"stock-full-hd-04-480x298.jpg",
            price:"$19.00",
            profProPic:"d0d504142acfde820eef2f11feea6253.jpeg",
            profName: "Maggie Strickland",
            title:"Open Programming Courses for Everyone: Python",
            lessonsNumber:"17 Lessons",
            studentsNumber:"62 Students"
        },
        {
            courseImg:"stock-full-hd-06-480x298.jpg",
            price:"$26.00",
            profProPic:"73ee246daf47502812ccefc84bf02898.jpeg",
            profName: "Blanche Fields",
            title:"Academic Listening and Note- taking",
            lessonsNumber:"14 Lessons",
            studentsNumber:"67 Students"
        },
        {
            courseImg:"course-featured-image-01-480x298.jpg",
            price:"$39.00",
            profProPic:"73ee246daf47502812ccefc84bf02898.jpeg",
            profName: "Blanche Fields",
            title:"Master jQuery in a Short Period of Time",
            lessonsNumber:"6 Lessons",
            studentsNumber:"51 Students"
        },
        {
            courseImg:"stock-full-hd-05-480x298.jpg",
            price:"$59.00",
            profProPic:"73ee246daf47502812ccefc84bf02898.jpeg",
            profName: "Blanche Fields",
            title:"Introduction to Javascript for Beginners",
            lessonsNumber:"14 Lessons",
            studentsNumber:"76 Students"
        },
    ],

});
