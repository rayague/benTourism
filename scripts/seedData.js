import firestore from '@react-native-firebase/firestore';

const seedData = async () => {
  const sites = [
    {
      id: '1',
      title: 'Porte du Non-Retour',
      description:
        "La Porte du Non-Retour à Ouidah est un monument historique symbolisant le point de départ des Africains réduits en esclavage lors de la traite transatlantique des esclaves. Explorez sa signification et apprenez l'histoire de l'esclavage.",
      image:
        'https://prod.cdn-medias.jeuneafrique.com/cdn-cgi/image/q=auto,f=auto,metadata=none,width=1215,fit=cover/https://prod.cdn-medias.jeuneafrique.com/medias/2017/04/05/ouidah_porte_non_retour_benin.jpg',
      price: 'Rs.72,999',
      location: 'Ouidah',
      idAgency: null,
    },
    {
      id: '2',
      title: 'Village Lacustre de Ganvié',
      description:
        'Ganvié est un village lacustre unique au Bénin, construit sur pilotis au milieu du lac Nokoué. Découvrez sa culture vibrante, ses maisons colorées et son mode de vie traditionnel.',
      image:
        'https://www.voyage-benin.com/cdn/bj-public/shutterstock_1150989716.jpg',
      price: 'Rs.215,998',
      location: 'Abomey-Calavi',
      idAgency: null,
    },
    {
      id: '3',
      title: "Palais des Rois d'Allada",
      description:
        "Le Palais Royal d'Allada est un monument historique au Bénin, autrefois siège du Royaume d'Allada. Explorez son architecture, ses artefacts royaux et apprenez l'histoire du royaume.",
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Une_vue_des_embl%C3%A8mes_de_certains_rois_d%27Allada.jpg/1200px-Une_vue_des_embl%C3%A8mes_de_certains_rois_d%27Allada.jpg',
      price: 'Rs.115,898',
      location: 'Allada',
      idAgency: null,
    },
    {
      id: '4',
      title: "Palais des Rois d'Abomey",
      description:
        "Le Palais des Rois d'Abomey est un site du patrimoine mondial de l'UNESCO au Bénin, présentant l'histoire et la culture du Royaume du Dahomey. Explorez son architecture emblématique, ses reliques royales et ses expositions muséales.",
      image:
        'https://www.gobyava.com/wp-content/uploads/2020/12/couv-1632x816.jpg',
      price: 'Rs.45,690',
      location: 'Abomey',
      idAgency: null,
    },
    {
      id: '5',
      title: 'Musée ethnographique Alexandre-Sénou Adandé',
      description:
        "Le Musée ethnographique Alexandre-Sénou Adandé à Porto-Novo présente la diversité culturelle du Bénin à travers ses expositions sur les arts traditionnels, l'artisanat et les rituels. Explorez sa collection de masques, de sculptures et d'objets cérémoniels.",
      image:
        'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/01/75/11/f3/porto-novo.jpg?w=900&h=600&s=1',
      price: 'Rs.325,690',
      location: 'Porto-Novo',
      idAgency: null,
    },
    {
      id: '6',
      title: 'Musée Royal de Natitingou',
      description:
        "Le Musée Royal de Natitingou présente le patrimoine culturel de la région de l'Atakora au Bénin. Explorez ses expositions sur l'artisanat traditionnel, les rituels et les artefacts historiques.",
      image:
        'https://oredolacultours.wordpress.com/wp-content/uploads/2021/01/fb_img_1611756700285168907946.jpg',
      price: 'Rs.325,690',
      location: 'Natitingou',
      idAgency: null,
    },
    {
      id: '7',
      title: 'Plage de Possotomé',
      description:
        'La plage de Possotomé est une destination pittoresque sur le lac Ahémé, dans le sud du Bénin, offrant des opportunités de baignade, de bain de soleil et de détente. Explorez ses rives sablonneuses, ses cocotiers et ses vues pittoresques.',
      image:
        'https://www.ecobenin.org/wp-content/uploads/Possotome_cocotier_plage_chez_prefet_pilotis_lac_aheme_ecotourisme_ecobenin_benin.jpg',
      price: 'Rs.325,690',
      location: 'Possotomé',
      idAgency: null,
    },
    {
      id: '8',
      title: 'Parc National de la Pendjari',
      description:
        "Le Parc National de la Pendjari est une zone protégée dans le nord du Bénin, réputée pour sa biodiversité riche et ses efforts de conservation de la faune sauvage. Partez pour un safari et observez des éléphants, des lions, des hippopotames et d'autres espèces.",
      image:
        'https://images.mnstatic.com/3c/92/3c924905bf5a8904cf0680734c9ab653.jpg',
      price: 'Rs.325,690',
      location: 'Nord Bénin',
      idAgency: null,
    },
    {
      id: '9',
      title: 'La Pierre Fendue',
      description:
        "La Pierre Fendue de Dassa-Zoumè, un trésor naturel et culturel niché au cœur du Bénin, évoque un récit aussi fascinant que mystérieux. Cette remarquable formation géologique, située dans la commune de Dassa-Zoumè, incarne l'essence même du temps et de la légende.",
      image:
        'https://beninexcursion.com/wp-content/uploads/2020/05/IMG_0945-1-1000x658.jpg',
      price: 'Rs.325,690',
      location: 'Dassa-Zoumè',
      idAgency: null,
    },
    {
      id: '10',
      title: 'La Grotte de la Vierge',
      description:
        "A Dassa-Zoumé, la Grotte de la Vierge est une petite grotte, creusée en bas d’une colline, où serait apparue la Vierge. Elle est donc vite devenue un sanctuaire marial. Alors, tous les ans, vers le 15 août, un pèlerinage y draine des foules très nombreuses venant de tout le Bénin, mais même des pays voisins de la sous-région. Devant la grotte Arigbo, c’est son nom officiel, une basilique de style brut de décoffrage est également ouverte au culte depuis 2002. On peut y jeter un coup d'œil, uniquement si l'on passe dans le coin.",
      image:
        'https://www.gouv.bj/upload/thumbnails/articles//0055566001605990575.jpeg',
      price: 'Rs.325,690',
      location: 'Dassa-Zoumè',
      idAgency: null,
    },
    {
      id: '11',
      title: 'Cascade de Kota',
      description:
        "La Cascade de Kota est une attraction naturelle pittoresque au Bénin, entourée d'une végétation luxuriante et de falaises rocheuses. Profitez des sentiers de randonnée, de la baignade dans les bassins et du pique-nique dans ce cadre pittoresque.",
      image:
        'https://img-4.linternaute.com/DMIkCvlFweJXCgYVLzTEbn7MU4o=/1240x/smart/a7528dbf76284082a05abd4feffa4271/ccmcms-linternaute/2117418.jpg',
      price: 'Rs.325,690',
      location: 'Dassa-Zoumè',
      idAgency: null,
    },
  ];

  const batch = firestore().batch();

  sites.forEach(site => {
    const siteRef = firestore().collection('siteTouristique').doc(site.id);
    batch.set(siteRef, site);
  });

  try {
    await batch.commit();
    console.log('Seeding complete!');
  } catch (error) {
    console.error('Error seeding data: ', error);
  }
};

export default seedData;
