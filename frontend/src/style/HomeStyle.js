import colors from './../config/colors';

const styles = {
    home: {
        background: colors.pink,
        height: '100%'
    },
    home__logo: {
        height: '50px',
        width: '50px'
    },
    home__links: {
        display: 'flex',
        justifyContent: 'space-around',
        width: '100%'
    },
    home__linkWrapper: {
        backgroundColor: 'white',
        borderRadius: '3px',
        display: 'table',
        marginBottom: '50px',
        height: '100px',
        width: '100px'
    },
    home__link: {
        color: colors.text,
        display: 'table-cell',
        textAlign: 'center',
        textDecoration: 'none',
        verticalAlign: 'middle',
        width: '100%'
    }
};

export default styles;