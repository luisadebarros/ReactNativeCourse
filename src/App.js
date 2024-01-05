
import React from "react"
import { SafeAreaView, StyleSheet } from "react-native";



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
// import CounterTotal from "./components/Counter/CounterTotal";
// import OddOrEven from "./components/OddOrEven";
// import Family from "./components/Relation/Family";
// import Members from "./components/Relation/Members";
// import UserLogOn from "./components/UserLogOn";
// import ProductList from "./components/Products/ProductList";
// import SecondProductList from "./components/Products/SecondProductList";
// import TypeYourName from "./components/TypeYourName";
// import Square from "./components/Layout/Square";
// import FirstFlexBox from "./components/Layout/FirstFlexBox";
// import SecondFlexBox from "./components/Layout/SecondFlexBox";
// import ThirdFlexBox from "./components/Layout/thirdFlexBox";
import FourthFlexBox from "./components/Layout/FourthFlexBox";

export default () => (
<SafeAreaView style={style.App}>
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
    {/* <CounterTotal  /> */}
    {/* <OddOrEven number = {-6}/> */}
    {/* <Family>
            <Members name = "Philiphe" surname = "Trues"/>
            <Members name = "John" surname = "Meyres"/>
    </Family>
    <Family>
            <Members name = "Louise" surname = "Kingdom"/>
            <Members name = "Maya" surname = "Thriller"/>
            <Members name = "Julie" surname = "Roberts"/>
    </Family> */}
    {/* <UserLogOn user = {{name: "Luísa", mail: "luisa@gmail.com"}}/>
    <UserLogOn user = {{name: "John"}}/>
    <UserLogOn user = {{mail: "Star"}}/> */}
    {/* <ProductList /> */}
    {/* <SecondProductList /> */}
    {/* <TypeYourName /> */}
    {/* <FirstFlexBox /> */}
    {/* <SecondFlexBox /> */}
    {/* <ThirdFlexBox /> */}
    <FourthFlexBox />
</SafeAreaView>
)

const style = StyleSheet.create({
    App: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        
    }
})