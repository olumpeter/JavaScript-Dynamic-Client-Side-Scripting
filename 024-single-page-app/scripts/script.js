
const aboutMeMenuButton = document.getElementById('about-me-menu-button')
const resumeMenuButton = document.getElementById('resume-menu-button')
const portfolioMenuButton = document.getElementById('portfolio-menu-button')
const blogMenuMutton = document.getElementById('blog-menu-button')
const contactMenuButton = document.getElementById('contact-menu-button')

const aboutMeArticle = document.getElementById('about-me-article')
const resumeArticle = document.getElementById('resume-article')
const portfolioArticle = document.getElementById('portfolio-article')
const blogArticle = document.getElementById('blog-article')
const contactArticle = document.getElementById('contact-article')

aboutMeMenuButton.addEventListener('click', () => {
    if (aboutMeArticle.classList == "main-article hidden") {
        aboutMeArticle.classList.remove("hidden")
    }
    if (resumeArticle.classList == "main-article") {
        resumeArticle.classList.add("hidden")
    }
    if (portfolioArticle.classList == "main-article") {
        portfolioArticle.classList.add("hidden")
    }
    if (blogArticle.classList == "main-article") {
        blogArticle.classList.add("hidden")
    }
    if (contactArticle.classList == "main-article") {
        contactArticle.classList.add("hidden")
    }
})

resumeMenuButton.addEventListener('click', () => {
    if (aboutMeArticle.classList == "main-article") {
        aboutMeArticle.classList.add("hidden")
    }
    if (resumeArticle.classList == "main-article hidden") {
        resumeArticle.classList.remove("hidden")
    }
    if (portfolioArticle.classList == "main-article") {
        portfolioArticle.classList.add("hidden")
    }
    if (blogArticle.classList == "main-article") {
        blogArticle.classList.add("hidden")
    }
    if (contactArticle.classList == "main-article") {
        contactArticle.classList.add("hidden")
    }
})

portfolioMenuButton.addEventListener('click', () => {
    if (aboutMeArticle.classList == "main-article") {
        aboutMeArticle.classList.add("hidden")
    }
    if (resumeArticle.classList == "main-article") {
        resumeArticle.classList.add("hidden")
    }
    if (portfolioArticle.classList == "main-article hidden") {
        portfolioArticle.classList.remove("hidden")
    }
    if (blogArticle.classList == "main-article") {
        blogArticle.classList.add("hidden")
    }
    if (contactArticle.classList == "main-article") {
        contactArticle.classList.add("hidden")
    }
})

blogMenuMutton.addEventListener('click', () => {
    if (aboutMeArticle.classList == "main-article") {
        aboutMeArticle.classList.add("hidden")
    }
    if (resumeArticle.classList == "main-article") {
        resumeArticle.classList.add("hidden")
    }
    if (portfolioArticle.classList == "main-article") {
        portfolioArticle.classList.add("hidden")
    }
    if (blogArticle.classList == "main-article hidden") {
        blogArticle.classList.remove("hidden")
    }
    if (contactArticle.classList == "main-article") {
        contactArticle.classList.add("hidden")
    }
})

contactMenuButton.addEventListener('click', () => {
    if (aboutMeArticle.classList == "main-article") {
        aboutMeArticle.classList.add("hidden")
    }
    if (resumeArticle.classList == "main-article") {
        resumeArticle.classList.add("hidden")
    }
    if (portfolioArticle.classList == "main-article") {
        portfolioArticle.classList.add("hidden")
    }
    if (blogArticle.classList == "main-article") {
        blogArticle.classList.add("hidden")
    }
    if (contactArticle.classList == "main-article hidden") {
        contactArticle.classList.remove("hidden")
    }
})