
import React from "react"
import { View, StyleSheet } from "react-native";



// import First from './components/First'
// import Oficial, {ComponentTwo, ComponentThree} from './components/MultiComponents'
// import Number from './components/NumberComponent'
// import ChallengeRandom from "./components/ChallengeRandom";
// import FragmentTitle from "./components/FragmentTitle";
// import Button from "./components/Button";
// import Count from "./components/Count";
// import TesterSnipet from "./components/TesterSnipet";
// import Dad from "./components/DirectComunication/Dad";
// import Dad from "./components/IndirectComunication/Dad";
import CounterTotal from "./components/Counter/CounterTotal";

export default () => (
<View style={style.App}>
    {/* <ComponentTwo /> */}
    {/* <First /> */}
    {/* <Number min ={5} max={97}/> */}
    {/* <Number min ={48} max={56}/> */}
    {/* <Number min ={2} max={3}/> */}
    {/* <ComponentThree /> */}
    {/* <Oficial /> */}
    {/* {<ChallengeRandom min={10} max={20}></ChallengeRandom>} */}
    {/* <FragmentTitle principal = "Register product" second = "Other"/> */}
    {/* <Button titleOne="a title, maybe 1?" titleTwo="idk"/>  */}
    {/* <Count numberInitial = {5} increaset={2} /> */}
    {/* <Count numberInitial = {97} /> */}
    {/* <TesterSnipet /> */}
    {/* <Dad /> */}
    <CounterTotal  />
</View>
)

const style = StyleSheet.create({
    App: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        
    }
})