import { ref } from 'vue';

export const projects = ref([
    {
        name: 'Gamexit',
        desc: 'A platform focused on connecting people using web based games. Create a 1v1 or tournament challenge and invite your friends ',
        tags: ['Websocket', 'WebRTC', 'Node.Js'],
        links: [{ name: 'github', url: 'https://github.com/kromate/gamexit' }, { name: 'live', url: 'hhttps://gamexit.netlify.app/' },],
        show: true
    },
    {
        name: 'Stranerd',
        desc: 'Building various tools to enable students to collaborate, innovate and achieve academic success.',
        tags: ['Vue', 'tailwind', 'Ionic'],
        links: [{ name: 'live', url: 'https://stranerd.com/' }],
        show: true
    },
    {
        name: 'AnimeDom',
        desc: 'I was tired of the ads on popular anime websites so I built mine using puppeteer/cheerio to scrape data and Ionic for the frontend',
        tags: ['Firebase', 'Puppeteer', 'Express'],
        links: [{ name: 'github', url: 'https://github.com/kromate/AnimeDom-Ionic' }, { name: 'live', url: 'https://animedom.netlify.app/' },],
        show: true
    },
    {
        name: 'Cloundenly',
        desc: 'I Worked on a suite of tools that enabled the the easy management of HR, Benefits and Payroll for Organisations',
        tags: ['Vue', 'Tailwind', 'Vuex'],
        links: [{ name: 'live', url: 'https://cloudenly.com/' },],
        show: true
    },
    {
        name: 'Cloundenly-UI',
        desc: 'A list of Internal UI component used by different teams in Scelloo',
        tags: ['Vue', 'Storybook', 'Npm-package'],
        links: [{ name: 'live', url: 'https://cloudenly-ui.netlify.app/' },],
        show: true
    },
    {
        name: 'Fazzy D',
        desc: 'I Designed & Built a fashion E-commerce store for a client with features like "add to favorite", "admin Dashboard", "payment gateways" e.t.c',
        tags: ['Vue', 'Firebase', 'Cloud Storage'],
        links: [{ name: 'live', url: 'https://fazzyd.com/' },],
        show: true
    }
])