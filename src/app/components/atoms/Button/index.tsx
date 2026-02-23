import styles from './Button.module.css'; // Add this import

type Button = {
  textAction: string;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary";
  onClick: () => void
};

export function Button({ textAction, variant, onClick, type}: Button) {
  return (
    <button
        type={type}
        className={`${styles.btn} ${variant && styles[variant]}`} // Update className
        onClick={onClick}>{textAction}
    </button>
  )
}