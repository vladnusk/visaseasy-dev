import { Box } from '@mui/material';
import { DatePickerBox } from '../FormUtils/DatePickerBox';

interface Props {
  inputId: string;
  inputTitle: string;
  objectKey: string;
  isRequired: boolean;
  errors: any;
  control: any;
}

export const DateRangePickerBox = ({
  inputId,
  inputTitle,
  objectKey,
  isRequired,
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
          isRequired={isRequired}
          errors={errors}
        />
        <DatePickerBox
          control={control}
          inputId={inputId + 'To'}
          inputTitle={inputTitle}
          objectKey={objectKey}
          isRequired={isRequired}
          errors={errors}
        />
      </Box>
    </Box>
  );
};
