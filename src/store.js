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
    ]

});
