import { Input } from "@/app/components/atoms/Input";
import styles from "./FormField.module.css";  

type FormFieldProps = {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  id: string;
  type?: string;
  required?: boolean;
}

export const FormField = ({ label, value, onChange, placeholder, id, type = "text", required }: FormFieldProps) => {
  return (
    <div className={styles.formField}>
      <label htmlFor={id}>
        {label} {required && <span className={styles.requiredIndicator}>*</span>}
      </label>
      <Input  value={value} onChange={onChange} placeholder={placeholder} type={type} required={required} />
    </div>
  );
};