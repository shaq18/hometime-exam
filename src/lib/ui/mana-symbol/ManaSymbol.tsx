import React, { useEffect, useState } from 'react';
import { Text } from '../../components/text';
import { S } from './style';

interface ManaSymbolProps {
  mana?: string | null;
}
const ManaSymbol = ({ mana }: ManaSymbolProps) => {
  const [icons, setIcons] = useState<React.ReactNode | null>(null);

  useEffect(() => {
    if (mana) {
      const matchedString = mana.match(/{(.*?)}/g);
      const manaArr =
        matchedString &&
        matchedString.map((item) => {
          return item.replace(/[{}]/g, '').toLowerCase();
        });

      const convertedIcons =
        manaArr &&
        manaArr.map((item, i) => {
          return <S.Icon key={`icon-${i}`} className={`ms ms-${item} ms-cost`} />;
        });

      setIcons(convertedIcons);
    }
  }, [mana]);

  if (mana) {
    return <>{icons}</>;
  }

  return <Text as={S.NoMana}>N/A</Text>;
};

export default ManaSymbol;
