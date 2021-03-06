import { BaseInterface } from 'src/mongo/base.interface';
import { CityInterface } from 'src/module/location/city/city.interface';
import { FaultInterface } from 'src/module/panel/fault/fault.interface';

export interface FieldTeamInterface extends BaseInterface {
  title: string;
  city: CityInterface;
  phone: string;
  faults: FaultInterface[];
}
