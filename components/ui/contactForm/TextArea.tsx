import { TextAreaProps } from '@/types/int';
import TextareaAutosize from '@mui/material/TextareaAutosize';

export default function TextArea({placeholder}: TextAreaProps) {
  return (
    <TextareaAutosize
      aria-label="minimum height"
      minRows={3}
      placeholder={placeholder}
      style={{width: "200px"}}
    />
  );
}