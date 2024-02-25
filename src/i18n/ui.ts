import pt from './pt.json'

export const languages = {
    en: 'English',
    pt: 'Portugues',
  };
  
  export const defaultLang = 'pt';

  export const links = {
    email: "otavioburato42@gmail.com",
    tel: "+55 (11) 95360-0806",
    github: "https://github.com/Otavio-Burato",
    linkedin: "https://www.linkedin.com/in/otavio-burato/",
    avatarUrl: "https://media.licdn.com/dms/image/D4D03AQHPLoIyc3cVgg/profile-displayphoto-shrink_400_400/0/1692653861962?e=1711584000&v=beta&t=hO-juvxtS9wdbo66aoiDGoFCHsWzYTyXnu3gFhy-2P4",
    locationLink: "https://maps.app.goo.gl/j9jSw4rugFUuvQPw7",
    location: "São Paulo"
  }
  
  export const ui = {
    en: {
      "name": "Otávio Burato de Oliveira",
      "about": "About",
      "about.info": "Developer at F1RST focused on technical excellence and continuous business evolution.",
      "summary": "Developer analyst with experience in the financial sector, using Java and AWS in systems architecture and development. Work on complex demands, prioritizing commitment, collaboration and creativity, seeking to positively impact the culture and results in all the projects work on.",
      "work.info": "Experience",
      "work": [
        {
          company: "F1RST Tecnologia",
          link: "https://www.linkedin.com/company/f1rstdigitalservices/",
          badges: ["Hybrid"],
          title: "Software engineer",
          start: "2022",
          end: "Current",
          description:
            "Software Engineer at Banco Santander Brasil/F1rst Tecnologia, carrying out crucial responsibilities in the development and maintenance of APIs and microservices. Use cutting-edge technologies, such as Java 17, Quarkus, SQL, Kafka, Api gateway and ACL. Centered on building a credit platform, strictly adhering to the Well Architected Framework best practices and conducting non-functional requirements analyses. With approach stands out for its focus on high availability, multi-tenancy, cohesion and loose coupling.",
        },
        {
          company: "GFT Group",
          link: "https://www.linkedin.com/company/gft-technologies/",
          badges: ["Remote"],
          title: "Software developer",
          start: "2021",
          end: "2022",
          description:
            "Improvement and support of APIs and microservices are executed masterfully, using Java 11, Spring Boot Framework and Apache Camel to integrate systems. Outstanding performance in the post-sales loan system and contract administration. Diligent supervision of implementations and deployments in production, actively contributing to the design of solutions and the progression of legacy systems.",
        },
      ],
      "skills": [
        "Azure",
        "Amazon Web Services",
        "Spring Framework",
        "System architecture",
        "Microservices",
        "Kubernetes",
        "Docker",
        "Quarkus",
        "Java",
        "Scala",
        "Kotlin",
        "Kafka"
      ],
      "education.info": "Education",
      "education": [
        {
          school: "42 São Paulo",
          degree: "Software Engineering",
          description: "Software engineering student in a learning system based on peer-to-peer learning, seeking to develop technical excellence, commitment and respect in interpersonal relationships as professional characteristics.",
          start: "2022",
          end: "2024",
        },
        {
          school: "Fatec Zona Sul",
          degree: "Analysis and systems development",
          description: "With a background in systems analysis and development, acquired skills in handling databases, preparing documentation, understanding imperative and functional logic, and analyzing functional and non-functional requirements.",
          start: "2019",
          end: "2022",
        },
        {
          school: "ETEC - Albert Einstein",
          degree: "Integrated Technical Course, Electronics",
          description: "Graduated from high school integrated with a technical course in electronics, studies in Boolean logic were covered through logic gates and electropneumatic circuits, as well as experience in development in Arduino and PLC, using C++ and Ladder languages.",
          start: "2016",
          end: "2018",
        },
      ],
      "certification.info": "Certification",
      "projects.info": "Projects",
      "projects": [
        {
          title: "FGTS",
          techStack: [
            "Java",
            "Spring Framework",
            "System architecture",
          ],
          description: "Project to advance FGTS resources via loan",
          link: {
            label: "https://www.santander.com.br",
            href: "https://www.santander.com.br/blog/saque-aniversario-como-funciona",
          },
        },
        {
          title: "Credit life insurance",
          techStack: [
            "Java",
            "Spring Framework",
            "System architecture",
          ],
          description: "Evolution of the insurance rebate system",
          link: {
            label: "https://www.santander.com.br",
            href: "https://www.santander.com.br/blog/o-que-e-seguro-prestamista",
          },
        },
        {
          title: "Central Bank Resolution 5.004",
          techStack: [
            "Java",
            "Spring Framework",
            "System architecture",
            "Azure",
            "Blob Storage"
          ],
          description: "Adaptation of the system to comply with Bacen resolution 5004, correctly generating contract drafts",
          link: {
            label: "https://www.bcb.gov.br",
            href: "https://www.bcb.gov.br/estabilidadefinanceira/exibenormativo?tipo=Resolu%C3%A7%C3%A3o%20CMN&numero=5004",
          },
        },
        {
          title: "Open finance",
          techStack: [
            "EventHub",
            "Spark",
            "Scala",
          ],
          description: "Migrating on-premise data ingestion to Azure cloud via Databricks",
        },
        {
          title: "Cloud computing",
          techStack: [
            "AWS",
            "Quarkus",
            "Arquitetura de sistema",
          ],
          description: "Participation in the design of a multi-tenant platform entirely in the cloud",
        },
        {
          title: "Federation SRE",
          techStack: [
            "SRE",
            "Dynatrace",
            "Elastic Stack",
            "Monitoring",
            "Toil",
            "PRR"
          ],
          description: "Responsible for disseminating the SRE culture among teams in the area.",
        },
      ],
    },
    pt: pt
  } as const;