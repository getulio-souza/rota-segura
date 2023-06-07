import { View, Text, StyleSheet } from 'react-native'
import React, {useState} from 'react'
import DropDownPicker from 'react-native-dropdown-picker'
import SimulationButton from '../components/SimulationButton'

const Simulacoes = ({navigation}) => {

  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);
  const [isOpen6, setIsOpen6] = useState(false);

  const [currentValue, setCurrentValue] = useState();
  const [currentValue2, setCurrentValue2] = useState();
  const [currentValue3, setCurrentValue3] = useState();
  const [currentValue4, setCurrentValue4] = useState();
  const [currentValue5, setCurrentValue5] = useState();
  const [currentValue6, setCurrentValue6] = useState();

  const product = [
    { label: 'produto 1', value: 'produto 1' },
    { label: 'produto 2', value: 'produto 2' },
    { label: 'produto 3', value: 'produto 3' },
    { label: 'produto 4', value: 'produto 4' },
    { label: 'produto 5', value: 'produto 5' },
    { label: 'produto 6', value: 'produto 6' }
  ];

  const people = [
    { label: '1-499', value: '1-499' },
    { label: '500-499', value: '500-499' },
    { label: '501-999', value: '501-999' },
    { label: '1000-1999', value: '1000-1999' },
  ];

  const ages = [
    { label: '18-30', value: '18-30' },
    { label: '31-40', value: '31-40' },
    { label: '41-50', value: '41-50' },
    { label: '51-60', value: '51-60' },
    { label: '61-70', value: '61-70' },
  ];

  const countries = [
    { label: 'Sao Paulo', value: 'Sao Paulo' },
    { label: 'Rio de Janeiro', value: 'Rio de Janeiro' },
    { label: 'Minas Gerais', value: 'Minas Gerais' },
    { label: 'Mato Grosso', value: 'Mato Grosso' },
    { label: 'Goias', value: 'Goias' },
    { label: 'Recife', value: 'Recife' },
    { label: 'Bahia', value: 'Bahia' },
  ];

  return (
    <View style={styles.mainContainer}>
      <View>
        <Text style={styles.title}>Simulações de consumo</Text>
      </View>
      <View>
        <Text style={styles.subtitle}>É importante que seu cliente conheça bem seu público alvo para que você possa fazer a simulação de consumo</Text>
      </View>

      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <Text style={styles.inputTitle}>Quantidade de pessoas:</Text>
          <DropDownPicker
            items={people}
            open={isOpen}
            setOpen={()=> setIsOpen(!isOpen)}
            value={currentValue}
            setValue={(val) => setCurrentValue(val)}
            style={styles.simulationDropdown}
            placeholder='Selecione uma quantidade'
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.inputTitle}>Media de idade</Text>
          <View styles={{paddingRight:'40px'}}>
          <DropDownPicker
            items={ages}
            open={isOpen2}
            setOpen={()=> setIsOpen2(!isOpen2)}
            value={currentValue2}
            setValue={(val) => setCurrentValue2(val)}
            style={styles.simulationDropdown}
            placeholder='Selecione uma faixa etária'
          />
          </View>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.inputTitle}>Cidade</Text>
          <DropDownPicker
            items={countries}
            open={isOpen3}
            setOpen={() => setIsOpen3(!isOpen3)}
            value={currentValue3}
            setValue={(val) => setCurrentValue3(val)}
            style={styles.simulationDropdown}
            placeholder = 'Selecione uma cidade'
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.inputTitle}>Principais produtos:</Text>

          <View style={styles.simulationDropdownContainer}>
          <DropDownPicker
            items={product}
            open={isOpen4}
            setOpen={() => setIsOpen4(!isOpen4)}
            value={currentValue4}
            setValue={(val) => setCurrentValue4(val)}
            style={[styles.simulationDropdown, styles.productsDropdown]}
            placeholder = 'Selecione um produto'
          />
          </View>

          <View View style={styles.simulationDropdownContainer}>
          <DropDownPicker
            items={product}
            open={isOpen5}
            setOpen={() => setIsOpen5(!isOpen5)}
            value={currentValue5}
            setValue={(val) => setCurrentValue5(val)}
            style={[styles.simulationDropdown, styles.productsDropdown]}
            placeholder='Selecione um produto'            
          />
          </View>

          <View View style={styles.simulationDropdownContainer}>
          <DropDownPicker
            items={product}
            open={isOpen6}
            setOpen={() => setIsOpen6(!isOpen6)}
            value={currentValue6}
            setValue={(val) => setCurrentValue6(val)}
            style={[styles.simulationDropdown, styles.productsDropdown]}
            placeholder = 'Selecione um produto'
          />
          </View>
        </View>
      </View>

      {/* Button */}
      <View style={styles.simulationBtnContainer}>
      <SimulationButton
        color = "#369928"
        text='Simular'
        style={styles.simulationBtn}
        onPress={()=> navigation.navigate('Result')}
      />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#fff',
    height: '100%'
  },

  title: {
    fontSize: '24px',
    textAlign: 'center',
    color: 'green',
    height: '100px',
    display: 'flex',
    alignItems: 'center',
    maxWidth: '300px',
    margin: 'auto',
    fontWeight: '600'
  },

  subtitle: {
    fontSize: '15px',
    textAlign: 'center',
    height: '125px',
    display: 'flex',
    alignItems: 'center',
    maxWidth: '300px',
    margin: 'auto',
    height: '0px'
  },

  formContainer: {
    display: 'flex',
    justifyContent: 'center',
    paddingLeft: '40px',
    paddingRight: '40px',
    paddingTop:'80px'
  },

  inputContainer: {
    paddingBottom: '15px',
  },

  inputTitle: {
    paddingBottom: '10px',
    color: '#369928',
    fontWeight:'700'
  },

  simulationDropdownContainer: {
    paddingBottom:'20px'
  },

  simulationDropdown: {
    minHeight: '40px',
  },

  productsDropdown: {
    paddingBottom:'10px'
  },

  simulationBtnContainer: {
    display: 'flex',
    justifyContent:'center',
    alignItems: 'center',
    margin: '0 auto',
    paddingBottom:'20px'
  },
  
})

export default Simulacoes