type ModalProps = {
  children: React.ReactNode;
  className: string;
};

export function ModalOverlay({ children, className }: ModalProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}