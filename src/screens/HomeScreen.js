import { useState, useEffect } from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const jogos = [
  {
    id: '1',
    titulo: 'The Legend of Zelda: Breath of the Wild',
    genero: 'Aventura / Mundo Aberto',
    plataforma: 'Nintendo Switch',
    nota: '10/10',
    sinopse:
      'Explore um vasto mundo aberto em Hyrule. Resolva puzzles, enfrente inimigos e descubra segredos em uma das aventuras mais aclamadas da historia dos games.',
  },
  {
    id: '2',
    titulo: 'Red Dead Redemption 2',
    genero: 'Acao / Mundo Aberto',
    plataforma: 'PS4 / Xbox / PC',
    nota: '10/10',
    sinopse:
      'Uma epica historia sobre a vida fora da lei no coracao da America. Viva a aventura de Arthur Morgan no velho oeste em um mundo detalhado e imersivo.',
  },
  {
    id: '3',
    titulo: 'God of War',
    genero: 'Acao / Aventura',
    plataforma: 'PS4 / PC',
    nota: '10/10',
    sinopse:
      'Kratos e seu filho Atreus embarcam em uma jornada pelos Nove Reinos da mitologia nordica. Um dos jogos mais premiados de sua geracao.',
  },
  {
    id: '4',
    titulo: 'Hollow Knight',
    genero: 'Metroidvania / Plataforma',
    plataforma: 'PC / Switch / PS4',
    nota: '9/10',
    sinopse:
      'Explore um vasto reino subterraneo habitado por insetos. Um desafio preciso e belo, com um mundo imenso para descobrir.',
  },
  {
    id: '5',
    titulo: 'Celeste',
    genero: 'Plataforma / Indie',
    plataforma: 'PC / Switch / PS4',
    nota: '9/10',
    sinopse:
      'Ajude Madeline a sobreviver sua viagem interior pela montanha Celeste. Um platformer desafiador com uma historia tocante sobre superacao.',
  },
  {
    id: '6',
    titulo: 'Stardew Valley',
    genero: 'Simulacao / RPG',
    plataforma: 'PC / Switch / Mobile',
    nota: '9/10',
    sinopse:
      'Herde a fazenda do seu avo e comece uma nova vida. Plante, colete, construa relacionamentos e explore cavernas neste mundo relaxante.',
  },
];


export default function HomeScreen({ navigation }) {
  const [busca, setBusca] = useState('');

  const [jogosFiltrados, setJogosFiltrados] = useState(jogos);

  useEffect(() => {
    const resultado = jogos.filter((jogo) =>
      jogo.titulo.toLowerCase().includes(busca.toLowerCase())
    );
    setJogosFiltrados(resultado);
  }, [busca]);

  function renderItem({ item }) {
    return (
      <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.navigate('Detalhe', { ...item })}
      >
        <View style={styles.cardIcone}>
          <Text style={styles.cardIconeTexto}>{item.titulo[0]}</Text>
        </View>
        <View style={styles.cardInfo}>
          <Text style={styles.cardTitulo}>{item.titulo}</Text>
          <Text style={styles.cardSubtitulo}>{item.genero}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitulo}>Catalogo de Games</Text>
        <Text style={styles.headerSubtitulo}>
          Escolha um jogo para ver os detalhes
        </Text>
      </View>

      <View style={styles.buscaContainer}>
        <TextInput
          style={styles.buscaInput}
          placeholder="Buscar jogo..."
          placeholderTextColor="#999"
          value={busca}
          onChangeText={setBusca}
        />
      </View>

      <FlatList
        data={jogosFiltrados}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.lista}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#080808",
  },

  header: {
    backgroundColor: "#111111",
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 24,
    borderBottomWidth: 4,
    borderBottomColor: "#00FFFF",
  },

  headerTitulo: {
    fontSize: 28,
    fontWeight: "900",
    color: "#00FFFF",
    textTransform: "uppercase",
    letterSpacing: 2,
  },

  headerSubtitulo: {
    fontSize: 13,
    color: "#FF00FF",
    marginTop: 6,
    fontWeight: "bold",
  },

  buscaContainer: {
    backgroundColor: "#111111",
    paddingHorizontal: 16,
    paddingVertical: 14,
  },

  buscaInput: {
    backgroundColor: "#1A1A1A",
    borderWidth: 3,
    borderColor: "#FFFF00",
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 14,
    color: "#FFFFFF",
  },

  lista: {
    padding: 16,
    gap: 14,
  },

  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#111111",
    borderWidth: 3,
    borderColor: "#00FFFF",
    borderRadius: 12,
    padding: 14,
  },

  cardIcone: {
    width: 56,
    height: 56,
    borderRadius: 10,
    backgroundColor: "#FF00FF",
    borderWidth: 3,
    borderColor: "#FFFF00",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 14,
  },

  cardIconeTexto: {
    fontSize: 22,
    fontWeight: "900",
    color: "#FFFFFF",
  },

  cardInfo: {
    flex: 1,
  },

  cardTitulo: {
    fontSize: 16,
    fontWeight: "900",
    color: "#00FFFF",
    marginBottom: 4,
    textTransform: "uppercase",
  },

  cardSubtitulo: {
    fontSize: 13,
    color: "#FFFFFF",
    fontWeight: "600",
  },
});