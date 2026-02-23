type TextWithLabel = {
  textContent: string;
  label: string;
  className?: string; // agora className é permitido
};

export function TextWithLabel({ label, textContent, className }: TextWithLabel) {
  return (
    <p className={className}><strong>{label}:</strong> {textContent}</p>
  );
}