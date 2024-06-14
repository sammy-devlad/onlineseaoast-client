import { useEffect } from "react";

const useDynamicCSS = (Files: string[]) => {
  useEffect(() => {
    Files.forEach((file) => {
      const link = document.createElement("link");
      link.href = file;
      link.rel = "stylesheet";
      document.head.appendChild(link);
    });

    // Cleanup function to remove CSS files when component unmounts
    return () => {
      Files.forEach((file) => {
        const link = document.querySelector(`link[href="${file}"]`);
        if (link) {
          document.head.removeChild(link);
        }
      });
    };
  }, [Files]);
};

export default useDynamicCSS;
