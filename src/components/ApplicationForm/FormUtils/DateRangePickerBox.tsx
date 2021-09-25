import { Box } from '@mui/material';
import { DatePickerBox } from '../FormUtils/DatePickerBox';

interface Props {
  inputId: string;
  inputTitle: string;
  objectKey: string;
  errors: any;
  control: any;
}

export const DateRangePickerBox = ({
  inputId,
  inputTitle,
  objectKey,
  errors,
  control,
}: Props) => {
  return (
    <Box
      sx={{
        my: 1,
      }}
      key={inputId}>
      <Box sx={{ display: 'flex', flexDirection: 'row', my: 1 }}>
        <DatePickerBox
          control={control}
          inputId={inputId + 'From'}
          inputTitle={inputTitle}
          objectKey={objectKey}
          errors={errors}
        />
        <DatePickerBox
          control={control}
          inputId={inputId + 'To'}
          inputTitle={inputTitle}
          objectKey={objectKey}
          errors={errors}
        />
      </Box>
    </Box>
  );
};
