import React, { useRef, useState, useEffect, useCallback } from 'react';
import Editor from 'react-simple-code-editor';
import { useField } from '@unform/core';
import { TextAreaInput } from './styles';
import { highlight, languages } from 'prismjs';

import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-css';
import 'prismjs/themes/prism-dark.css';

interface Props {
  name: string;
  placeholder?: string;
  styleContainer?: object;
}

const TextArea: React.FC<Props> = ({
  name,
  placeholder,
  styleContainer = {},
}) => {
  const [code, setCode] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const editorRef = useRef(null);

  const { defaultValue, fieldName, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: editorRef.current,
      path: '_input.value',
      setValue(_: any, value: string) {
        setCode(value);
      },
    });
  }, [fieldName, registerField]);

  const handleFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleBlur = useCallback(() => {
    setIsFocused(false);
    if (editorRef) {
      setIsFilled(!!code);
    }
  }, []);

  return (
    <TextAreaInput
      className="editor"
      textareaId={fieldName}
      value={code}
      defaultValue={defaultValue}
      onValueChange={setCode}
      highlight={(code) => highlight(code, languages.markup, 'markup')}
      placeholder={placeholder}
      padding={15}
      ref={editorRef}
      style={styleContainer}
      onFocus={handleFocus}
      onBlur={handleBlur}
      isFocused={isFocused}
      isFilled={isFilled}
    />
  );
};

export default TextArea;
