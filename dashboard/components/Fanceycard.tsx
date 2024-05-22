import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import BottomList from './BottomList';

export default function Fanceycard() {
  return (
    <SafeAreaView>
      <Text style={styles.headingText}>Découvrez avec nous</Text>
      <View>
        <View>
          <View style={[styles.card, styles.cardElevated, styles.alignCenter]}>
            <Image
              source={{
                uri: 'https://prod.cdn-medias.jeuneafrique.com/cdn-cgi/image/q=auto,f=auto,metadata=none,width=1215,fit=cover/https://prod.cdn-medias.jeuneafrique.com/medias/2017/04/05/ouidah_porte_non_retour_benin.jpg',
              }}
              style={styles.cardImage}
            />
          </View>
          <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>Porte du Non-Retour</Text>
            <Text style={styles.cardLabel}>Ouidah </Text>
            <Text style={styles.cardDescription}>
              La Porte du Non-Retour à Ouidah est un monument historique
              symbolisant le point de départ des Africains réduits en esclavage
              lors de la traite transatlantique des esclaves. Explorez sa
              signification et apprenez l'histoire de l'esclavage.
            </Text>
            <Text style={styles.cardFooter}>Rs.72,999</Text>
          </View>
        </View>

        <View>
          <View style={[styles.card, styles.cardElevated, styles.alignCenter]}>
            <Image
              source={{
                uri: 'https://www.voyage-benin.com/cdn/bj-public/shutterstock_1150989716.jpg',
              }}
              style={styles.cardImage}
            />
          </View>
          <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>Village Lacustre de Ganvié</Text>
            <Text style={styles.cardLabel}>Abomey-Calavi</Text>
            <Text style={styles.cardDescription}>
              Ganvié est un village lacustre unique au Bénin, construit sur
              pilotis au milieu du lac Nokoué. Découvrez sa culture vibrante,
              ses maisons colorées et son mode de vie traditionnel.
            </Text>
            <Text style={styles.cardFooter}>Rs.215,998</Text>
          </View>
        </View>

        <View>
          <View style={[styles.card, styles.cardElevated, styles.alignCenter]}>
            <Image
              source={{
                uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Une_vue_des_embl%C3%A8mes_de_certains_rois_d%27Allada.jpg/1200px-Une_vue_des_embl%C3%A8mes_de_certains_rois_d%27Allada.jpg',
              }}
              style={styles.cardImage}
            />
          </View>
          <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>Palais des Rois d'Allada</Text>
            <Text style={styles.cardLabel}> Allada </Text>
            <Text style={styles.cardDescription}>
              Le Palais Royal d\'Allada est un monument historique au Bénin,
              autrefois siège du Royaume d\'Allada. Explorez son architecture,
              ses artefacts royaux et apprenez l\'histoire du royaume.
            </Text>
            <Text style={styles.cardFooter}>Rs.115,898</Text>
          </View>
        </View>

        <View>
          <View style={[styles.card, styles.cardElevated, styles.alignCenter]}>
            <Image
              source={{
                uri: 'https://www.gobyava.com/wp-content/uploads/2020/12/couv-1632x816.jpg',
              }}
              style={styles.cardImage}
            />
          </View>
          <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>Palais des Rois d'Abomey</Text>
            <Text style={styles.cardLabel}> Abomey </Text>
            <Text style={styles.cardDescription}>
              Le Palais des Rois d\'Abomey est un site du patrimoine mondial de
              l\'UNESCO au Bénin, présentant l\'histoire et la culture du
              Royaume du Dahomey. Explorez son architecture emblématique, ses
              reliques royales et ses expositions muséales.
            </Text>
            <Text style={styles.cardFooter}>Rs.45,690</Text>
          </View>
        </View>

        <View>
          <View style={[styles.card, styles.cardElevated, styles.alignCenter]}>
            <Image
              source={{
                uri: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/01/75/11/f3/porto-novo.jpg?w=900&h=600&s=1',
              }}
              style={styles.cardImage}
            />
          </View>
          <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>
              Musée ethnographique Alexandre-Sénou Adandé
            </Text>
            <Text style={styles.cardLabel}> Porte-Novo </Text>
            <Text style={styles.cardDescription}>
              Le Musée ethnographique Alexandre-Sénou Adandé à Porto-Novo
              présente la diversité culturelle du Bénin à travers ses
              expositions sur les arts traditionnels, l'artisanat et les
              rituels. Explorez sa collection de masques, de sculptures et
              d'objets cérémoniels.
            </Text>
            <Text style={styles.cardFooter}>Rs.325,690</Text>
          </View>
          <View>
            <View
              style={[styles.card, styles.cardElevated, styles.alignCenter]}>
              <Image
                source={{
                  uri: 'https://oredolacultours.wordpress.com/wp-content/uploads/2021/01/fb_img_1611756700285168907946.jpg',
                }}
                style={styles.cardImage}
              />
            </View>
            <View style={styles.cardBody}>
              <Text style={styles.cardTitle}>Musée Royal de Natitingou</Text>
              <Text style={styles.cardLabel}> Natitingou </Text>
              <Text style={styles.cardDescription}>
                Le Musée Royal de Natitingou présente le patrimoine culturel de
                la région de l'Atakora au Bénin. Explorez ses expositions sur
                l'artisanat traditionnel, les rituels et les artefacts
                historiques.
              </Text>
              <Text style={styles.cardFooter}>Rs.325,690</Text>
            </View>
          </View>
        </View>

        <View>
          <View style={[styles.card, styles.cardElevated, styles.alignCenter]}>
            <Image
              source={{
                uri: 'https://www.ecobenin.org/wp-content/uploads/Possotome_cocotier_plage_chez_prefet_pilotis_lac_aheme_ecotourisme_ecobenin_benin.jpg',
              }}
              style={styles.cardImage}
            />
          </View>
          <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>Plage de Possotomé</Text>
            <Text style={styles.cardLabel}> Possotomè </Text>
            <Text style={styles.cardDescription}>
              La plage de Possotomé est une destination pittoresque sur le lac
              Ahémé, dans le sud du Bénin, offrant des opportunités de baignade,
              de bain de soleil et de détente. Explorez ses rives sablonneuses,
              ses cocotiers et ses vues pittoresques.
            </Text>
            <Text style={styles.cardFooter}>Rs.325,690</Text>
          </View>
        </View>

        <View>
          <View style={[styles.card, styles.cardElevated, styles.alignCenter]}>
            <Image
              source={{
                uri: 'https://images.mnstatic.com/3c/92/3c924905bf5a8904cf0680734c9ab653.jpg',
              }}
              style={styles.cardImage}
            />
          </View>
          <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>Parc National de la Pendjari</Text>
            <Text style={styles.cardLabel}> Nord Bénin </Text>
            <Text style={styles.cardDescription}>
              Le Parc National de la Pendjari est une zone protégée dans le nord
              du Bénin, réputée pour sa biodiversité riche et ses efforts de
              conservation de la faune sauvage. Partez pour un safari et
              observez des éléphants, des lions, des hippopotames et d\'autres
              espèces.
            </Text>
            <Text style={styles.cardFooter}>Rs.325,690</Text>
          </View>
        </View>

        <View>
          <View style={[styles.card, styles.cardElevated, styles.alignCenter]}>
            <Image
              source={{
                uri: 'https://beninexcursion.com/wp-content/uploads/2020/05/IMG_0945-1-1000x658.jpg',
              }}
              style={styles.cardImage}
            />
          </View>
          <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>La Pierre Fendue</Text>
            <Text style={styles.cardLabel}> Dassa-Zoumè </Text>
            <Text style={styles.cardDescription}>
              La Pierre Fendue de Dassa-Zoumè, un trésor naturel et culturel
              niché au cœur du Bénin, évoque un récit aussi fascinant que
              mystérieux. Cette remarquable formation géologique, située dans la
              commune de Dassa-Zoumè, incarne l'essence même du temps et de la
              légende.
            </Text>
            <Text style={styles.cardFooter}>Rs.325,690</Text>
          </View>
        </View>

        <View>
          <View style={[styles.card, styles.cardElevated, styles.alignCenter]}>
            <Image
              source={{
                uri: 'https://www.gouv.bj/upload/thumbnails/articles//0055566001605990575.jpeg',
              }}
              style={styles.cardImage}
            />
          </View>
          <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>La Grotte de la Vierge</Text>
            <Text style={styles.cardLabel}> Dassa-Zoumè </Text>
            <Text style={styles.cardDescription}>
              A Dassa-Zoumé, la Grotte de la Vierge est une petite grotte,
              creusée en bas d’une colline, où serait apparue la Vierge. Elle
              est donc vite devenue un sanctuaire marial. Alors, tous les ans,
              vers le 15 août, un pèlerinage y draine des foules très nombreuses
              venant de tout le Bénin, mais même des pays voisins de la
              sous-région. Devant la grotte Arigbo, c’est son nom officiel, une
              basilique de style brut de décoffrage est également ouverte au
              culte depuis 2002. On peut y jeter un coup d'œil, uniquement si
              l'on passe dans le coin.
            </Text>
            <Text style={styles.cardFooter}>Rs.325,690</Text>
          </View>
        </View>

        <View>
          <View style={[styles.card, styles.cardElevated, styles.alignCenter]}>
            <Image
              source={{
                uri: 'https://img-4.linternaute.com/DMIkCvlFweJXCgYVLzTEbn7MU4o=/1240x/smart/a7528dbf76284082a05abd4feffa4271/ccmcms-linternaute/2117418.jpg',
              }}
              style={styles.cardImage}
            />
          </View>
          <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>Cascade de Kota</Text>
            <Text style={styles.cardLabel}> Dassa-Zoumè </Text>
            <Text style={styles.cardDescription}>
              La Cascade de Kota est une attraction naturelle pittoresque au
              Bénin, entourée d'une végétation luxuriante et de falaises
              rocheuses. Profitez des sentiers de randonnée, de la baignade dans
              les bassins et du pique-nique dans ce cadre pittoresque.
            </Text>
            <Text style={styles.cardFooter}>Rs.325,690</Text>
          </View>
        </View>
        <BottomList />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 30,
    fontWeight: 'bold',
    paddingHorizontal: 8,
    paddingVertical: 10,
  },
  alignCenter: {
    // flex:1,
    // justifyContent:'center',
    alignItems: 'center',
  },
  card: {
    // width: 320,
    // height: 280,
    // backgroundColor:'gray'
  },
  cardElevated: {
    //    backgroundColor:'#ffffff',
    // elevation:3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  cardImage: {
    width: 330,
    height: 290,
    // borderRadius:6,
    marginBottom: 0,
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
    // borderTopEndRadius:10,
    // marginHorizontal:15,
    // marginVertical:12,
  },
  cardBody: {
    flex: 1,
    flexGrow: 1,
    backgroundColor: '#ffffff',
    paddingBottom: 20,
    marginHorizontal: 15,
    // marginVertical:0,
    marginBottom: 20,
    paddingHorizontal: 5,
  },
  cardTitle: {
    color: '#000000',
    fontSize: 23,
    fontWeight: 'bold',
    textAlign: 'auto',
    marginBottom: 4,
  },
  cardLabel: {
    color: '#111',
    fontSize: 18,
    fontWeight: '400',
    marginBottom: 6,
  },
  cardDescription: {
    color: '#333333',
    fontSize: 12,
    fontWeight: '400',
    marginBottom: 10,
    marginTop: 5,
  },
  cardFooter: {
    color: '#000000',
    fontSize: 16,
    fontWeight: '600',
  },
});
