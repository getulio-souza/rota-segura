import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
// import DropDownPicker from 'react-native-dropdown-picker'
import SimulationButton from "../components/SimulationButton";
import { Picker } from "@react-native-picker/picker";

const Simulacoes = ({ navigation }) => {

  const [selectedRange, setSelectedRange] = useState();
  const [selectedAge, setSelectedAge] = useState();
  const [selectedCountry, setSelectedCountry] = useState();
  const [selectedProduct, setSelectedProduct] = useState();

  return (
    <View style={styles.mainContainer}>
      <View>
        <Text style={styles.title}>Simulações de consumo</Text>
      </View>
      <View>
        <Text style={styles.subtitle}>
          É importante que seu cliente conheça bem seu público alvo para que
          você possa fazer a simulação de consumo
        </Text>
      </View>

      <View style={styles.formContainer}>
        <View>
          <Text style={styles.inputTitle}>Quantidade de pessoas:</Text>
          <Picker
            style={styles.input}
            selectedValue={selectedRange}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedRange(itemValue)
            }
          >
            <Picker.Item label="1-499" value="1-499" />
            <Picker.Item label="500-499" value="500-499" />
            <Picker.Item label="501-999" value="501-999" />
            <Picker.Item label="1000-1999" value="1000-1999" />
          </Picker>
        </View>

        <View>
          <Text style={styles.inputTitle}>Media de idade</Text>
          <View>
            <Picker
              style={styles.input}
              selectedValue={selectedAge}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedAge(itemValue)
              }
            >
              <Picker.Item label="18-30" value="18-30" />
              <Picker.Item label="31-40" value="31-40" />
              <Picker.Item label="51-60" value="51-60" />
              <Picker.Item label="61-70" value="61-70" />
              <Picker.Item label="71-80" value="71-80" />
              <Picker.Item label="81-90" value="81-90" />
              <Picker.Item label="91-100" value="91-101" />
            </Picker>
          </View>
        </View>

        <View>
          <Text style={styles.inputTitle}>Cidade</Text>
        </View>
        <Picker
        style={styles.input}
          selectedValue={selectedCountry}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedCountry(itemValue)
          }
        >
          <Picker.Item label="Sao Paulo" value="Sao Paulo" />
          <Picker.Item label="Rio de Janeiro" value="Rio de Janeiro" />
          <Picker.Item label="Minas Gerais" value="Minas Gerais" />
          <Picker.Item label="Mato Grosso" value="Mato Grosso" />
          <Picker.Item label="Goias" value="Goias" />
          <Picker.Item label="Recife" value="Recife" />
          <Picker.Item label="Bahia" value="Bahia" />
        </Picker>
        <View>
          <Text style={styles.inputTitle}>Principais produtos:</Text>

          <View style={styles.simulationDropdownContainer}>
            <Picker
              style={styles.input}
              selectedValue={selectedProduct}
              onValueChange={(itemValue, itemIndex)=> setSelectedCountry(intemValue)}
            >
              <Picker.Item label="produto 1" value="producto 1"/>
              <Picker.Item label="produto 2" value="producto 2"/>
              <Picker.Item label="produto 3" value="producto 3"/>
              <Picker.Item label="produto 4" value="producto 4"/>
              <Picker.Item label="produto 5" value="producto 5"/>
            </Picker>
          </View>
        </View>
      </View>

      {/* Button */}
      <View style={styles.simulationBtnContainer}>
        <SimulationButton
          color="#369928"
          text="Simular"
          style={styles.simulationBtn}
          onPress={() => navigation.navigate("Result")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "#fff",
    height: "100%",
  },

  title: {
    fontSize: 24,
    textAlign: "center",
    color: "green",
    height: "100",
    display: "flex",
    alignItems: "center",
    maxWidth: "300",
    fontWeight: "600",
    margin:'auto'
  },

  subtitle: {
    fontSize: 15,
    textAlign: "center",
    height: 125,
    display: "flex",
    alignItems: "center",
    maxWidth: 300,
    height: 0,
    margin: 'auto',
    paddingTop:40
  },

  formContainer: {
    display: "flex",
    gap:10,
    justifyContent: "center",
    paddingLeft: 40,
    paddingRight: 40,
    paddingTop: 80,
  },

  inputTitle: {
    color: "#369928",
    fontWeight: "700",
  },

  input: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#000',
  },

  simulationDropdownContainer: {
    paddingBottom: 20,
  },

  simulationDropdown: {
    minHeight: 40,
  },

  simulationBtnContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 20,
  },
});

export default Simulacoes;
