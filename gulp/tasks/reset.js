// import { deleteAsync } from "del";
// export const reset = () => {
//   return deleteAsync(app.path.clean);
// };
import del from 'del';

export const reset = () => {
  return del(['./dist/*']);
};
