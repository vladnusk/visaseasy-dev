import { IEmployment } from './form/IEmployment';
import { IGeneral } from './form/IGeneral';
import { ITrip } from './form/ITrip';

export interface ICompletedForm extends ITrip, IGeneral, IEmployment {}
