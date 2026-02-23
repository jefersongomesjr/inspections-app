import { Input } from "@/app/components/atoms/Input";
import styles from "./FormField.module.css";  

type FormFieldProps = {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  id: string;
  type?: string;
}

export const FormField = ({ label, value, onChange, placeholder, id, type = "text" }: FormFieldProps) => {
  return (
    <div className={styles.formField}>
      <label htmlFor={id}>{label}</label>
      <Input id={id} value={value} onChange={onChange} placeholder={placeholder} type={type} />
    </div>
  );
};