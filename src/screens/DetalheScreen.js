import { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

// Dados de fallback — usados enquanto a navegacao nao estiver configurada
const jogoMock = {
  titulo: "The Legend of Zelda: Breath of the Wild",
  genero: "Aventura / Mundo Aberto",
  plataforma: "Nintendo Switch",
  nota: "10/10",
  sinopse:
    "Explore um vasto mundo aberto em Hyrule. Resolva puzzles, enfrente inimigos e descubra segredos em uma das aventuras mais aclamadas da historia dos games.",
};

// Os dados chegam via route.params quando o usuario toca em um jogo na HomeScreen
export default function DetalheScreen({ route, navigation }) {
  // Defina os parâmetros de rota, pegando todos os campos presentes no objeto JOGOS definido na HomeScreen
  const { titulo, genero, plataforma, nota, sinopse } = route?.params ?? jogoMock;

  const [isSalvo, setIsSalvo] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.hero}>
          <View style={styles.heroIcone}>
            <Text style={styles.heroIconeTexto}>{titulo[0]}</Text>
          </View>
          <Text style={styles.heroTitulo}>{titulo}</Text>
          <Text style={styles.heroSubtitulo}>{genero}</Text>
          <View style={styles.heroMeta}>
            <View style={styles.metaItem}>
              <Text style={styles.metaLabel}>Plataforma</Text>
              <Text style={styles.metaValor}>{plataforma}</Text>
            </View>
            <View style={styles.metaSeparador} />
            <View style={styles.metaItem}>
              <Text style={styles.metaLabel}>Nota</Text>
              <Text style={styles.metaValor}>{nota}</Text>
            </View>
          </View>
        </View>

        <View style={styles.secao}>
          <Text style={styles.secaoTitulo}>Sinopse</Text>
          <Text style={styles.detalheTexto}>{sinopse}</Text>
        </View>


        <TouchableOpacity
          onPress={() => setIsSalvo(prev => !prev)}
          style={[styles.botao, isSalvo && styles.botaoAtivo]}
        >
          <Text style={styles.botaoTexto}>isSalvo ? 'Remover da Lista' : 'Adicionar a Lista'</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#080808",
  },

  hero: {
    backgroundColor: "#111111",
    alignItems: "center",
    paddingVertical: 30,
    paddingHorizontal: 20,
    borderBottomWidth: 4,
    borderBottomColor: "#00FFFF",
  },

  heroIcone: {
    width: 90,
    height: 90,
    borderRadius: 12,
    backgroundColor: "#FF00FF",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
    borderWidth: 4,
    borderColor: "#00FFFF",
  },

  heroIconeTexto: {
    fontSize: 40,
    fontWeight: "900",
    color: "#FFFF00",
  },

  heroTitulo: {
    fontSize: 24,
    fontWeight: "900",
    color: "#00FFFF",
    textAlign: "center",
    marginBottom: 8,
    textTransform: "uppercase",
  },

  heroSubtitulo: {
    fontSize: 14,
    color: "#FF00FF",
    fontWeight: "bold",
    marginBottom: 18,
    textAlign: "center",
  },

  heroMeta: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1A1A1A",
    borderWidth: 3,
    borderColor: "#FFFF00",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },

  metaItem: {
    alignItems: "center",
  },

  metaLabel: {
    fontSize: 11,
    color: "#AAAAAA",
    marginBottom: 4,
    textTransform: "uppercase",
  },

  metaValor: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#00FFFF",
  },

  metaSeparador: {
    width: 3,
    height: 30,
    marginHorizontal: 20,
    backgroundColor: "#FF00FF",
  },

  secao: {
    margin: 16,
    backgroundColor: "#111111",
    borderWidth: 3,
    borderColor: "#00FFFF",
    borderRadius: 12,
    padding: 18,
  },

  secaoTitulo: {
    fontSize: 18,
    fontWeight: "900",
    color: "#FFFF00",
    textTransform: "uppercase",
    marginBottom: 12,
  },

  detalheTexto: {
    fontSize: 14,
    color: "#FFFFFF",
    lineHeight: 24,
  },

  botao: {
    marginHorizontal: 16,
    marginTop: 4,
    marginBottom: 32,
    backgroundColor: "#FF00FF",
    borderWidth: 3,
    borderColor: "#00FFFF",
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: "center",
  },

  botaoAtivo: {
    backgroundColor: "#00CC66",
    borderColor: "#FFFF00",
  },

  botaoTexto: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "900",
    textTransform: "uppercase",
    letterSpacing: 1,
  },
});