import { useEffect, useState } from "react";
import MeatBallStyle from "./MeatBall.style";

const MeatBall = ({ 
  maxIndex, 
  selectedIndex, 
  setSelectedIndex 
}: {
  maxIndex: number;
  selectedIndex: number;
  setSelectedIndex: (index: number) => void;
}) => {
  const [ MeatBallIndexList, setMeatBallIndexList ] = useState<number[]>([]);

  useEffect(() => {
    const list = [];
    for (let i = 0; i < maxIndex; i++) {
      list.push(i);
    }
    setMeatBallIndexList(list);
  }, []);

  return (
    <MeatBallStyle.MainContainer>
      {MeatBallIndexList.map((index) => {
        return (
          <MeatBallStyle.MeatBall 
            key={index}
            $isActive={selectedIndex === index}
            onClick={() => setSelectedIndex(index)}
          />
        )
      })}
    </MeatBallStyle.MainContainer>
  )
}

export default MeatBall;
