# Prestashop setup
There are two ways to setup prestashop:
- By cloning the [official Prestashop repo](https://github.com/PrestaShop/PrestaShop/tree/1.7.8.x) - [tutorial](https://devdocs.prestashop-project.org/1.7/basics/installation/localhost/)
- By creating your own `docker-compose.yaml` file - [tutorial](https://devdocs.prestashop-project.org/8/basics/installation/environments/docker/) with few extra changes needed (e.g. volume binding - see the diffrence compared to [our compose](/prestashop/docker-compose.yaml))

# Prestashop documentation
https://devdocs.prestashop-project.org/1.7/


# Project structure
``` bash
NazwaZespolu
├── docs
│   ├── protips.md # how to start and common issues 
│   ├── project_requirements_PL.pdf
│   └── tutorial[...]
├── integration
├── prestashop
│   ├── Controller
│   └── Entity
├── resources
├── scraper
├── tests
├── .gitignore
└── README
```