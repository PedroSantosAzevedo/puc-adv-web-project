import "./textField.css";
import React from 'react';

interface TextFieldProps {
  label: string;
  id: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  placeholder?: string;
}

export default function TextFieldGroup({
  label,
  id,
  value,
  onChange,
  type = 'text',
  placeholder = ''
}: TextFieldProps) {
  return (
    <div className="input-group">
      <label htmlFor={id}>{label}:</label>
      <input
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
}