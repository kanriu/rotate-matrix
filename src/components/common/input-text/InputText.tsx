import { ErrorMessage } from "formik";
import styles from "./InputText.module.css";

interface Props {
  isError?: boolean;
}

export const InputText = ({
  isError,
  ...props
}: React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> &
  Props) => {
  return (
    <div className={styles.container}>
      <input
        {...props}
        className={[
          styles.inputContent,
          props.className,
          isError ? styles.inputError : "",
        ]
          .join(" ")
          .trim()}
      />
      <ErrorMessage name={props.name || ""} component="span" />
    </div>
  );
};
