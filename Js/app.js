const hamburger = document.querySelector('.icon-menu');
const closeMenu = document.querySelector('.nav-mobile-cross');
const navItems = document.querySelectorAll('.nav-mobile a');
const summitData = [
  {
    hidden: false,
    photo: './images/Nouman.jpg',
    alt: 'Nouman',
    name: 'Yochai Benkler',
    proffessional: 'Berman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    experience: 'Benkler studies commons-based peer production, and published his seminal book the Wealth of Networks in 2006.',
  },

  {
    hidden: false,
    photo: './images/Nouman.jpg',
    alt: 'Nouman',
    name: 'Yochai Benkler',
    proffessional: 'Berman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    experience: 'Benkler studies commons-based peer production, and published his seminal book the Wealth of Networks in 2006.',
  },

  {
    hidden: true,
    photo: './images/Nouman.jpg',
    alt: 'Nouman',
    name: 'Yochai Benkler',
    proffessional: 'Berman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    experience: 'Benkler studies commons-based peer production, and published his seminal book the Wealth of Networks in 2006.',
  },

  {
    hidden: true,
    photo: './images/Nouman.jpg',
    alt: 'Nouman',
    name: 'Yochai Benkler',
    proffessional: 'Berman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    experience: 'Benkler studies commons-based peer production, and published his seminal book the Wealth of Networks in 2006.',
  },

  {
    hidden: true,
    photo: './images/Nouman.jpg',
    alt: 'Nouman',
    name: 'Yochai Benkler',
    proffessional: 'Berman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    experience: 'Benkler studies commons-based peer production, and published his seminal book the Wealth of Networks in 2006.',
  },

  {
    hidden: true,
    photo: './images/Nouman.jpg',
    alt: 'Nouman',
    name: 'Yochai Benkler',
    proffessional: 'Berman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    experience: 'Benkler studies commons-based peer production, and published his seminal book the Wealth of Networks in 2006.',
  },

];


function toggleMenu() {
    document.querySelector('.nav-mobile').classList.toggle('menu-block');
}
 
hamburger.addEventListener('click', toggleMenu);
closeMenu.addEventListener('click', toggleMenu);
navItems.forEach((navItem) => {
navItem.addEventListener('click', toggleMenu);
});


function showSpeakers(arr) {
  arr.forEach((each) => {
    const featuredSpeaker = document.createElement('div');
    featuredSpeaker.className = 'summit-speaker flex';
    const speakerImg = document.createElement('img');
    speakerImg.setAttribute('src', each.photo);
    speakerImg.setAttribute('alt', each.alt);
    featuredSpeaker.appendChild(speakerImg);
    const speakerDetails = document.createElement('div');
    speakerDetails.className = 'speaker flex';
    const speakerName = document.createElement('h1');
    speakerName.textContent = each.name;
    speakerDetails.appendChild(speakerName);
    const speakerProf = document.createElement('span');
    speakerProf.textContent = each.proffessional;
    speakerDetails.appendChild(speakerProf);
    const line = document.createElement('hr');
    speakerDetails.appendChild(line);
    const speakerExp = document.createElement('p');
    speakerExp.textContent = each.experience;
    speakerDetails.appendChild(speakerExp);
    featuredSpeaker.appendChild(speakerDetails);
    document.querySelector('.feature-container').appendChild(featuredSpeaker);
  });
}

function summitSpeakers() {
  document.querySelector('.feature-container').innerHTML = '';
  if (visualViewport.width > 768) {
    showSpeakers(summitData);
  } else showSpeakers(summitData.filter((fea) => fea.hidden === false));
}

summitSpeakers();
window.addEventListener('resize', summitSpeakers);

document.getElementById('more-button').addEventListener('click', (e) => {
  showSpeakers(summitData.filter((fea) => fea.hidden === true));
  e.target.remove();
});
