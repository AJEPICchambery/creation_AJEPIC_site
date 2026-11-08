/* =========================================================
   1. LIENS GOOGLE FORMS
   Remplace null par le lien de réponse entre guillemets.
   Les numéros correspondent aux listes du site.
   ========================================================= */

const formulairesEvenements = {
  0: null, // Un moment sportif ensemble
  2: null, // Noël en Asso
  3: null, // Passons le cap ensemble — Réveillon
  4: null, // Le Tour du monde au Manège
  5: null  // Une sortie, de nouvelles découvertes
};

const formulairesActions = {

    // Formation_juridique

  1: 'https://docs.google.com/forms/d/e/1FAIpQLSdIxVaSFXOxd1TMQz_guQGN_y_-z-dEIvhMAv2m_TpLxboRWA/viewform?usp=publish-editor',

    // Formation_sécurité

  2: 'https://docs.google.com/forms/d/e/1FAIpQLScxviso1g6jGYdNcNKtF9twWe2QeJLdr5BWuTAwlSZkNl2Y0g/viewform?usp=publish-editor',

  // L’accueil des nouveaux — BBQ
  3: 'https://docs.google.com/forms/d/e/1FAIpQLSd-kD8dz1ZaR82zKlofZv74LySa4fPyjT27oQXde5bxfHJEbw/viewform?usp=publish-editor'
};


/* =========================================================
   2. LOGO ANIMÉ
   Permet de mettre l’animation en pause.
   ========================================================= */

if (document.querySelector('#animated-logo')) {
  const animation = document.querySelector('#animated-logo');
  const still = document.querySelector('#still-logo');
  const toggle = document.querySelector('#toggle-animation');

  // Respecte la préférence du visiteur pour des animations réduites.
  let paused = matchMedia('(prefers-reduced-motion: reduce)').matches;

  function setAnimation() {
    animation.hidden = paused;
    still.hidden = !paused;

    toggle.textContent = paused
      ? 'Lire l’animation'
      : 'Mettre l’animation en pause';

    toggle.setAttribute('aria-pressed', String(paused));
  }

  setAnimation();

  toggle.onclick = () => {
    paused = !paused;
    setAnimation();
  };
}


/* =========================================================
   3. DÉFILEMENT DES PARTENAIRES
   Gère le carrousel des logos et son bouton de pause.
   ========================================================= */

if (document.querySelector('.partners')) {
  const partners = document.querySelector('.partners');
  const partnerPause = document.querySelector('#partners-pause');
  const track = document.querySelector('.partners-track');

  let partnersPaused = matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches;

  function updatePartners() {
    partners.classList.toggle('paused', partnersPaused);

    partnerPause.textContent = partnersPaused
      ? 'Lancer le défilement'
      : 'Mettre le défilement en pause';

    partnerPause.setAttribute('aria-pressed', String(partnersPaused));

    track.style.animation = 'partners-scroll 36s linear infinite';
    track.style.animationPlayState = partnersPaused ? 'paused' : 'running';
  }

  updatePartners();

  partnerPause.onclick = () => {
    partnersPaused = !partnersPaused;
    updatePartners();
  };
}


/* =========================================================
   4. ÉVÉNEMENTS À VENIR
   L’ordre des événements correspond aux numéros des liens.
   L’événement 1 est la soirée présentée à la une.
   ========================================================= */

const events = [
  {
    day: '11',
    month: 'NOV. 2026',
    title: 'Un moment sportif ensemble',
    cat: 'sport',
    label: 'Sport',
    place: 'Lieu à confirmer',
    detail:
      'Une activité sportive est prévue le mercredi 11 novembre 2026. ' +
      'Le lieu, les horaires et les modalités de participation restent à confirmer.'
  },
  {
    day: '19',
    month: 'DÉC. 2026',
    title: 'De la lagune aux Alpes',
    cat: 'culture',
    label: 'Soirée à l’ivoirienne',
    place: 'Salle La Bisseraine · Chambéry · dès 20 h',
    detail:
      'Rendez-vous du samedi 19 au dimanche 20 décembre 2026 à la salle ' +
      'La Bisseraine, route de Labiaz, 73000 Chambéry. De 20 h jusqu’à l’aube. ' +
      'Entrée standard : 10 € avec boisson offerte. ' + 'Parking sur place. ' +
      'Rapprochez-vous du bureau de l’association pour les billets.'
  },
  {
    day: '25',
    month: 'DÉC. 2026',
    title: 'Noël en Asso',
    cat: 'culture',
    label: 'Convivialité',
    place: 'Lieu et horaires à confirmer',
    detail:
      'Un rendez-vous pour partager la convivialité de Noël le vendredi ' +
      '25 décembre 2026. Le programme, le lieu et les horaires seront précisés.'
  },
  {
    day: '31',
    month: 'DÉC. 2026',
    title: 'Passons le cap ensemble',
    cat: 'culture',
    label: 'Réveillon',
    place: 'Lieu et horaires à confirmer',
    detail:
      'Un réveillon associatif est prévu le jeudi 31 décembre 2026. ' +
      'Les modalités seront communiquées après confirmation.'
  },
  {
    day: 'MAR',
    month: '2027',
    title: 'Le Tour du monde au Manège',
    cat: 'culture',
    label: 'Cultures',
    place: 'Dates et participation à confirmer',
    detail:
      'Le Tour du monde au Manège figure au calendrier prévisionnel de mars 2027. ' +
      'Les dates et les modalités de participation de l’association restent à confirmer.'
  },
  {
    day: '01',
    month: 'MAI 2027',
    title: 'Une sortie, de nouvelles découvertes',
    cat: 'sport',
    label: 'Découverte',
    place: 'Destination et horaires à confirmer',
    detail:
      'Une sortie découverte est prévue le samedi 1er mai 2027. ' +
      'Destination, transport et modalités de participation seront précisés.'
  }
];

const eventIllustrations = [
  'assets/moment_sportif_ensemble.png',
  'assets/affiche-lagune-alpes.jpeg',
  'assets/evenement-noel.svg',
  'assets/evenement-reveillon.svg',
  'assets/evenement-cultures.svg',
  'assets/activite_decouverte_sortie_savoie.png'
];


/* =========================================================
   5. FENÊTRE DE DÉTAIL ET MENU MOBILE
   ========================================================= */

const dialog = document.querySelector('dialog');

// Protège les valeurs insérées dans le HTML des fenêtres.
function safeText(value) {
  const entities = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  };

  return String(value).replace(/[&<>"']/g, character => entities[character]);
}

function show(title, body) {
  dialog.classList.remove('event-poster-dialog');

  document.querySelector('.dialogbody').innerHTML =
    '<h2>' + title + '</h2><p>' + body + '</p>';

  dialog.showModal();
}

document.querySelector('.close').onclick = () => dialog.close();

dialog.onclick = event => {
  if (event.target === dialog) {
    dialog.close();
  }
};

document.querySelector('#privacy').onclick = () => {
  show(
    'À propos de ce site',
    'Site de présentation de l’AJEPIC à Chambéry. ' +
    'Les demandes d’inscription sont transmises à l’association via ' +
    'GoogleForm pour permettre leur traitement et une réponse par email. ' +
    'Aucun outil de suivi publicitaire n’est intégré par l’association. ' +
    'Les événements signalés comme prévisionnels restent soumis à ' +
    'confirmation par l’association.'
  );
};

const menu = document.querySelector('.menu');

menu.onclick = () => {
  const open = document.querySelector('nav').classList.toggle('open');
  menu.setAttribute('aria-expanded', String(open));
};

document.querySelectorAll('nav a').forEach(link => {
  link.onclick = () => {
    document.querySelector('nav').classList.remove('open');
    menu.setAttribute('aria-expanded', 'false');
  };
});


/* =========================================================
   6. NOS ACTUALITÉS
   Chaque bouton « Je participe » utilise le lien de sa carte.
   ========================================================= */

function render(filter = 'all') {
  const cards = events
    .map((event, index) => ({ event, index }))
    .filter(({ event, index }) => {
      return index !== 1 && (filter === 'all' || filter === event.cat);
    })
    .map(({ event, index }) => {
      // Sans lien Google Forms, ouvre le formulaire interne de cet événement.
      const lien = formulairesEvenements[index]
        || `inscription.html?evenement=${index}`;

      return `
        <article class="upcoming-card">
          <button
            class="event-illustration"
            data-event="${index}"
            aria-label="Détails : ${event.title}"
          >
            <img
              src="${eventIllustrations[index]}"
              alt="Illustration : ${event.label}"
              loading="lazy"
            >
            <span class="event-image-arrow" aria-hidden="true">↗</span>
          </button>

          <div class="upcoming-copy">
            <span class="news-date">${event.day} ${event.month}</span>
            <span class="tag">${event.label}</span>
            <h3>${event.title}</h3>
            <p>${event.place}</p>

            <button
              class="event-more"
              data-event="${index}"
              aria-label="En savoir plus : ${event.title}"
            >
              Découvrir l’événement <span aria-hidden="true">↗</span>
            </button>

            <a
              class="btn event-register"
              href="${safeText(lien)}"
              aria-label="Je participe : ${event.title}"
            >
              Je participe ↗
            </a>
          </div>
        </article>
      `;
    })
    .join('');

  document.querySelector('#events').innerHTML = `
    <div class="news-feature-heading">
      <div class="eyebrow">Le rendez-vous à ne pas manquer</div>
      <h2>À la une</h2>
    </div>

    <section class="news-teaser" aria-labelledby="teaser-title">
      <div class="teaser-copy">
        <h3 id="teaser-title">Le teaser de la soirée</h3>
        <p>Lancez la vidéo et activez le son.</p>
      </div>

      <video
        class="event-teaser-video"
        controls
        playsinline
        preload="metadata"
        poster="assets/affiche-lagune-alpes.jpeg"
        aria-label="Teaser de la soirée De la lagune aux Alpes"
      >
        <source src="assets/teaser-lagune-alpes.mp4" type="video/mp4">
        Votre navigateur ne peut pas lire cette vidéo.
        <a href="assets/teaser-lagune-alpes.mp4">Ouvrir le teaser</a>
      </video>
    </section>

    <article class="news-feature">
      <button
        class="news-feature-poster"
        data-event="1"
        aria-label="Voir l’affiche et les détails de la soirée De la lagune aux Alpes"
      >
        <img
          src="assets/affiche-lagune-alpes.jpeg"
          alt="Affiche de la soirée De la lagune aux Alpes, les 19 et 20 décembre 2026 à Chambéry"
        >
        <span>Voir l’affiche et les détails ↗</span>
      </button>

      <div class="news-feature-copy">
        <span class="feature-badge">Soirée à l’ivoirienne</span>
        <p class="feature-date">19 → 20 décembre 2026</p>
        <h3>De la lagune<br>aux Alpes</h3>

        <p class="feature-description">
          Une rencontre des cultures, entre élégance, saveurs et musique.
          Retrouvons-nous pour une soirée festive à Chambéry.
        </p>

        <dl>
          <div>
            <dt>Lieu</dt>
            <dd>Salle La Bisseraine<br>Route de Labiaz · Chambéry</dd>
          </div>
          <div>
            <dt>Horaires</dt>
            <dd>Dès 20 h et jusqu’à l’aube</dd>
          </div>
        </dl>

        <div class="feature-prices">
          <span>Standard <strong>10 €</strong></span>
        </div>

        <button class="btn orange" data-event="1">
          Découvrir la soirée et les billets ↗
        </button>

        <a
          class="feature-contact"
          href="mailto:assivoirienschambery@gmail.com?subject=Billets%20-%20De%20la%20lagune%20aux%20Alpes"
        >
          Nous contacter pour les billets
        </a>
      </div>
    </article>

    <div class="sectionhead upcoming-heading">
      <div>
        <div class="eyebrow">Les prochains rendez-vous</div>
        <h2>À venir</h2>
      </div>

      <div class="filters" aria-label="Filtrer les événements à venir">
        <button
          class="filter ${filter === 'all' ? 'active' : ''}"
          data-filter="all"
          aria-pressed="${filter === 'all'}"
        >
          Tout voir
        </button>
        <button
          class="filter ${filter === 'culture' ? 'active' : ''}"
          data-filter="culture"
          aria-pressed="${filter === 'culture'}"
        >
          Culture & convivialité
        </button>
        <button
          class="filter ${filter === 'sport' ? 'active' : ''}"
          data-filter="sport"
          aria-pressed="${filter === 'sport'}"
        >
          Sport & découvertes
        </button>
      </div>
    </div>

    <div class="upcoming-grid">
      ${cards || '<p>Aucun événement dans cette catégorie pour le moment.</p>'}
    </div>
  `;
}

const eventsSection = document.querySelector('#events');

if (eventsSection) {
  render();

  eventsSection.onclick = event => {
    const filterButton = event.target.closest('[data-filter]');

    if (filterButton) {
      const filter = filterButton.dataset.filter;

      render(filter);
      document.querySelector(`[data-filter="${filter}"]`).focus();
      return;
    }

    const eventButton = event.target.closest('[data-event]');
    if (!eventButton) return;

    const index = Number(eventButton.dataset.event);
    const selectedEvent = events[index];

    show(selectedEvent.title, selectedEvent.detail);

    // L’activité sportive et la sortie ont une image dans leur détail.

    if ([0, 5].includes(index)) {
      document.querySelector('.dialogbody').insertAdjacentHTML(
        'afterbegin',
        `
          <img
            class="dedicated-event-image"
            src="${safeText(eventIllustrations[index])}"
            alt="${safeText(selectedEvent.title)}"
          >
        `
      );
    }

    // La soirée de décembre dispose de son affiche et de ses tarifs.
    if (index === 1) {
      dialog.classList.add('event-poster-dialog');

      document.querySelector('.dialogbody').innerHTML = `
        <div class="poster-layout">
          <div class="poster-visual">
            <img
              src="assets/affiche-lagune-alpes.jpeg"
              alt="Affiche de la soirée De la lagune aux Alpes, du 19 au 20 décembre à la salle La Bisseraine à Chambéry, dès 20 h. Standard 10 €."
            >
            <a
              href="assets/affiche-lagune-alpes.jpeg"
              target="_blank"
              rel="noopener"
            >
              Ouvrir l’affiche en grand ↗
            </a>
          </div>

          <div class="poster-info">
            <span class="tag">Soirée à l’ivoirienne</span>
            <h2>De la lagune aux Alpes</h2>
            <p>Une rencontre des cultures, entre élégance, saveurs et musique.</p>

            <dl>
              <dt>Quand ?</dt>
              <dd>Du 19 au 20 décembre 2026<br>De 20 h à l’aube</dd>

              <dt>Où ?</dt>
              <dd>
                Salle La Bisseraine<br>
                Route de Labiaz, 73000 Chambéry<br>
                Parking disponible
              </dd>
            </dl>

            <div class="ticket-price">
              <strong>Standard · 10 €</strong>
              <span>Une boisson offerte.</span>
            </div>
            
            <p class="poster-program">
              Restauration ivoirienne et européenne, vente de boissons
              et animation musicale africaine et européenne.
            </p>

            <div class="ticket-contact">
              <strong>Informations et billets</strong>
              <a
                class="btn"
                href="mailto:assivoirienschambery@gmail.com?subject=Billets%20-%20De%20la%20lagune%20aux%20Alpes"
              >
                Contacter l’association ↗
              </a>
            </div>
          </div>
        </div>
      `;
    }
  };
}


/* =========================================================
   7. FORMULAIRE INTERNE DES ÉVÉNEMENTS
   Utilisé pour les activités sans lien Google Forms.
   ========================================================= */

const registrationForm = document.querySelector('#event-registration');

if (registrationForm) {
  const rawEvent = new URLSearchParams(location.search).get('evenement');

  const eventId = rawEvent !== null && /^\d+$/.test(rawEvent)
    ? Number(rawEvent)
    : -1;

  const chosenEvent = events[eventId];

  if (!chosenEvent) {
    registrationForm.hidden = true;

    document.querySelector('#registration-event-title').textContent =
      'Choisissez un événement';

    document.querySelector('#registration-event-info').textContent =
      'Rendez-vous dans Nos actualités et cliquez sur Je participe ' +
      'pour le rendez-vous de votre choix.';
  } else {
    document.querySelector('#registration-event-title').textContent =
      chosenEvent.title;

    document.querySelector('#registration-event-info').textContent =
      `${chosenEvent.day} ${chosenEvent.month} · ${chosenEvent.place}`;

    registrationForm.elements.Evenement.value = chosenEvent.title;

    registrationForm.elements.Date_evenement.value =
      `${chosenEvent.day} ${chosenEvent.month}`;

    registrationForm.elements._subject.value =
      'AJEPIC - Demande d’inscription - ' + chosenEvent.title;
    registrationForm.elements._url.value = window.location.href;

    registrationForm.addEventListener('submit', () => {
      const button = registrationForm.querySelector('button[type=submit]');
      button.disabled = true;
      button.textContent = 'Transmission en cours…';
    });

    window.addEventListener('pageshow', () => {
      const button = registrationForm.querySelector('button[type=submit]');
      button.disabled = false;
      button.textContent = 'Soumettre ma demande';
    });
  }
}


/* =========================================================
   8. MEMBRES DU BUREAU
   Les données alimentent le trombinoscope au clic.
   ========================================================= */

const boardMembers = [
  {
    name: 'Assadou Jocelyn APPIA',
    role: 'Président',
    group: 'Présidence',
    mission: null,
    photo: 'assets/president.jpg'
  },
  {
    name: 'ZO BAFIBA',
    role: 'Vice-président',
    group: 'Vice-présidence',
    mission: null,
    photo: 'assets/vp_momo.jpeg'
  },
  {
    name: 'VANLY TOURÉ',
    role: 'Trésorier général',
    group: 'Finances',
    mission: null
  },
  {
    name: 'Joel KOUAKOU',
    role: 'Commissaire aux comptes',
    group: 'Finances',
    mission: null
  },
  {
    name: 'Serge-Olivier YAO',
    role: 'Secrétaire général',
    group: 'Secrétariat général',
    mission: null,
    photo: 'assets/serge-olivier.jpg',
    crop: [100, 5, 220, 300]
  },
  {
    name: 'Sullivan Pierre Aristide YAMONTCHE',
    role: 'Secrétaire général adjoint',
    group: 'Secrétariat général',
    mission: null,
    photo: 'assets/yamontche.jpg',
    crop: [130, 0, 180, 210]
  },
  {
    name: 'SORO Foungnigué Serge',
    role: 'Secrétaire à l’organisation',
    group: 'Organisation',
    mission: null,
    photo: 'assets/serge-soro.jpg'
  },
  {
    name: 'Guy Fréjuste Koffi KONAN',
    role: 'Secrétaire à l’organisation adjoint',
    group: 'Organisation',
    mission: null
  },
  {
    name: 'Emeline ANOUGBA',
    role: 'Chargée des affaires sociales',
    group: 'Affaires sociales',
    mission: null,
    photo: 'assets/emeline-anougba.jpeg'
  },
  {
    name: 'Ivan AKE',
    role: 'Chargé des affaires sociales adjoint',
    group: 'Affaires sociales',
    mission: null
  },
  {
    name: 'Iya TRAORE',
    role: 'Chargé de la communication',
    group: 'Communication',
    mission: null
  },
  {
    name: 'Jausette Kevine KOUAMÉ',
    role: 'Chargée de communication adjointe',
    group: 'Communication',
    mission: null,
    photo: 'assets/jausette-kouame.jpg'
  },
  {
    name: 'Yves AKO',
    role: 'Chargé des partenariats et du développement stratégique',
    group: 'Partenariats et développement stratégique',
    mission: null,
    photo: 'assets/yves-ako.jpg'
  },
  {
    name: 'Emmanuel Désiré MUNGAGBEU',
    role: 'Chargé des partenariats et du développement stratégique adjoint',
    group: 'Partenariats et développement stratégique',
    mission: null,
    photo: 'assets/emmanuel-mungagbeu.jpg',
    crop: [130, 0, 150, 190]
  },
  {
    name: 'Sadia BAKAYOKO',
    role: 'Responsable du bien-être et du mieux-vivre',
    group: 'Bien-être et mieux-vivre',
    mission: null,
    photo: 'assets/sadia-bakayoko.jpg'
  },
  {
    name: 'Koffi Eliézer KOUAKOU',
    role: 'Co-responsable du bien-être et du mieux-vivre',
    group: 'Bien-être et mieux-vivre',
    mission: null
  }
];


/* =========================================================
   9. NOS ACTIONS
   0 = collecte, 1 = démarches, 2 = sécurité, 3 = BBQ.
   ========================================================= */

const initiativesData = [
  {
    title: 'Des vêtements chauds pour l’hiver',
    tag: 'Solidarité',
    date: 'Collecte : 10 novembre 2026',
    image: 'assets/collecte-vetements-hiver.jpeg',
    summary:
      'Collecte de vêtements d’hiver le 10 novembre 2026, ' +
      'avant la distribution prévue en décembre.',
    detail:
      'Donnez une seconde vie à vos vêtements d’hiver ! ' +
      'La collecte aura lieu le 10 novembre 2026. ' +
      'Premier point de collecte : MJC de Chambéry, 311 faubourg Montmélian, ' +
      '73000 Chambéry.' + ' Un deuxième point de collecte : Maison des associations de Chambéry 67 Rue Saint-François de Sales, 73000 Chambéry. ' +
      'La distribution de vêtements chauds reste prévue en décembre 2026, ' +
      'selon les vêtements disponibles et les moyens de l’association.',
    intervenant: null,
    linkNote:
      'Horaires de collecte et deuxième point de dépôt à venir. ' +
      'Les modalités de distribution seront précisées ultérieurement.'
  },
  {
    title: 'Anticiper les démarches administratives',
    tag: 'Formation bénévole · Juriste',
    date: 'Lien prévu fin novembre 2026',
    image: 'assets/formation_benevoles_anticiper_demarches_administratives.png',
    summary:
      'Quelle stratégie adopter pour anticiper les procédures ' +
      'administratives et prévenir les risques d’OQTF ?',
    detail:
      'Une formation bénévole animée par un juriste est envisagée autour ' +
      'du thème : « Quelle stratégie adopter pour anticiper les procédures ' +
      'administratives et prévenir les risques d’obligation de quitter le ' +
      'territoire français (OQTF) ? ». Le lien de participation pourra être ' +
      'communiqué fin novembre 2026. La date de la formation, les horaires ' +
      'et les modalités restent à confirmer.',
    intervenant: 'Un juriste. Son nom sera précisé ultérieurement.',
    linkNote:
      'Lien de participation à communiquer fin novembre 2026. ' +
      'Aucun lien n’est encore disponible.'
  },
  {
    title: 'Sécurité : nos droits et nos devoirs',
    tag: 'Formation · Sécurité',
    date: 'Date à confirmer',
    image: 'assets/formation_benevoles_securite_droits_devoirs.png',
    summary:
      'Une rencontre d’information dispensée par un commissaire de police ivoirien.',
    detail:
      'Une formation sur la sécurité, nos droits et nos devoirs sera proposée ' +
      'avec l’intervention d’un commissaire de police ivoirien. Le programme ' +
      'détaillé, le nom de l’intervenant, la date, le lieu et les modalités de ' +
      'participation seront communiqués après confirmation.',
    intervenant:
      'Un commissaire de police ivoirien. Son nom sera précisé ultérieurement.',
    linkNote: 'Programme, date et modalités de participation à confirmer.'
  },
  {
    title: 'L’accueil des nouveaux',
    tag: 'Accueil et convivialité',
    date: 'Autour du 14 juillet, chaque année',
    image: 'assets/accueil-bbq.jpg',
    summary:
      'Un BBQ en plein été pour accueillir les nouveaux et partager ' +
      'un moment convivial.',
    detail:
      'Nous vous accueillons dans la ferveur autour d’un BBQ ! En plein été, ' +
      'généralement autour du 14 juillet, l’AJEPIC rassemble les nouveaux ' +
      'membres et la communauté autour d’un barbecue convivial. Un moment ' +
      'pour faire connaissance, échanger et partager un repas. La date ' +
      'précise, le lieu et les modalités de la prochaine édition restent à confirmer.',
    intervenant: null,
    linkNote: 'Prochaine édition : informations pratiques à confirmer.',
    overlay: 'Nous vous accueillons dans la ferveur autour d’un BBQ'
  }
];

// Construit les boutons affichés dans la fiche de chaque action.
function initiativeFormButtons(id) {
  // La collecte dispose de deux formulaires distincts.
  if (id === 0) {
    return `
      <div class="initiative-form-actions">
        <a
          class="btn orange"
          href="action-participation.html?action=don"
        >
          Je donne des vêtements ↗
        </a>

        <a
          class="btn"
          href="action-participation.html?action=besoin"
        >
          Je notifie un besoin ↗
        </a>
      </div>
    `;
  }

  // Récupère le lien associé au numéro de l’action.
  const lien = formulairesActions[id]
    || `action-participation.html?action=${id}`;

  const libelle = id === 3 ? 'Je participe au BBQ' : 'S’inscrire';

  return `
    <a class="btn orange" href="${safeText(lien)}">
      ${libelle} ↗
    </a>
  `;
}


/* =========================================================
   10. DÉTAIL D’UN MEMBRE OU D’UNE ACTION
   ========================================================= */

document.addEventListener('click', event => {
  const personButton = event.target.closest('[data-member]');
  const initiativeButton = event.target.closest('[data-initiative]');

  if (personButton) {
    const person = boardMembers[Number(personButton.dataset.member)];
    if (!person) return;

    dialog.classList.remove('event-poster-dialog');
    dialog.classList.add('profile-dialog');

    // Prépare le portrait, avec cadrage si une zone est définie.
    let portrait;

    if (person.crop) {
      portrait = `
        <div class="profile-photo profile-photo-portrait">
          <svg
            class="member-cropped-photo"
            viewBox="${person.crop.join(' ')}"
            role="img"
            aria-label="${safeText(person.name)}"
          >
            <image href="${safeText(person.photo)}" width="400" height="400"/>
          </svg>
        </div>
      `;
    } else if (person.photo) {
      portrait = `
        <div class="profile-photo profile-photo-portrait">
          <img
            src="${safeText(person.photo)}"
            alt="${safeText(person.name)}, ${safeText(person.role)}"
          >
        </div>
      `;
    } else {
      portrait = `
        <div class="profile-photo" aria-label="Photo à venir">
          <svg viewBox="0 0 80 80" aria-hidden="true">
            <circle cx="40" cy="27" r="13" fill="currentColor"/>
            <path d="M15 68v-8a25 25 0 0 1 50 0v8z" fill="currentColor"/>
          </svg>
          <span>Photo à venir</span>
        </div>
      `;
    }

    document.querySelector('.dialogbody').innerHTML = `
      ${portrait}
      <div class="eyebrow">${safeText(person.group)}</div>
      <h2>${safeText(person.name)}</h2>

      <dl class="profile-info">
        <dt>Fonction</dt>
        <dd>${safeText(person.role)}</dd>
      </dl>

      ${person.mission ? `<p>${safeText(person.mission)}</p>` : ''}

      <p class="profile-update">
        Bureau en exercice pour le mandat 2026–2028,
        selon le communiqué de composition transmis.
      </p>
    `;

    dialog.showModal();
  }

  if (initiativeButton) {
    const id = Number(initiativeButton.dataset.initiative);
    const action = initiativesData[id];

    if (!action) return;

    dialog.classList.remove('event-poster-dialog', 'profile-dialog');
    dialog.classList.add('initiative-dialog');

    // Le BBQ affiche son texte sur la photo.
    const visual = action.overlay
      ? `
        <div class="bbq-photo-overlay detail-bbq">
          <img
            src="${safeText(action.image)}"
            alt="Un BBQ estival pour accueillir les nouveaux"
          >
          <strong>${safeText(action.overlay)}</strong>
        </div>
      `
      : `
        <img
          class="initiative-detail-image${id === 0 ? ' collection-poster' : ''}"
          src="${safeText(action.image)}"
          alt="Illustration de l’action"
        >
      `;

    const intervenant = action.intervenant
      ? `<p><strong>Intervenant :</strong> ${safeText(action.intervenant)}</p>`
      : '';

    document.querySelector('.dialogbody').innerHTML = `
      ${visual}
      <span class="tag">${safeText(action.tag)}</span>
      <h2>${safeText(action.title)}</h2>
      <p class="initiative-detail-date">${safeText(action.date)}</p>
      <p>${safeText(action.detail)}</p>
      ${intervenant}
      <p class="initiative-link-note">${safeText(action.linkNote)}</p>
      ${initiativeFormButtons(id)}
    `;

    dialog.showModal();
  }
});

dialog.addEventListener('close', () => {
  dialog.classList.remove('profile-dialog', 'initiative-dialog');
});


/* =========================================================
   11. FORMULAIRES INTERNES DES ACTIONS
   Prépare les champs selon le type de demande.
   ========================================================= */

const actionForm = document.querySelector('#initiative-registration');

if (actionForm) {
  const key = new URLSearchParams(location.search).get('action');

  let title = '';
  let subject = '';
  let description = '';

  if (key === 'don') {
    title = 'Je donne des vêtements';
    subject = 'Proposition de don de vêtements';
    description =
      'Décrivez les vêtements proposés : type, tailles, ' +
      'quantité approximative et disponibilités.';
  } else if (key === 'besoin') {
    title = 'Je notifie un besoin';
    subject = 'Signalement d’un besoin en vêtements';
    description =
      'Décrivez les vêtements recherchés : type, tailles et quantité. ' +
      'Évitez de mentionner des informations personnelles sensibles sur un tiers.';
  } else if (['1', '2', '3'].includes(key)) {
    title = initiativesData[Number(key)].title;
    subject = 'Demande d’inscription - ' + title;
  }

  if (!title) {
    actionForm.hidden = true;

    document.querySelector('#initiative-form-title').textContent =
      'Choisissez une action';

    document.querySelector('#initiative-form-intro').textContent =
      'Consultez Nos actions et ouvrez le détail de l’initiative de votre choix.';
  } else {
    document.querySelector('#initiative-form-title').textContent = title;

    document.querySelector('#initiative-form-intro').textContent =
      key === 'don' || key === 'besoin'
        ? 'Transmettez votre message à l’association. ' +
          'Nous échangerons selon nos disponibilités et nos moyens.'
        : 'Envoyez votre demande d’inscription. ' +
          'L’association vous répondra par mail pour préciser les modalités.';

    actionForm.elements.Action.value = title;
    actionForm.elements._subject.value = 'AJEPIC - ' + subject;

     actionForm.elements._url.value = window.location.href;

    // Le don et la demande de vêtements nécessitent une description.
    if (description) {
      document.querySelector('#initiative-description-wrap').hidden = false;

      document.querySelector('#initiative-description-label').textContent =
        description;

      const field = document.querySelector('#initiative-description');
      field.required = true;
      field.disabled = false;
    }

    actionForm.addEventListener('submit', () => {
      const button = actionForm.querySelector('button[type=submit]');
      button.disabled = true;
      button.textContent = 'Transmission en cours…';
    });

    window.addEventListener('pageshow', () => {
      const button = actionForm.querySelector('button[type=submit]');
      button.disabled = false;
      button.textContent = 'Soumettre';
    });
  }
}


/* =========================================================
   12. DIAPORAMA DE « NOUS REJOINDRE »
   Le défilement automatique avance toutes les 4 secondes.
   ========================================================= */

const slideshow = document.querySelector('.adhesion-slideshow');

if (slideshow) {
  const slides = [...slideshow.querySelectorAll('[data-slide]')];
  const pause = slideshow.querySelector('#slide-pause');

  let slideIndex = 0;
  let slidePaused = matchMedia('(prefers-reduced-motion: reduce)').matches;

  function showSlide(index) {
    // Revient au début après la dernière image, et inversement.
    slideIndex = (index + slides.length) % slides.length;

    slides.forEach((slide, position) => {
      slide.hidden = position !== slideIndex;
    });

    slideshow.querySelector('#slide-status').textContent =
      `${slideIndex + 1} / ${slides.length}`;
  }

  function updatePause() {
    pause.textContent = slidePaused
      ? 'Lancer le diaporama'
      : 'Mettre en pause';

    pause.setAttribute('aria-pressed', String(slidePaused));
  }

  slideshow.querySelector('#slide-next').addEventListener('click', () => {
    slidePaused = true;
    updatePause();
    showSlide(slideIndex + 1);
  });

  slideshow.querySelector('#slide-previous').addEventListener('click', () => {
    slidePaused = true;
    updatePause();
    showSlide(slideIndex - 1);
  });

  pause.addEventListener('click', () => {
    slidePaused = !slidePaused;
    updatePause();
  });

  updatePause();

  // Suspend le défilement pendant la consultation du diaporama.
  setInterval(() => {
    const canAdvance =
      !slidePaused &&
      !document.hidden &&
      !slideshow.matches(':hover') &&
      !slideshow.contains(document.activeElement);

    if (canAdvance) {
      showSlide(slideIndex + 1);
    }
  }, 4000);
}


/* =========================================================
   13. ACTUALITÉS PASSÉES
   Les données indiquent les photos, galeries et vidéos.
   ========================================================= */

const historyData = [
  {
    title: 'Assemblée générale à Chambéry',
    date: '3 octobre 2026',
    image: 'assets/evenement-cultures.svg',
    text:
      'L’assemblée générale du 3 octobre 2026 à Chambéry fait partie des ' +
      'temps de vie associative mentionnés dans le communiqué du bureau. ' +
      'Les photos et souvenirs de ce rendez-vous seront ajoutés lorsqu’ils ' +
      'seront disponibles.'
  },
  {
    title: 'Un nouveau bureau pour 2026–2028',
    date: 'Octobre 2026',
    image: 'assets/action-accueil.svg',
    text:
      'Une nouvelle équipe a été annoncée pour porter le mandat 2026–2028 ' +
      'de l’AJEPIC. Sa composition est présentée dans l’organigramme de la ' +
      'page Qui sommes-nous. Les photos de cette étape seront ajoutées dès ' +
      'qu’elles seront disponibles.'
  },
  {
    title: 'Les Marchés des continents',
    date: 'Retour en vidéo',
    image: 'assets/marches-des-continents.jpg',
    video: 'assets/marches-des-continents.mp4',
    text:
      'L’AJEPIC a participé aux Marchés des continents. Retrouvez un moment ' +
      'de cette participation à travers la vidéo partagée par l’association.'
  },
  {
    title: 'Le Tour du monde au Manège',
    date: 'Côte d’Ivoire, pays à l’honneur',
    image: 'assets/tour-du-monde-pays-honneur.jpg',
    photo: true,
    video: 'assets/tour-du-monde-2024.mp4',
    text:
      'Un souvenir de notre participation au Tour du monde au Manège, ' +
      'où la Côte d’Ivoire était pays à l’honneur. Une occasion de partager ' +
      'notre culture et de nous retrouver autour de cet événement. ' +
      'Retrouvez également la vidéo de l’édition 2024.'
  },
  {
    title: 'Barbecue des nouveaux membres — 1re édition',
    date: 'Événement passé',
    image: 'assets/barbecue-edition1.jpg',
    photo: true,
    text:
      'Un moment convivial pour accueillir les nouveaux membres ' +
      'et faire connaissance.',
    gallery: null
  },
  {
    title: 'Barbecue des nouveaux membres — 2e édition',
    date: 'Événement passé',
    image: 'assets/barbecue-edition2.jpg',
    photo: true,
    text:
      'Retour en images sur une journée de rencontres, de partage et ' +
      'de convivialité autour du barbecue des nouveaux membres.',
    gallery: [
      'assets/barbecue-edition2.jpg',
      'assets/barbecue-edition2-groupe.jpg',
      'assets/barbecue-edition2-repas.jpg'
    ]
  },
  {
    title: 'Match amical AEIC – AESII',
    date: 'Événement passé',
    image: 'assets/match-amical.jpg',
    photo: true,
    text:
      'Un agréable match amical entre l’AEIC de Chambéry et l’AESII ' +
      'de l’Isère, au stade du Biollay.',
    gallery: null
  }
];

document.addEventListener('click', event => {
  const button = event.target.closest('[data-history]');
  if (!button) return;

  const item = historyData[Number(button.dataset.history)];
  if (!item) return;

  const body = document.querySelector('.dialogbody');

  dialog.classList.remove('event-poster-dialog', 'profile-dialog');
  dialog.classList.add('initiative-dialog');

  if (item.video) {
    // Une archive peut présenter une photo et une vidéo.
    dialog.classList.add('history-video-dialog');

    const photo = item.photo
      ? `
        <a href="${safeText(item.image)}" target="_blank" rel="noopener">
          <img
            class="history-full-photo"
            src="${safeText(item.image)}"
            alt="${safeText(item.title)}"
          >
        </a>
      `
      : '';

    body.innerHTML = `
      ${photo}

      <span class="tag">Événement passé · Retour en vidéo</span>
      <h2>${safeText(item.title)}</h2>
      <p>${safeText(item.text)}</p>

      <video
        class="history-video"
        controls
        playsinline
        preload="metadata"
        poster="${safeText(item.image)}"
        aria-label="Vidéo : ${safeText(item.title)}"
      >
        <source src="${safeText(item.video)}" type="video/mp4">
        Votre navigateur ne peut pas lire cette vidéo.
        <a href="${safeText(item.video)}">Ouvrir la vidéo</a>
      </video>

      <p class="history-video-help">
        Lancez la lecture et activez le son pour retrouver
        ce moment de vie associative.
      </p>
    `;
  } else if (item.photo) {
    // Affiche la photo principale et, si elle existe, la galerie.
    dialog.classList.remove('history-video-dialog');
    dialog.classList.add('history-photo-dialog');

    const gallery = item.gallery
      ? `
        <div class="history-gallery">
          ${item.gallery.slice(1).map(source => `
            <a href="${safeText(source)}" target="_blank" rel="noopener">
              <img
                src="${safeText(source)}"
                alt="${safeText(item.title)} — souvenir"
                loading="lazy"
              >
            </a>
          `).join('')}
        </div>
      `
      : '';

    body.innerHTML = `
      <span class="tag">Événement passé</span>
      <h2>${safeText(item.title)}</h2>
      <p class="history-photo-caption">${safeText(item.date)}</p>

      <a
        class="history-photo-link"
        href="${safeText(item.image)}"
        target="_blank"
        rel="noopener"
        aria-label="Voir la photo en grand"
      >
        <img
          class="history-full-photo"
          src="${safeText(item.image)}"
          alt="${safeText(item.title)}"
        >
      </a>

      <p>${safeText(item.text)}</p>

      ${gallery}

      <a
        class="textlink"
        href="${safeText(item.image)}"
        target="_blank"
        rel="noopener"
      >
        Ouvrir la photo en grand ↗
      </a>
    `;
  } else {
    // Affiche l’illustration de l’archive.
    dialog.classList.remove('history-video-dialog', 'history-photo-dialog');

    body.innerHTML = `
      <img
        class="initiative-detail-image"
        src="${safeText(item.image)}"
        alt="Illustration du souvenir"
      >

      <span class="tag">Événement passé · ${safeText(item.date)}</span>
      <h2>${safeText(item.title)}</h2>
      <p>${safeText(item.text)}</p>

      <p class="profile-update">
        Illustration provisoire, en attendant les photos de cet événement.
      </p>
    `;
  }

  dialog.showModal();
});

// Arrête les vidéos à la fermeture de la fenêtre.
dialog.addEventListener('close', () => {
  dialog.querySelectorAll('video').forEach(video => video.pause());

  dialog.classList.remove(
    'history-video-dialog',
    'history-photo-dialog'
  );
});