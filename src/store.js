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
      ]
});
