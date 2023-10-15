const professionExperience = [

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
];

const projects = [
    {
        id: 1,
        nome: "Paper Notes",
        stacks: "HTML5, CSS, Java Script",
        description: "O Paper Notes: Um aplicativo web para criar notas de texto de forma simples e moderna!",
        link: "https://paper-notes.vercel.app/",
        repository: "https://www.linkedin.com/feed/update/urn:li:activity:7089779550611476480/"
    }
];



const createProfessionalExperience = () => {

    professionExperience.forEach((prof) => {

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



const project = document.querySelectorAll(".project");

console.log(project)


// project.forEach((proj) => {

//     proj.addEventListener("mouseenter", (e) => {
//         const element = e.target;
//         const aaa = element.querySelector(".container-project");
//         // aaa.style.display = "none";
//         // aaa.style.display = "block";

//     });

//     proj.addEventListener("mouseleave", (e) => {
//         const element = e.target;
//         const aaa = element.querySelector(".container-project");
//         // aaa.style.display = "none";
//         // aaa.style.display = "none";

//     });
// });