import './style.css'

document.querySelector('#app').innerHTML = `
  <div class="container">
    <header>
      <h1>Refroidissement passif des bâtiments – Projet expérimental</h1>
    </header>

    <div class="introduction">
      <p>Ce projet vise à explorer des solutions de refroidissement passif inspirées des tours à vent, 
      en reproduisant expérimentalement un écoulement gravitaire basé sur la densité de l'eau salée.</p>
    </div>

    <section class="video-gallery">
      <h2>Vidéos des expériences</h2>
      <div class="videos-grid">
        <div class="video-card">
          <div class="video-container">
            <iframe 
              class="video-player"
              src="https://www.youtube.com/embed/aARLB7C0Les?si=5YlHo7cgOxHKTmBn"
              title="Effet de la salinité sur l'écoulement"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen>
            </iframe>
          </div>
          <div class="video-caption">Effet de la salinité sur l'écoulement</div>
        </div>
        <div class="video-card">
          <div class="video-container">
            <iframe 
              class="video-player"
              src="https://www.youtube.com/embed/620omdSZzBs?si=hhUdacZEoJSmvVap"
              title="Variation de l'angle d'entrée"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen>
            </iframe>
          </div>
          <div class="video-caption">Variation de l'angle d'entrée</div>
        </div>
        <div class="video-card">
          <div class="video-container">
            <iframe 
              class="video-player"
              src="https://www.youtube.com/embed/YOUR_THIRD_VIDEO_ID"
              title="Hauteur sous plafond et intrusion du front salé"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen>
            </iframe>
          </div>
          <div class="video-caption">Hauteur sous plafond et intrusion du front salé</div>
        </div>
      </div>
    </section>

    <footer>
      <p>Projet réalisé par AMEUR Fares, GUILLEMETTE Axel et BLANC Pierric – ENSEEIHT Toulouse MFEE</p>
    </footer>
  </div>
`