import { Box, TextField } from '@mui/material';
import { Controller } from 'react-hook-form';

interface Props {
  inputId: string;
  inputTitle: string;
  placeholder: string;
  control: any;
}

export const TextFieldBox = ({
  inputId,
  inputTitle,
  placeholder,
  control,
}: Props) => {
  return (
    <Box sx={{ my: 1 }} key={inputId}>
      <Controller
        render={({ field }) => (
          <TextField
            sx={{ width: 300 }}
            id={inputId}
            label={inputTitle}
            variant="outlined"
            placeholder={placeholder}
            {...field}
          />
        )}
        name={`${inputId}` as const}
        control={control}
      />
    </Box>
  );
};
