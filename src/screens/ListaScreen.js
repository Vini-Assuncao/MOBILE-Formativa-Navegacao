import { useState } from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { CardJogo } from '../components';

// Dados de exemplo para voce visualizar o renderItem funcionando
// Em um app real, esses itens chegariam via route.params enviados pela DetalheScreen
const jogosMock = [
  {
    id: "1",
    titulo: "The Legend of Zelda: Breath of the Wild",
    genero: "Aventura / Mundo Aberto",
    plataforma: "Nintendo Switch",
    nota: "10/10",
  },
  {
    id: "3",
    titulo: "God of War",
    genero: "Acao / Aventura",
    plataforma: "PS4 / PC",
    nota: "10/10",
  },
];

export default function ListaScreen({ route }) {
  const [itensSalvos, setItensSalvos] = useState(jogosMock);

  // Para receber um jogo salvo da DetalheScreen via route.params:
  if (route.params?.novoJogo) {
    setItensSalvos(prev => [...prev, route.params.novoJogo]);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitulo}>Minha Lista</Text>
      </View>

      <FlatList
        data={itensSalvos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <CardJogo titulo={item.titulo} genero={item.genero} plataforma={item.plataforma} nota={item.nota} />
          </View>
        )}
        ListEmptyComponent={
          <View style={styles.conteudo}>
            <View style={styles.iconeContainer}>
              <Text style={styles.icone}>G</Text>
            </View>
            <Text style={styles.titulo}>Nenhum jogo salvo</Text>
            <Text style={styles.descricao}>Sua lista aparecera aqui</Text>
            <Text style={styles.dica}>
              Acesse um jogo e toque em "Adicionar a Lista" para salva-lo aqui.
            </Text>
          </View>
        }
        contentContainerStyle={itensSalvos.length === 0 && styles.listaVazia}
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

  listaVazia: {
    flex: 1,
  },

  conteudo: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 32,
  },

  iconeContainer: {
    width: 100,
    height: 100,
    borderRadius: 16,
    backgroundColor: "#FF00FF",
    borderWidth: 4,
    borderColor: "#FFFF00",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 24,
  },

  icone: {
    fontSize: 42,
    fontWeight: "900",
    color: "#FFFFFF",
  },

  titulo: {
    fontSize: 22,
    fontWeight: "900",
    color: "#00FFFF",
    textAlign: "center",
    textTransform: "uppercase",
    marginBottom: 10,
  },

  descricao: {
    fontSize: 16,
    color: "#FFFFFF",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 14,
  },

  dica: {
    fontSize: 13,
    color: "#BBBBBB",
    textAlign: "center",
    lineHeight: 22,
  },

  card: {
    backgroundColor: "#111111",
    marginHorizontal: 16,
    marginTop: 12,
    borderRadius: 12,
    borderWidth: 3,
    borderColor: "#00FFFF",
    padding: 16,
  },
});