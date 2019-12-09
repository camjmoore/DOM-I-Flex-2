const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//## Task 1: Create selectors to point your data into elements
//## Task 2: Update the HTML with the JSON data
let navItems = document.querySelectorAll(".container header nav a")
navItems[0].textContent = siteContent["nav"]["nav-item-1"]
navItems[1].textContent = siteContent["nav"]["nav-item-2"]
navItems[2].textContent = siteContent["nav"]["nav-item-3"]
navItems[3].textContent = siteContent["nav"]["nav-item-4"]
navItems[4].textContent = siteContent["nav"]["nav-item-5"]
navItems[5].textContent = siteContent["nav"]["nav-item-6"]

let ctaText = document.querySelector(".cta-text h1")
ctaText.textContent = siteContent["cta"]["h1"]
ctaText.innerText = siteContent["cta"]["h1"].split(' ').join('\n')

let ctaButton = document.querySelector(".cta-text button")
ctaButton.textContent = siteContent["cta"]["button"]

let ctaImage = document.querySelector(".container .cta #cta-img")
ctaImage.setAttribute('src', siteContent["cta"]["img-src"])

let topContentH4 = document.querySelectorAll(".main-content .top-content .text-content h4")
topContentH4[0].textContent = siteContent["main-content"]["features-h4"]
topContentH4[1].textContent = siteContent["main-content"]["about-h4"]

let topContentText = document.querySelectorAll(".main-content .top-content .text-content p")
topContentText[0].textContent = siteContent["main-content"]["features-content"]
topContentText[1].textContent = siteContent["main-content"]["about-content"]

let middleImg = document.querySelector("#middle-img")
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])

let bottomContentH4 = document.querySelectorAll(".main-content .bottom-content .text-content h4")
bottomContentH4[0].textContent = siteContent["main-content"]["services-h4"]
bottomContentH4[1].textContent = siteContent["main-content"]["product-h4"]
bottomContentH4[2].textContent = siteContent["main-content"]["vision-h4"]

let bottomContentText = document.querySelectorAll(".main-content .bottom-content .text-content p")
bottomContentText[0].textContent = siteContent["main-content"]["services-content"]
bottomContentText[1].textContent = siteContent["main-content"]["product-content"]
bottomContentText[2].textContent = siteContent["main-content"]["vision-content"]

let contactH4 = document.querySelector(".contact h4")
contactH4.textContent = siteContent["contact"]["contact-h4"]

let contactContent = document.querySelectorAll(".contact p")

addressItems = siteContent["contact"]["address"].split(' ')
addressItems.splice(4, 0, '\n')

contactContent[0].innerText = addressItems.join(' ')
contactContent[1].textContent = siteContent["contact"]["phone"]
contactContent[2].textContent = siteContent["contact"]["email"]

let footerContent = document.querySelector("footer p")
footerContent.textContent = siteContent["footer"]["copyright"]

//## Task 3: Add new content
navItems.forEach(function(nav1thru6){
  nav1thru6.style.color = '#71eeb8'
})

let newNavItem1 = document.createElement('a')
newNavItem1.textContent = 'Team'
newNavItem1.style.color = '#71eeb8'

let newNavItem2 = document.createElement('a')
newNavItem2.textContent = 'Blog'
newNavItem2.style.color = 'salmon'

let navBar = document.querySelector(".container header nav")
navBar.appendChild(newNavItem1)
navBar.prepend(newNavItem2)

//## Stretch Goals
let documentBody = document.querySelector('body')
documentBody.style.background = 'linear-gradient(to right, #12c2e9, #c471ed, #f64f59)'

middleImg.style.filter = 'grayscale(100%)'
ctaImage.style.filter = 'grayscale(100%)'

ctaButton.style.backgroundColor = 'black'
ctaButton.style.color = '#71eeb8'

topContentH4.forEach((h4) => {
h4.style.color = '#71eeb8'
})

bottomContentH4.forEach((h4) => {
  h4.style.color = '#71eeb8'
})

footerContent.style.color = '#71eeb8'

const hipsum = {
  "mainContent": {
    "hipsterCopy":"Lorem ipsum dolor amet seitan cold-pressed meggings swag flannel. Sustainable etsy organic, cred migas la croix squid yr wayfarers disrupt echo park XOXO offal whatever. Wayfarers retro sartorial direct trade.",
    "trendyCopy":"Shoreditch hammock banh mi, letterpress photo booth mustache forage. Banjo organic pickled helvetica franzen. Drinking vinegar dreamcatcher vinyl YOLO, tbh vice chillwave roof party butcher. Food truck succulents man bun blue bottle."
  }
}

topContentText[0].addEventListener('click', () => {
  topContentText[0].textContent = hipsum["mainContent"]["hipsterCopy"]
}) 

topContentText[0].addEventListener('dblclick', () => {
  topContentText[0].textContent = siteContent["main-content"]["features-content"]
})

topContentText[1].addEventListener('click', () => {
  topContentText[1].textContent = hipsum["mainContent"]["trendyCopy"]
})

topContentText[1].addEventListener('dblclick', () => {
  topContentText[1].textContent = siteContent["main-content"]["about-content"]
})

navItems.forEach((navItem) => {
  navItem.addEventListener('mouseenter', () => {
    navItem.style.transform = "scale(2.0)"
  })
})

navItems.forEach((navItem) => {
  navItem.addEventListener('mouseleave', () => {
    navItem.style.transform = "scale(1.0)"
  })
})