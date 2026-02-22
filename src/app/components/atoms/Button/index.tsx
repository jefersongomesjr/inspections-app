type ContainerProps = {
  textAction: string;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary";
  className: string;
  onClick: () => void
};

export function Button({ textAction, variant, onClick, type}: ContainerProps) {
  return (
    <button 
        type={type} 
        className={`btn ${variant}`} 
        onClick={onClick}>{textAction}
    </button>
  )
}