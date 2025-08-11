import { createTheme } from '@mui/material/styles';
import { red, amber } from '@mui/material/colors';

// Esta función recibe las opciones para crear el tema
export const createChatTheme = ({
    primaryColor = '#7854F7',
    secondaryColor = '#2ECC71',
    mode = 'dark',
    defaultBgColor = mode === 'dark' ? '#121212' : '#F5F5F5',
    paperBgColor = mode === 'dark' ? '#1E1E1E' : '#FFFFFF',
}) => {
    return createTheme({
        palette: {
            mode: mode,
            primary: {
                main: primaryColor,
                contrastText: '#fff',
            },
            secondary: {
                main: secondaryColor,
                contrastText: '#fff',
            },
            background: {
                default: defaultBgColor,
                paper: paperBgColor,
            },
            text: {
                primary: mode === 'dark' ? '#EAEAEA' : '#212121',
                secondary: mode === 'dark' ? '#B0B0B0' : '#757575',
            },
            error: {
                main: red.A400,
            },
            warning: {
                main: amber.A400,
            },
            info: {
                main: '#3498DB',
            },
            success: {
                main: '#2ECC71',
            },
        },
        typography: {
            fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
            button: {
                textTransform: 'none',
                fontWeight: 600,
            },
        },
        components: {
            MuiPaper: {
                styleOverrides: {
                    root: {
                        borderRadius: 16,
                    },
                },
            },
            MuiButton: {
                styleOverrides: {
                    root: {
                        borderRadius: 30,
                        padding: '8px 20px',
                    },
                },
            },
            MuiCard: {
                styleOverrides: {
                    root: {
                        backgroundColor: 'transparent',
                        border: `1px solid ${mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`,
                    },
                },
            },
            // MuiCssBaseline: {
            //     styleOverrides: `
            //         ::-webkit-scrollbar {
            //         width: 8px;
            //         }
            //         ::-webkit-scrollbar-track {
            //         background: #2D2D2D;
            //         border-radius: 10px;
            //         }
            //         ::-webkit-scrollbar-thumb {
            //         background: #555;
            //         border-radius: 10px;
            //         }
            //         ::-webkit-scrollbar-thumb:hover {
            //         background: #777;
            //         }
            //     `,
            // },
        },
        breakpoints: {
            values: {
                xs: 0,
                sm: 600,
                md: 900,
                lg: 1200,
                xl: 1536,
            },
        },
    });
};