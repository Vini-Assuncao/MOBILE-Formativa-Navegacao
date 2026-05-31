// Componente reutilizavel: BotaoAcao
// Exemplo de componente extraido para a pasta components/
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function BotaoAcao({ texto, onPress, ativo }) {
  return (
    <TouchableOpacity
      style={[styles.botao, ativo && styles.botaoAtivo]}
      onPress={onPress}
    >
      <Text style={styles.texto}>{texto}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  botao: {
    backgroundColor: "#FF00FF",
    borderWidth: 3,
    borderColor: "#00FFFF",
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: "center",
    marginHorizontal: 16,
    marginBottom: 16,
  },

  botaoAtivo: {
    backgroundColor: "#00CC66",
    borderColor: "#FFFF00",
  },

  texto: {
    fontSize: 16,
    fontWeight: "900",
    color: "#FFFFFF",
    textTransform: "uppercase",
    letterSpacing: 1,
  },
});
