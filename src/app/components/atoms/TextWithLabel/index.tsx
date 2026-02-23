type TextWithLabel = {
  textContent: string;
  label: string;
  className?: string;
};

export function TextWithLabel({ label, textContent, className }: TextWithLabel) {
  return (
    <p className={className}><strong>{label}:</strong> {textContent}</p>
  );
}