const person = {
    firstName: "Tiago",
    lastName: "da Costa Santos",

    socialMedia: [
        {
            name: "Linkedin",
            link: "https://www.linkedin.com/in/tiago-costa-s/"

        },

        {
            name: "Github",
            link: "//https://github.com/tiago-costa-s.linkedin.com/in/tiago-costa-s/"

        }
    ],

    professionalHistory: [
        {
            id: 3,
            office: "Desenvolvedor Front End",
            company: "Pipoca Ágil",
            uf: "RJ",
            city: "Rio de Janeiro",
            start: "Mai 2022",
            finish: "Atual",
            regime: "Voluntario"
        },

        {
            id: 2,
            office: "Analista de Suporte",
            company: "CRM Educacional",
            uf: "MG",
            city: "Belo Horizonte",
            start: "Mai 2021",
            finish: "Maio 2022",
            regime: "Estágio"
        }
    ],

    stack: [
        {
            name: "React",
            version: "",
            level: "inciante",
            logo: "react.svg",
        },

        {
            name: "Java Script",
            version: "e6+",
            level: "intermediario",
            logo: "javascript.svg",
        },

        {
            name: "HTML",
            version: "5",
            level: "intermediario",
            logo: "html.svg",
        },

        {
            name: "CSS",
            version: "3",
            level: "intermediario",
            logo: "css.svg",
        },

        {
            name: "Bootstrap",
            version: "5",
            level: "inciante",
            logo: "bootstrap.svg",
        },

        {
            name: "Java",
            version: "17",
            level: "iniciante",
            logo: "java.svg",
        },

        {
            name: "Vite",
            version: "",
            level: "iniciante",
            logo: "vite.svg",
        },

        {
            name: "Visual Studio Code",
            version: "",
            level: "iniciante",
            logo: "vscode.svg",
        },

        {
            name: "Eclipse",
            version: "",
            level: "iniciante",
            logo: "eclipse.svg",
        },

        {
            name: "GitHub",
            version: "",
            level: "iniciante",
            logo: "gitbub.svg",
        }
    ],

    projects: [
        {
            id: 1,
            name: "Paper Notes",
            stacks: "HTML5, CSS, Java Script",
            image: "https://i.postimg.cc/gjw1S80Y/2-1.png",
            description: "O Paper Notes: Um aplicativo web para criar notas de texto de forma simples e moderna!",
            linkPreview: "https://paper-notes.vercel.app/",
            linkRepository: "https://i.postimg.cc/1XLr9Nr5/2-1.png"
        },

        {
            id: 2,
            name: "Todo Paper",
            stacks: "HTML5, CSS, Java Script",
            image: "https://i.postimg.cc/Tw9f7WFf/to-do-paper-filtro-de-tarefas.png",
            description: "O Paper Notes: Um aplicativo web para criar notas de texto de forma simples e moderna!",
            linkPreview: "https://todo-paper.vercel.app/",
            linkRepository: "https://github.com/Tiago-Costa-s/todo_paper"
        },

        {
            id: 2,
            name: "Todo Paper",
            stacks: "HTML5, CSS, Java Script",
            image: "https://i.postimg.cc/Tw9f7WFf/to-do-paper-filtro-de-tarefas.png",
            description: "O Paper Notes: Um aplicativo web para criar notas de texto de forma simples e moderna!",
            linkPreview: "https://todo-paper.vercel.app/",
            linkRepository: "https://github.com/Tiago-Costa-s/todo_paper"
        },
        {
            id: 2,
            name: "Todo Paper",
            stacks: "HTML5, CSS, Java Script",
            image: "https://i.postimg.cc/Tw9f7WFf/to-do-paper-filtro-de-tarefas.png",
            description: "O Paper Notes: Um aplicativo web para criar notas de texto de forma simples e moderna!",
            linkPreview: "https://todo-paper.vercel.app/",
            linkRepository: "https://github.com/Tiago-Costa-s/todo_paper"
        },

    ]
}

const professionsResume = person.professionalHistory;

const createProfessionalExperience = () => {

    professionsResume.forEach((prof) => {

        const professionExperience = document.querySelector("#professional-experience");
        // experiencia profissional
        const jobsElement = document.createElement("div");
        jobsElement.classList.add("jobs");

        // cabeçalho
        const headerElement = document.createElement("header")
        jobsElement.appendChild(headerElement);

        // titulo
        const titleElement = document.createElement("p");
        titleElement.classList.add("title");
        titleElement.textContent = `${prof.office}`;
        headerElement.appendChild(titleElement);

        // regime
        const regimeElement = document.createElement("p");
        regimeElement.classList.add("regime");
        regimeElement.textContent = `${prof.regime}`;
        headerElement.appendChild(regimeElement);

        // info
        const infoElement = document.createElement("div");
        infoElement.classList.add("info");
        jobsElement.appendChild(infoElement);

        // empresa
        const company = document.createElement("p");
        company.classList.add("company");
        // icone
        const buildingELement = document.createElement("i");
        buildingELement.classList.add("bi", "bi-building");
        company.appendChild(buildingELement);
        // span
        const spanCompany = document.createElement("span");
        spanCompany.textContent = `${prof.company}`;
        company.appendChild(spanCompany);
        infoElement.appendChild(company);

        // cidade
        const cityElement = document.createElement("p");
        cityElement.classList.add("city");
        // icone
        const geoElement = document.createElement("i");
        geoElement.classList.add("bi", "bi-geo-alt");
        cityElement.appendChild(geoElement);
        // span
        const spanGeo = document.createElement("span");
        spanGeo.textContent = `${prof.city}`;
        cityElement.appendChild(spanGeo);
        infoElement.appendChild(cityElement);

        // periodo
        const periodElement = document.createElement("p");
        periodElement.classList.add("period");
        // icone
        const calendarElement = document.createElement("i");
        calendarElement.classList.add("bi", "bi-calendar3");
        periodElement.appendChild(calendarElement);
        // span
        const spanPeriod = document.createElement("span");
        spanPeriod.textContent = `${prof.start} - ${prof.finish}`;
        periodElement.appendChild(spanPeriod);
        infoElement.appendChild(periodElement);


        professionExperience.appendChild(jobsElement);
    });
};

createProfessionalExperience();



const projectsListElement = document.querySelector("#project-list");
const projectsResume = person.projects;

projectsResume.forEach((project) => {

    const projectElement = document.createElement("div");
    projectElement.style.backgroundImage = `url(${project.image})`;
    projectElement.classList.add("project");

    const containerProjectELement = document.createElement("div");
    containerProjectELement.classList.add("container-project");
    projectElement.appendChild(containerProjectELement);

    const nameElement = document.createElement("p");
    nameElement.classList.add("name");
    nameElement.textContent = `${project.name}`;
    containerProjectELement.appendChild(nameElement);

    // descrição
    const descriptionElement = document.createElement("div");
    descriptionElement.classList.add("description");
    descriptionElement.textContent = `${project.description}`;
    containerProjectELement.appendChild(descriptionElement);
    // paragrafo e span
    const pDescriptionElement = document.createElement("p");
    const spanDescription = document.createElement("span");
    pDescriptionElement.appendChild(spanDescription);
    descriptionElement.appendChild(pDescriptionElement);

    const stackElement = document.createElement("p");
    stackElement.classList.add("stack");
    const spanStack = document.createElement("span");
    spanStack.textContent = `${project.stacks}`;
    stackElement.textContent = "Tech stack :";
    stackElement.appendChild(spanStack);
    containerProjectELement.appendChild(stackElement);

    // links
    const linksProjectElement = document.createElement("div");
    linksProjectElement.classList.add("links-project");

    // link preview
    const previewElement = document.createElement("a");
    previewElement.classList.add("previewLink");
    previewElement.getElementsByClassName("previewLink");
    previewElement.href = `${project.linkPreview}`;
    previewElement.target = "_blank";
    // icone link
    const iconePreviewElement = document.createElement("i");
    iconePreviewElement.classList.add("bi", "bi-link-45deg");
    previewElement.appendChild(iconePreviewElement);
    // span preview
    const spanPreview = document.createElement("span");
    spanPreview.textContent = "Link Preview"
    previewElement.appendChild(spanPreview);
    linksProjectElement.appendChild(previewElement);


    // link github
    const githubElement = document.createElement("a");
    githubElement.classList.add("githubLink");
    githubElement.getElementsByClassName(".githubLink");
    githubElement.href = `${project.linkRepository}`;
    githubElement.target = "_blank";
    // icone link
    const iconeGithubElement = document.createElement("i");
    iconeGithubElement.classList.add("bi", "bi-github");
    githubElement.appendChild(iconeGithubElement);
    // span github
    const spanGithub = document.createElement("span");
    spanGithub.textContent = "Link Preview";
    githubElement.appendChild(spanGithub);
    linksProjectElement.appendChild(githubElement);

    containerProjectELement.appendChild(linksProjectElement);

    projectsListElement.appendChild(projectElement);
});




// const text = `Olá</span> meu nome é Tiago Costa e um sou um Desenvolvedor front end`;
// const titleElement = document.getElementById("title");

// function typeText(index) {
//     titleElement.innerText = text.slice(0, index);
// }

// function animateText() {
//     for (let i = 0; i <= text.length; i++) {
//         setTimeout(() => {
//             typeText(i);
//         }, i * 100); // 100ms delay for each letter
//     }
// }

// // Trigger the animation when the page is loaded
// window.onload = animateText;



// Seletores
const burgerMenu = document.getElementById("#burger-menu");
const navMobile = document.querySelector(".container-nav-mobile");

// Function
function burgerMenuHide() {
    let containerNavMobile = document.querySelector(".container-nav-mobile ");
    containerNavMobile.classList.toggle("hide");
};


// Eventos
burgerMenu.addEventListener("click", () => {
    burgerMenuHide();
});


// navMobile.addEventListener("click", () => {
//     burgerMenuHide()
// });