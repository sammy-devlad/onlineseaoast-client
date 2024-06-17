import { useEffect, useState } from "react";

const useDynamicCSS = (Files: string[]) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let loadedFilesCount = 0;

    Files.forEach((file) => {
      const link = document.createElement("link");
      link.href = file;
      link.rel = "stylesheet";
      link.onload = () => {
        loadedFilesCount += 1;
        if (loadedFilesCount === Files.length) {
          setLoading(false); // All CSS files are loaded
        }
      };
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

  return loading;
};

export default useDynamicCSS;
