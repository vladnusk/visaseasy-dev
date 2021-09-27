import { ICompletedForm } from '../../models/ICompletedForm';
import { SelectCountry } from './FormUtils/SelectCountry';
import { RadioBox } from './FormUtils/RadioBox';
import { DatePickerBox } from './FormUtils/DatePickerBox';
import { DateRangePickerBox } from './FormUtils/DateRangePickerBox';
import { TextFieldBox } from './FormUtils/TextFieldBox';
import { IFormApi } from '../../models/IFormApi';

interface Props {
  form: IFormApi[];
  control: any;
  errors: any;
}

export const FormRender = ({ form, control, errors }: Props) => {
  return (
    <>
      {form.map((field) => {
        switch (field.inputType) {
          case 'select-country':
            return (
              <SelectCountry
                key={field.inputId}
                inputId={field.inputId}
                inputTitle={field.inputTitle}
                isRequired={field.required}
                control={control}
                objectKey={field.inputId as keyof ICompletedForm}
                errors={errors}
              />
            );
          case 'radio':
            return (
              <RadioBox
                key={field.inputId}
                inputId={field.inputId}
                inputTitle={field.inputTitle}
                control={control}
                isRequired={field.required}
                options={field.options || []}
                objectKey={field.inputId as keyof ICompletedForm}
                errors={errors}
              />
            );
          case 'date':
            return (
              <DatePickerBox
                control={control}
                key={field.inputId}
                inputId={field.inputId}
                inputTitle={field.inputTitle}
                isRequired={field.required}
                objectKey={field.inputId as keyof ICompletedForm}
                errors={errors}
              />
            );
          case 'date-range':
            return (
              <DateRangePickerBox
                control={control}
                key={field.inputId}
                inputId={field.inputId}
                inputTitle={field.inputTitle}
                isRequired={field.required}
                objectKey={field.inputId as keyof ICompletedForm}
                errors={errors}
              />
            );
          case 'text':
            return (
              <TextFieldBox
                control={control}
                key={field.inputId}
                isRequired={field.required}
                placeholder={field.placeholder || ''}
                inputId={field.inputId}
                inputTitle={field.inputTitle}
                objectKey={field.inputId as keyof ICompletedForm}
                errors={errors}
              />
            );
        }
      })}
    </>
  );
};
