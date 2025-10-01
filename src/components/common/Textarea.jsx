import { forwardRef } from 'react';

const Textarea = forwardRef(({ 
  label, 
  error, 
  helper, 
  className = '', 
  required = false,
  rows = 4,
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
      <textarea
        ref={ref}
        id={id}
        rows={rows}
        className={`textarea ${error ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : ''} ${className}`}
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

Textarea.displayName = 'Textarea';

export default Textarea;