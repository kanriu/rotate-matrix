import styles from "./Button.module.css";

export const Button = ({
  ...props
}: React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>) => {
  return (
    <button
      {...props}
      className={[styles.container, props.className].join(" ").trim()}
    >
      {props.value}
    </button>
  );
};
