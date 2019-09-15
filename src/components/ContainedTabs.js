import React from 'react';
import PropTypes from 'prop-types';
import Color from 'color';
import { makeStyles } from '@material-ui/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Grid from '@material-ui/core/Grid';



const useTabsStyles = makeStyles(() => ({
  indicator: {
    display: 'none',
  },
}));

const useTabStyles = makeStyles(({ palette, spacing, breakpoints }) => {
  const defaultBgColor = palette.common.white;
  const defaultSelectedBgColor = '#22B8BC';
  const defaultMinWidth = {
    md: 150,
    sm: 100,
  };
  const getTextColor = color => {
    if (Color(color).isLight()) return '#22B8BC';
    return palette.common.white;
  };
  return {
    root: ({
      bgColor = defaultBgColor,
      minWidth = defaultMinWidth,
      selectedBgColor = defaultSelectedBgColor,
    }) => ({
      minHeight:10,
      opacity: 1,
      overflow: 'initial',
      color: getTextColor(bgColor),
      backgroundColor: bgColor,


      [breakpoints.up('md')]: {
        minWidth: minWidth.mdprimary,
      },

      '&:before': {
        transition: '0.1s',
      },
      '&:not(:first-of-type)': {
        '&:before': {
          content: '" "',
          color:'white',
          left: 0,
          display: 'block',
          width: 1,
        },
      },
      '& + $selected:before': {
        opacity: 0,
      },
      '&:hover': {
        '&:not($selected)': {
          backgroundColor: Color(selectedBgColor)
            .fade(0.87)
            .toString(),
        },
        '&::before': {
          opacity: 0,
        },
        '& + $root:before': {
          opacity: 0,
        },
      },
    }),
    selected: ({ selectedBgColor = defaultSelectedBgColor }) => ({
      backgroundColor: selectedBgColor,
      color: 'white',
      '& + $root': {

      },
      '& + $root:before': {
        opacity: 0,
      },
    }),
    wrapper: {
      fontSize:14,
      paddingLeft:15,
      paddingRight:15,
      textTransform: 'capitalize',
    },
  };
});

const ContainedTabs = ({ tabs, tabStyle, tabProps, ...props }) => {
  const tabsClasses = useTabsStyles(props);
  const tabClasses = useTabStyles({ ...tabProps, ...tabStyle });
  return (
    <Grid>
      <Tabs {...props} classes={tabsClasses}>
        {tabs.map(tab => (
          <Tab key={tab.label} {...tabProps} {...tab} classes={tabClasses} />
        ))}
      </Tabs>
    </Grid>
  );
};

ContainedTabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.node.isRequired,
    }),
  ),
  tabStyle: PropTypes.shape({
    bgColor: PropTypes.string,
    minWidth: PropTypes.shape({}),
  }),
  tabProps: PropTypes.shape({}),
};
ContainedTabs.defaultProps = {
  tabs: [],
  tabStyle: {},
  tabProps: {},
};

export default ContainedTabs;
