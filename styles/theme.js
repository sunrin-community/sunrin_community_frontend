const size = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '450px',
    tabletS: '560px',
    tabletM: '768px',
    tabletL: '950px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px'
}

export const device = {
    mobileS: `screen and (min-width: ${size.mobileS})`,
    mobileM: `screen and (min-width: ${size.mobileM})`,
    mobileL: `screen and (min-width: ${size.mobileL})`,
    tabletS: `screen and (min-width: ${size.tabletS})`,
    tabletM: `screen and (min-width: ${size.tabletM})`,
    tabletL: `screen and (min-width: ${size.tabletL})`,
    laptop: `screen and (min-width: ${size.laptop})`,
    laptopL: `screen and (min-width: ${size.laptopL})`,
    desktop: `screen and (min-width: ${size.desktop})`
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