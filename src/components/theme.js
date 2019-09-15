export default ({ spacing, palette }) => {
  const backgroundColor = '#F1F1F1';
  const space = 5; // default = 8;
  const borderRadius = 5;
  const iconColor = '#ADADAD';

  return {
    MuiTab: {
      root: {
        padding: 0
      }
    },
    MuiTabs: {
      root: {
        minHeight: 0
      },
      fixed: {
        borderRadius: 5,
        border: '2px solid #22B8BC'
      },
      flexContainer: {
        border: 2
      }
    },
    MuiIconButton: {
      root: {
        padding: 0
      }
    },
    MuiCardContent: {
      root: {
        padding: 0
      }
    },
    MuiButton: {
      text: {
        padding: '0px 0px '
      },
      root: {
        padding: '0px 0px ',
        minWidth: 34
      },
      contained: {
        boxShadow: '0px 0px 0px 0px rgba(0,0,0,0.0)'
      }
    },
    MuiInputBase: {
      root: {
        '&.SearchInput-root': {
          backgroundColor,
          borderRadius,
          fontSize: 13,
          height: 28,
          padding: `${space}px ${space * 2}px`,
          '& .material-icons': {
            fontSize: 14,
            color: iconColor,
            '&:first-child': {
              marginRight: space
            }
          }
        }
      }
    }
  };
};
