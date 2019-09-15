import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
});

  export default ({ spacing, palette }) => {
    // ATTENTION!
    // you can customize some important variables here!!
    const buttonColor = '#22B8BC';
    const backgroundColor = '#F1F1F1';
    const space = 5; // default = 8;
    const borderRadius = 5;
    const iconColor = '#ADADAD';
    // end of variables
    return {

      MuiTab: {
        root: {
          padding:0,
        },
      },
      MuiTabs: {
        root: {
          minHeight:0,
        },
        fixed: {
          borderRadius:5,
          border: '2px solid #22B8BC',

        },

        flexContainer: {
          border: 2,
        }
      },

      MuiIconButton: {
        root: {
          padding:0,
        }
      },
      MuiCardContent: {
        root: {

          padding:0,
        }
      },
      MuiButton: {
        text: {
          padding:'0px 0px ',
        },
        root: {
          padding:'0px 0px ',
          minWidth:34,
        },
        contained: {
          boxShadow:'0px 0px 0px 0px rgba(0,0,0,0.0)',
        },
      },
      MuiInputBase: {
        root: {
          '&.SearchInput-root': {
            backgroundColor,

            borderRadius,
            fontSize:13,
            height: 28,
            padding: `${space}px ${space * 2}px`,
            '& .material-icons': {
              fontSize: 14,
              color: iconColor,
              '&:first-child': {
                marginRight: space,
              },
            },
          },
        },
      },
    };
  };
