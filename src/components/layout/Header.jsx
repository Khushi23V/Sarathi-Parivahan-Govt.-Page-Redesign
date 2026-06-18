import { useState, useEffect } from 'react';
import TopUtilityBar from './TopUtilityBar';
import LogoBar from './LogoBar';
import TickerBar from './TickerBar';
import NavBar from './NavBar';

const FONT_SIZE_VALUES = ['14px', '16px', '18px'];

export default function Header() {
  const [fontSizeIndex, setFontSizeIndex] = useState(1);

  useEffect(() => {
    document.documentElement.style.fontSize = FONT_SIZE_VALUES[fontSizeIndex];
  }, [fontSizeIndex]);

  return (
    <header>
      <TopUtilityBar fontSizeIndex={fontSizeIndex} onFontSizeChange={setFontSizeIndex} />
      <LogoBar />
      <TickerBar />
      <NavBar />
    </header>
  );
}
