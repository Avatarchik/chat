import { WebpackNgModuleLoader } from './webpack-module-loader.service';
import { ConfigService } from './config.service';
import { UserService } from './user.service';
// $1

export {
  WebpackNgModuleLoader,
  ConfigService,
  UserService,
// $2
};

export const services = [
  ConfigService,
  UserService,
// $3
];

