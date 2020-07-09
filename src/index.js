const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
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
    "copyright" : "Copyright Great Idea! 2018",
  },
  "img": {
    "header-img": "https://tk-assets.lambdaschool.com/d312ae1d-879c-4c0b-8e0a-d03661aed7d8_header-img.png",
    "mid-page-img": "https://tk-assets.lambdaschool.com/933e5c8a-f143-4a89-b81b-4a609c325f1a_mid-page-accent.jpg",
    "logo-img": "https://tk-assets.lambdaschool.com/d7b66b1d-1f0f-489e-b408-f8e25140c82c_logo.png",
  }
};

const fillit = (source, element) => {
this.source = [...source];
this.element = [...element];
element.map((el)=>{
  Array.from(el.children).map(
    (inceptionA,index) => { inceptionA.textContent = source[index] }
  )
})}

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["img"]["logo-img"])

//links
 const linkSrc = Object.values(siteContent["nav"]);
 const links = [...document.getElementsByTagName('nav')];
 fillit(linkSrc,links);
 Array.from(links[0].children).map(el=>{el.style.color='green'});

 //call to action
const ctaTextSrc = Object.values(siteContent["cta"]);
const cta = [...document.getElementsByClassName('cta-text')];
fillit(ctaTextSrc,cta);

//main content
const mainVals = Object.values(siteContent["main-content"]);
const textContent = [...document.getElementsByClassName('text-content')];
fillit(mainVals, textContent);

//contact
const contactSrc = Object.values(siteContent["contact"]);
const contact = [...document.getElementsByClassName('contact')];
fillit(contactSrc,contact);

//footer
const footerSrc = Object.values(siteContent["footer"]);
const footer = [...document.getElementsByTagName('footer')];
fillit(footerSrc, footer);

//images
document.getElementById('cta-img').src = siteContent["img"]["header-img"];
document.getElementById('cta-img').alt = "A screenshot of code";
document.getElementById('middle-img').src = siteContent["img"]["mid-page-img"];
document.getElementById('middle-img').alt = "a skewed screenshot of code";

cta[0].innerHTML = '<h1>DOM <br> Is </br> Awesome!</h1>';
contact[0].children[1].innerHTML = '123 Way 456 Street <br> Somewhere, USA</br>';

const linkA = document.createElement('a');
linkA.textContent = "LinkA";
linkA.src = "#";
const linkB = document.createElement('a');
linkB.textContent = "LinkB";
linkB.src = "#";

document.getElementsByTagName('nav')[0].appendChild(linkA);
document.getElementsByTagName('nav')[0].prepend(linkB);