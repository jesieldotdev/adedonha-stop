import { useState } from "react";

const GameFormViewController = () => {
  const [selectedLetter, setSelectedLetter] = useState<any>();

  var letters = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  let data:any = [];

  letters.map((item: any) => {
    data.push({
      option: item,
    });
  });

  const [mustSpin, setMustSpin] = useState(false);
  const [alreadySpin, setAlreadySpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);

  const handleSpinClick = () => {
    if (!mustSpin) {
      const newPrizeNumber = Math.floor(Math.random() * letters.length);
      setPrizeNumber(newPrizeNumber);
      setMustSpin(true);
      setAlreadySpin(true)
    }
  }

  return {
    data,
    letters,
    mustSpin,
    selectedLetter,
    setMustSpin,
    prizeNumber,
    setPrizeNumber,
    handleSpinClick,
    alreadySpin
  };
};

export { GameFormViewController };
