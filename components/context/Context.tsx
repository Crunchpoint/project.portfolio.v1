import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
export const MyContext = createContext({} as any);

type ContextProps = {
  children: React.ReactNode;
};

const dataUrl = "/json/projects.json";

export default function Context({ children }: ContextProps): JSX.Element {
  const [projectData, setProject] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [showRocket, setShowRocket] = useState(false);
  const [mainTextHeight, setMainTextHeight] = useState(0);

  useEffect(() => {
    async function axiosData() {
      await axios
        .all([axios.get(dataUrl)])
        .then(
          axios.spread((res1) => {
            setProject(res1.data.data);
          })
        )
        .catch((error) => {
          console.log(error);
        });
    }
    axiosData();
  }, []);

  const values = { isOpen, setIsOpen, isReady, setIsReady, showRocket, setShowRocket, mainTextHeight, setMainTextHeight, projectData };

  return <MyContext.Provider value={values}>{children}</MyContext.Provider>;
}
