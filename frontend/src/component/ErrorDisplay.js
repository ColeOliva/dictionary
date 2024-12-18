import { useEffect } from "react";
import useErrorContext from "../hook/useErrorContext";

const ErrorDisplay = ({ pageKey }) => {
  const { errors, clearErrors } = useErrorContext(pageKey);

  // erase displayed error message after 5s
  useEffect(() => {
    if (errors) {
      const timer = setTimeout(() => {
        // clear error message
        clearErrors(pageKey);
      }, 5000);

      // cleanup function, only executed when component is destroyed/close
      return () => {
        clearTimeout(timer);
      };
    }
  }, [errors]);

  return (
    <div
      style={{ color: "red", paddingTop: 20, paddingBottom: 20, fontSize: 20 }}
    >
      {errors[pageKey]}
    </div>
  );
};

export default ErrorDisplay;
