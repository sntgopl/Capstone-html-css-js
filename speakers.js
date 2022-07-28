document.addEventListener('DOMContentLoaded', () => {
  const speakersList = [
    {
      name: 'Sanzica Lepons Tiago',
      pic: 'images/Picture3.png',
      titles: 'Head of Department',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      name: 'Zicale Spon Agoitnas',
      pic: 'images/Picture3.png',
      titles: 'Business Manager',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      name: 'Santiago Pons Lezica',
      pic: 'images/Picture3.png',
      titles: 'Mathematics teacher',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      name: 'Snop Acizel Ogaitnas',
      pic: 'images/Picture3.png',
      titles: 'Philosopher',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      name: 'Santiago Pons Lezica',
      pic: 'images/Picture3.png',
      titles: 'Artist',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      name: 'Lezons Poica Tiagosan',
      pic: 'images/Picture3.png',
      titles: 'World Discoverer',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    }];

  const speakerArea = document.querySelector('#section-speakers');
  const seeMoreButton = document.querySelector('#showMoreButton');

  function addSpeakers() {
    speakerArea.innerHTML = '';
    speakersList.forEach((speaker) => {
      speakerArea.innerHTML += `
        <div class="speaker-card">
            <img id="picture" src='${speaker.pic}' alt='${speaker.name}'>
            <div id="content">
                <h3 id="name">'${speaker.name}'</h3>
                <h4 id="titles">'${speaker.titles}'</h4>
                <span class="line2"></span>
                <p id="description">'${speaker.description}'</p>
            </div>
        </div>
        `;
    });
    seeMoreButton.classList.add('active');
    seeMoreButton.innerHTML = `
        SHOW LESS<img src="images/angle-up.svg">
        `;
  }

  function hideSpeakers() {
    speakerArea.innerHTML = '';
    for (let i = 0; i < 2;) {
      const speaker = speakersList[i];
      speakerArea.innerHTML += `
          <div class="speaker-card">
              <img id="picture" src='${speaker.pic}' alt='${speaker.name}'>
              <div id="content">
                  <h3 id="name">'${speaker.name}'</h3>
                  <h4 id="titles">'${speaker.titles}'</h4>
                  <span class="line2"></span>
                  <p id="description">'${speaker.description}'</p>
              </div>
          </div>
          `;
    }
    seeMoreButton.classList.remove('active');
    seeMoreButton.innerHTML = `
          MORE<img src="images/angle-down.svg">    
      `;
  }

  seeMoreButton.addEventListener('click', () => {
    if (seeMoreButton.classList.contains('active')) {
      seeMoreButton.addEventListener('click', hideSpeakers);
    } else {
      seeMoreButton.addEventListener('click', addSpeakers);
    }
  });
});