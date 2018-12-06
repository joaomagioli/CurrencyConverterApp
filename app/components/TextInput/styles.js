import EStyleSheet from 'react-native-extended-stylesheet'
import Stylesheet from 'react-native'

const INPUT_HEIGHT = 48
const BORDER_RADIUS = 4

const styles = EStyleSheet.create({
    container: {
        backgroundColor: '$white',
        width: '90%',
        height: INPUT_HEIGHT,
        borderRadius: BORDER_RADIUS,
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 11
    },
    buttonContainer: {
        backgroundColor: '$white',
        height: INPUT_HEIGHT,
        alignItems: 'center',
        justifyContent: 'center',
        borderTopLeftRadius: BORDER_RADIUS,
        borderBottomLeftRadius: BORDER_RADIUS
    },
    buttonText: {
        fontWeight: '600',
        fontSize: 20,
        paddingHorizontal: 16,
        color: '$primaryBlue'
    },
    input: {
        height: INPUT_HEIGHT,
        flex: 1,
        fontSize: 18,
        paddingHorizontal: 8,
        color: '#797979'
    },
    border: {
        backgroundColor: '#E2E2E2',
        height: INPUT_HEIGHT,
        width: Stylesheet.hairlineWidth
    }
})

export default styles
