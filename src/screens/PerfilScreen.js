
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function PerfilScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitulo}>Perfil</Text>
      </View>

      <View style={styles.cartao}>
        <View style={styles.avatar}>
          <Text style={styles.avatarTexto}>V</Text>
        </View>
        <Text style={styles.nome}>Vinícius Assunção</Text>
        <Text style={styles.email}>vinicius.santos24@aluno.senai.br</Text>

        <View style={styles.separador} />

        <View style={styles.infoLinha}>
          <Text style={styles.infoLabel}>Jogos salvos</Text>
          <Text style={styles.infoValor}>0</Text>
        </View>
        <View style={styles.infoLinha}>
          <Text style={styles.infoLabel}>Jogos favoritos</Text>
          <Text style={styles.infoValor}>0</Text>
        </View>
        <View style={styles.infoLinha}>
          <Text style={styles.infoLabel}>Membro desde</Text>
          <Text style={styles.infoValor}>Maio 2026</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.botao}>
        <Text style={styles.botaoTexto}>Editar perfil</Text>
      </TouchableOpacity>
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

  cartao: {
    margin: 16,
    backgroundColor: "#111111",
    borderRadius: 16,
    padding: 24,
    alignItems: "center",
    borderWidth: 3,
    borderColor: "#00FFFF",
  },

  avatar: {
    width: 96,
    height: 96,
    borderRadius: 16,
    backgroundColor: "#FF00FF",
    borderWidth: 4,
    borderColor: "#FFFF00",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 18,
  },

  avatarTexto: {
    fontSize: 42,
    fontWeight: "900",
    color: "#FFFFFF",
  },

  nome: {
    fontSize: 24,
    fontWeight: "900",
    color: "#00FFFF",
    textAlign: "center",
    marginBottom: 6,
    textTransform: "uppercase",
  },

  email: {
    fontSize: 14,
    color: "#FFFFFF",
    marginBottom: 22,
    textAlign: "center",
  },

  separador: {
    width: "100%",
    height: 3,
    backgroundColor: "#FF00FF",
    marginBottom: 16,
  },

  infoLinha: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingVertical: 10,
  },

  infoLabel: {
    fontSize: 14,
    color: "#FFFF00",
    fontWeight: "bold",
    textTransform: "uppercase",
  },

  infoValor: {
    fontSize: 14,
    color: "#FFFFFF",
    fontWeight: "900",
  },

  botao: {
    marginHorizontal: 16,
    backgroundColor: "#FF00FF",
    borderWidth: 3,
    borderColor: "#00FFFF",
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: "center",
  },

  botaoTexto: {
    fontSize: 16,
    fontWeight: "900",
    color: "#FFFFFF",
    textTransform: "uppercase",
    letterSpacing: 1,
  },
});