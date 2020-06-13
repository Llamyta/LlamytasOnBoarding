import React from 'react';
import {
    StyleSheet,
    View,
    TouchableOpacity,
    Text,
    Dimensions
} from 'react-native';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'

const Button = ({ color, colorFondo, onPress, titleButton, icono }) => {
    return (
        <View>
            <TouchableOpacity
                style={[
                    styles.boton,
                    { borderColor: color, backgroundColor: colorFondo }
                ]}
                onPress={onPress}
            >
                <Text style={[styles.texto, { color: color }]}>
                    {titleButton}
                </Text>
                <Icons
                    style={styles.icono}
                    name={icono}
                    size={20}
                    color={color}
                />
            </TouchableOpacity>

        </View>
    );
};

const { width } = Dimensions.get('screen');
const styles = StyleSheet.create({
    boton: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf:'center',
        width: width * 0.25,
        backgroundColor: 'transparent',
        marginBottom: 12,
        borderRadius: 5,
        borderWidth: 1,
        marginLeft: '2%'
    },
    texto: {
        textAlign: 'center',
        height: 22,
        fontSize: 16,
        fontWeight: 'bold'
    },
    icono: {
        justifyContent: 'center',
        paddingHorizontal: '5%'
    },
});

export default Button;
