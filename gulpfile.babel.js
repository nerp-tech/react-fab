import gulp from 'gulp';
import eslint from 'gulp-eslint';
import mocha from 'gulp-mocha';
import istanbul from 'gulp-istanbul';
import { Instrumenter } from 'isparta';
import util from 'gulp-util';
import glob from 'glob';
import fs from 'fs';
import scsslint from 'gulp-scss-lint';

/**
 * Optional param:
 * --quiet
 * --fix
 */
gulp.task('es-lint', () => {
  return gulp.src([
    'src/**/*.js',
    'src/**/*.jsx',
  ])
  .pipe(eslint({
    quiet: !!util.env.quiet,
    fix: !!util.env.fix,
  }))
  .pipe(eslint.format())
  .pipe(eslint.failAfterError());
});

gulp.task('scss-lint', ['build:scss'], () => {
  return gulp.src([
    'dist/main.scss',
  ])
  .pipe(scsslint({
    maxBuffer: 1307200,
  }))
  .pipe(scsslint.failReporter('E'));
});

// TODO not including scss lint since it keeps failing with "Fatal undefined"
gulp.task('lint', ['es-lint']);

/**
 * Optional param:
 * --test=`module`
 */
gulp.task('pre-test', () => {
  let test = '**';

  if (util.env.test) {
    test = `**/${util.env.test}/**`;
  }

  return gulp.src([
    `src/${test}/*.js`,
    `src/${test}/*.jsx`,
  ])
  .pipe(istanbul({
    instrumenter: Instrumenter,
    includeUntested: true,
  }))
  .pipe(istanbul.hookRequire());
});

gulp.task('test', ['pre-test'], () => {
  let test = '**';

  if (util.env.test) {
    test = `**/${util.env.test}/**`;
  }

  gulp.src([
    'test-boot.js',
    `src/${test}/*.test.js`,
  ])
  .pipe(mocha())
  .pipe(istanbul.writeReports())
  .pipe(istanbul.enforceThresholds({ thresholds: { global: 10 } }));
});

gulp.task('build:scss', (cb) => {
  glob('src/**/*.scss', {}, (err, files) => {
    if (err) {
      cb(err);
    }

    const out = 'dist/main.scss';
    fs.writeFileSync(out, '');

    files.sort((a, b) => {
      return a < b ? 1 : -1;
    }).forEach((file) => {
      const content = fs.readFileSync(file, 'utf8');

      fs.appendFileSync(out, content);
    });

    cb();
  });
});
