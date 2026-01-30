export const theme = {
    colores: {
        amarelo: '#F7CA11',
        roxoclaro: '#3442B5',
        roxo: '#3019B2',
        roxoescuro: '#271C47',
        cinzaclaro: '#9F9F9F',
        cinzaescuro: '#3F3F40',
        cinzaborder: '#3B3B3B',
        cinzaclaroborder: '#BDBDBD',
        cinzabranco: '#F0F0F0',
        cinzapequisa: '#F6F5F2',
        cinzalinha: '#DEDEDE',
        branco: '#ffffff',
        preto: '#000000',
    }
} as const;

export type ThemeType = typeof theme;