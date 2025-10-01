import { forwardRef } from 'react';

const Input = forwardRef(({ 
  label, 
  error, 
  helper, 
  className = '', 
  required = false,
  ...props 
}, ref) => {
  const id = props.id || props.name;

  return (
    <div className="space-y-1">
      {label && (
        <label htmlFor={id} className="block text-sm font-medium text-gray-700">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <input
        ref={ref}
        id={id}
        className={`input ${error ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : ''} ${className}`}
        aria-invalid={error ? 'true' : 'false'}
        aria-describedby={error ? `${id}-error` : helper ? `${id}-helper` : undefined}
        {...props}
      />
      {error && (
        <p id={`${id}-error`} className="text-sm text-red-600">
          {error}
        </p>
      )}
      {helper && !error && (
        <p id={`${id}-helper`} className="text-sm text-gray-500">
          {helper}
        </p>
      )}
    </div>
  );
});

Input.displayName = 'Input';

export default Input;