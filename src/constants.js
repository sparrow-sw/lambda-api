import path from 'path';
import * as dotenv from 'dotenv';

// check that ENVIRONMENT is defined
if (!process.env.ENVIRONMENT) {
  console.error('Missing ENVIRONMENT variable... :(', process.env.ENVIRONMENT);
  process.exit(1);
};

// if localDevelopment();

// use local secret file
dotenv.config({ path: path.resolve(process.cwd(), `${process.env.ENVIRONMENT}.env`) })

const {
  ENVIRONMENT,
  PORT
} = process.env

export {
  ENVIRONMENT,
  PORT
}