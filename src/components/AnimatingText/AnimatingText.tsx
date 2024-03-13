import { useEffect, useState } from "react";
import AnimatingTextStyle from "./AnimatingText.style";

const AnimatingText = ({
  font: {
    text,
    color,
    size,
    weight
  },
  duration
}: {
  font: {
    text: string | number,
    color: string,
    size: string,
    weight: string
  },
  duration: number
}) => {
  const TEXT_ARRAY = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
    'k','l','m','n','o','p','q','r','s','t','u','v',
    'w','x','y','z'
  ];
  const NUMBER_ARRAY = [
    '1','2','3','4','5','6','7','8','9','0'
  ];
  const [ textArray, setTextArray ] = useState<string[]>([]);
  const [ isClear, setIsClear ] = useState<boolean>(false);

  const timer = setTimeout(() => {
    setTextArray([text]);
    setIsClear(true);
  }, duration);

  useEffect(() => {
    if(!isNaN(Number(text))) {
      NUMBER_ARRAY.unshift(text.toString());
      setTextArray(NUMBER_ARRAY);
    } else {
      TEXT_ARRAY.unshift(text.toString());
      setTextArray(TEXT_ARRAY);
    }
  }, [text]);

  return (
    <AnimatingTextStyle.MainContainer>
      <AnimatingTextStyle.ViewContainer
        $isClear={isClear}
      >
        {textArray.map((text, index) => {
          return (
            <AnimatingTextStyle.Span
              key={index}
              $color={color}
              $size={size}
              $weight={weight}
            >
              {text}
            </AnimatingTextStyle.Span>
          )
        })}
      </AnimatingTextStyle.ViewContainer>
    </AnimatingTextStyle.MainContainer>
  )
}

export default AnimatingText;
