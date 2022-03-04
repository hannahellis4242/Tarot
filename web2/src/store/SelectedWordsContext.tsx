import { createContext, useState } from "react";

interface SelectedWordModel {
  selected: string[];
  setSelected: (words: string[]) => void;
}

export const SelectedWordsContext = createContext<SelectedWordModel>({
  selected: [],
  setSelected: (words: string[]) => {},
});

const SelectedWordsContextProvider: React.FC = (props) => {
  const [selectedWords, setSelectedWords] = useState<string[]>([]);
  const setSelectedHandler = (selected: string[]) => {
    setSelectedWords((prev) => selected);
  };
  const context = {
    selected: selectedWords,
    setSelected: setSelectedHandler,
  };
  return (
    <SelectedWordsContext.Provider value={context}>
      {props.children}
    </SelectedWordsContext.Provider>
  );
};

export default SelectedWordsContextProvider;
