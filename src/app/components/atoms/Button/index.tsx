import styles from './Button.module.css';

type Button = {
  textAction: string;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "tertiary";
  onClick?: () => void
};

export function Button({ textAction, variant, onClick, type}: Button) {
  return (
    <button
        type={type}
        className={`${styles.btn} ${variant && styles[variant]}`}
        onClick={onClick}>{textAction}
    </button>
  )
}