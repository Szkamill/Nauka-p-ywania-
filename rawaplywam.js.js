
// 
const btnzobaczwiecej = document.querySelector('.btn_terminy');
const section1 = document.querySelector('#section--2');

const btn_nsk = document.querySelector('.wrap1');
const section2 = document.querySelector('.wrap1');

const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

const nav = document.querySelector('nav');
const navNAV = document.querySelector('nav');




//nav
document.querySelector('.navy').addEventListener('click',function(e){
    e.preventDefault();
    console.log('jestem')
    //matching strategy
    if (e.target.classList.contains('nav_link')){
      const id = e.target.getAttribute('href');
      console.log(id);
      document.querySelector(id).scrollIntoView({behavior:'smooth'});
    }
  })

  //przewijanie po kliknieciu przycisku terminy 


  btnzobaczwiecej.addEventListener('click',function(e){
    const s1coords = section1.getBoundingClientRect();

//     console.log('currently scroll (xy)', window.pageXOffset, window.pageYOffset);

//     console.log('height/width viewport',document.documentElement.clientHeight,
//   document.documentElement.clientWidth);

    console.log('jestem')
    window.scrollTo({ left:s1coords.left + window.pageXOffset,
            top: s1coords.top+ window.pageYOffset,
            behavior:'smooth',
          });
     
     
      console.log('widze');
  });
  //przewijanie po kliknieciu dla kogo
  
  // btn_nsk.addEventListener('click',function(e){
  //   console.log('jestem')
  //   const s2coords= section2.getBoundingClientRect();
  //   window.scrollTo({
  //     left:s2coords.left + window.screenX,
  //     top: s2coords.top + window.screenY,
  //     behavior:'smooth',
  //   });
  // })
  btn_nsk.addEventListener('click',function(e){
    e.preventDefault();
    console.log('dziala')
    //matching strategy
    if (e.target.classList.contains('nauka')){
      const id = e.target.getAttribute('href');
      console.log(id);
      document.querySelector(id).scrollIntoView({behavior:'smooth'});
    }
  })
  //terminy


tabsContainer.addEventListener('click',function(e){
  const clicked = e.target.closest('.operations__tab');
  console.log(clicked);
  //guard clouse
  if(!clicked)return;

  //remove active classes
  tabsContent.forEach(t=>t.classList.remove('operations__content--active'));
tabs.forEach(t => t.classList.remove('operations__tab--active'));
//active tab

  clicked.classList.add('operations__tab--active');


  //active contant area
  console.log(clicked.dataset.tab);
  document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active');
})

//menu fade animation 
const handleHover = function(e, opacity){
  if(e.target.classList.contains('nav_link')){
    const link = e.target;
    const siblings = link.closest('nav').querySelectorAll('.nav_link');
    const span =link.closest('nav').querySelector('span');
    siblings.forEach(el =>{
      if(el !== link) el.style.opacity = opacity;
    })
    span.style.opacity = opacity;
  }
};
nav.addEventListener('mouseover', function(e){
  console.log('widze')
  handleHover(e,0.5);
});
nav.addEventListener('mouseout', function(e){
  handleHover(e, 1);
});

// sticky navigation


const initationNav = section2.getBoundingClientRect();
console.log(initationNav);
window.addEventListener('scroll',function(){
  console.log('pokawiam');

  if(window.scrollY > initationNav.bottom)
  { navNAV.classList.add('sticky');
console.log('tu');}

  else
   {navNAV.classList.remove('sticky');}
})
// const pojawienieNav = document.querySelector('.top2');
// const stivkyNav = function(entries) { 
//   const [entry]=entries;
//   console.log(entry);
//   if(!entry.isIntersecting) pojawienieNav.classList.add('sticky');
//   else pojawienieNav.classList.remove('sticky');

// }
// const navObserver = new IntersectionObserver(stivkyNav, {
//   root: null,
//   threshold:0,

// });
// navObserver.observe(pojawienieNav);

// reveal section 
const allsection = document.querySelectorAll('.section');
const reveralSection = function(entries, observer){
  const [entry] = entries;
  console.log(entry);
  if(!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};
const sectionObservation = new IntersectionObserver(
  reveralSection,{
root: null,
threshold: 0.15,
  }
);
allsection.forEach(function(section){
  sectionObservation.observe(section);
  section.classList.add('section--hidden');
})

// 
const addcontent = function() {
  document.querySelector('.description').textContent += " :) "; //dodanie znaków (stringa) do istniejacej zawartości tekstowej
  h1.classList.toggle(""); //dodanie/zabranie klasy z elementu (dodaje jak nie ma, zabiera jak jest)
 }

showContent.addEventListener('click',addcontent)

function mouseOver(){
  document.querySelector('.operation_tab1').textContent = 'Strona zbudowana z myślą o prowadzeniu nauki pływania. Celem jest osiągniecie mniejszej ilości połączeń telefonicznych z zapytaniem o wolne terminy. Strona zawiera opis dla kogo skierowane jest ogłoszenie, zachęca do pływnia oraz informuje o wolnych terminach. '
}
function mouseOut(){
  document.querySelector('.operation_tab1').textContent = 'Strona o pływaniu'
}