import appRoot from 'app-root-path';
import path from 'path';
import fse from 'fs-extra';

const userRoot = appRoot.path;
const docsModuleRoot = path.join(userRoot, 'node_modules/markdown-documentation-maker');

const srcSource = path.join(docsModuleRoot, './src/docs');
const srcTarget = path.join(userRoot, './src/docs');
fse.copySync(srcSource, srcTarget, {
  overwrite: false,
});

const docsSource = path.join(docsModuleRoot, './docs');
const docsTarget = path.join(userRoot, './docs');
fse.copySync(docsSource, docsTarget, {
  overwrite: false,
});

