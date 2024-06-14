import { useEffect } from "react";

const useDynamicjs = (Files: string[]) => {
  useEffect(() => {
    Files.forEach((file) => {
      const link = document.createElement("script");
      link.src = file;
      link.type = "text/javascript";
      document.head.append(link);
    });

    // Cleanup function to remove CSS files when component unmounts
    return () => {
      Files.forEach((file) => {
        const link = document.querySelector(`script[src="${file}"]`);

        if (link) {
          document.head.removeChild(link);
        }
      });
    };
  }, [Files]);
};

export default useDynamicjs;
