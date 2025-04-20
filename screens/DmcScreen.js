import React from "react";
import { View, ScrollView, Text, StyleSheet, TextInput, Pressable } from "react-native";

const DmcScreen = () => {

    const [english, onChangeEnglish] = React.useState('');
    const [urdu, onChangeUrdu] = React.useState('');
    const [math, onChangeMath] = React.useState('');
    const [science, onChangeScience] = React.useState('');
    const [islamiat, onChangeIslamiat] = React.useState('');
    const [gk, onChangeGK] = React.useState('');

    const [obtainedMarks, setObtainedMarks] = React.useState('');
    const [percentage, setPercentage] = React.useState('');
    const [grade, setGrade] = React.useState('');


    const calculate = () => {

        let eng = Number(english);
        let ur = Number(urdu);
        let ma = Number(math);
        let sc = Number(science);
        let isl = Number(islamiat);
        let g = Number(gk);

        let ob = eng + ur + ma + sc + isl + g;

        let per = ob * 100 / 600;

        setObtainedMarks(`Obtained Marks: ${ob}`);
        setPercentage(`Percentage: ${per}`);
        
        calculateGrade(per);
    };

    const calculateGrade = (per) => {
        if( per >= 80){
            setGrade('A+');
        }else if ( per >= 70){
            setGrade('A');
        }else if( per >= 60){
            setGrade('B');
        }else if( per >= 40){
            setGrade('C');
        }else {
            setGrade('Fail');
        }
    }

    const clearForm = () => {
        onChangeEnglish('');
        onChangeUrdu('');
        onChangeMath('');
        onChangeScience('');
        onChangeIslamiat('');
        onChangeGK('');

        setObtainedMarks('');
        setPercentage('');
        setGrade('');
    }

    return (
        <View StyleSheet={dmcStyles.container}>
            <ScrollView >
                <Text style={dmcStyles.headingText}>DMC</Text>
                <TextInput
                    style={dmcStyles.intput}
                    placeholder="English"
                    onChangeText={onChangeEnglish}
                    value={english}
                    maxLength={3}
                    keyboardType="numeric"
                />
                <TextInput
                    style={dmcStyles.intput}
                    placeholder="Urdu"
                    onChangeText={onChangeUrdu}
                    value={urdu}
                    maxLength={3}
                    keyboardType="numeric"
                />
                
                <TextInput
                    style={dmcStyles.intput}
                    placeholder="Math"
                    onChangeText={onChangeMath}
                    value={math}
                    maxLength={3}
                    keyboardType="numeric"
                />
                <TextInput
                    style={dmcStyles.intput}
                    placeholder="Science"
                    onChangeText={onChangeScience}
                    value={science}
                    maxLength={3}
                    keyboardType="numeric"
                />
                <TextInput
                    style={dmcStyles.intput}
                    placeholder="Islamiat"
                    onChangeText={onChangeIslamiat}
                    value={islamiat}
                    maxLength={3}
                    keyboardType="numeric"
                />
                <TextInput
                    style={dmcStyles.intput}
                    placeholder="General Knowledge"
                    onChangeText={onChangeGK}
                    value={gk}
                    maxLength={3}
                    keyboardType="numeric"
                />

                <View style={dmcStyles.buttonRow}>

                    <Pressable style={dmcStyles.buttonStyle}>
                        <Text style={dmcStyles.buttonText}
                        onPress={ ()=> clearForm()}
                        >Clear</Text>
                    </Pressable>
                    <Pressable style={dmcStyles.buttonStyle}
                    onPress={()=> calculate()}
                    >
                        <Text style={dmcStyles.buttonText}>Calculate</Text>
                    </Pressable>
                </View>
                
                <Text style={dmcStyles.resultText}>{obtainedMarks}</Text>
                <Text style={dmcStyles.resultText}>{percentage}</Text>
                <Text style={dmcStyles.resultText}>Grade {grade}</Text>

            </ScrollView>
        </View>
    );
}

const dmcStyles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headingText: {
        fontSize: 30,
        fontWeight: 'bold',
        alignSelf: 'center',
        margin: 24,
    },
    intput: {
        padding: 12,
        margin: 8,
        borderColor: '#000000',
        borderRadius: 16,
        borderWidth: 1,
    },
    buttonRow: {
        flexDirection: 'row',
        gap: 16,
        marginHorizontal: 10,
    },

    buttonStyle: {
        backgroundColor: 'green',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 24,
        flex: 1,
        alignItems: 'center',

    },

    buttonText: {
        color: 'white',
        fontSize: 16,
    },
    resultText: {
        fontSize: 20,
        fontWeight: 'bold',
        margin: 8,
    }
});
export default DmcScreen;