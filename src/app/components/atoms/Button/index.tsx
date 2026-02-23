import styles from './Button.module.css';

type Button = {
  textAction: string;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "tertiary";
  onClick?: () => void;
  disabled?: boolean;
};

export function Button({ textAction, variant, onClick, type, disabled }: Button) {
  return (
    <button
        type={type}
        className={`${styles.btn} ${variant && styles[variant]}`}
        onClick={onClick}
        disabled={disabled} 
    >{textAction}
    </button>
  )
}