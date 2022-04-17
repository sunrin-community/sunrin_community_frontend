const size = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px'
}

export const device = {
    mobileS: `(min-width: ${size.mobileS})`,
    mobileM: `(min-width: ${size.mobileM})`,
    mobileL: `(min-width: ${size.mobileL})`,
    tablet: `(min-width: ${size.tablet})`,
    laptop: `(min-width: ${size.laptop})`,
    laptopL: `(min-width: ${size.laptopL})`,
    desktop: `(min-width: ${size.desktop})`
};

const colors = {
    lightPrimary: '#BEDAFA',
    primary: '#5E92C4',
    darkPrimary: '#384B60',
    secondary: '#F8F7F2',
    gray: "#EEEEEE"
}

const typeColors = {
    software: '#9da200',
    security: '#5858FA',
    management: '#184220',
    media: ''
}

const theme = {
    typeColors,
    colors,
    device
}

export default theme;