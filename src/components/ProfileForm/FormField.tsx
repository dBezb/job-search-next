'use client';
import { Field, ErrorMessage } from 'formik';

interface FormFieldProps {
  name: string;
  label?: string;
  placeholder?: string;
  type?: string;
  as?: React.ElementType;
}

export function FormField({
  name,
  label,
  placeholder,
  type = 'text',
  as = 'input',
}: FormFieldProps) {
  return (
    <div className="mb-4">
      {label && (
        <label htmlFor={name} className="block mb-1 font-medium">
          {label}
        </label>
      )}
      <Field
        id={name}
        name={name}
        placeholder={placeholder}
        type={type}
        as={as}
        className="w-full border p-2 rounded"
      />
      <ErrorMessage
        name={name}
        component="div"
        className="text-red-500 mt-1 text-sm"
      />
    </div>
  );
}
