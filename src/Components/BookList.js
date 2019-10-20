import React, {useContext} from "react";
import {ThemeContext} from "../Contexts/ThemeContext"

const BookList = ({props}) => {

  const {light, dark, isLightTheme} = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;

  return (
    <div className="book-list" style={{background: theme.bg, color: theme.syntax}}>
      <ul>
          <li style={{background: theme.ui}}>Fight Club</li>
          <li style={{background: theme.ui}}>Gone with the wind</li>
          <li style={{background: theme.ui}}>Tańczący z wilkami</li>
      </ul>
    </div>
  );
};

export default BookList;
