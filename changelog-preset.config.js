/**
 * Update changelog presets to use bitbucket format
 *
 * @see https://github.com/lerna/lerna/issues/2451
 * @see https://github.com/lerna/lerna/issues/2451#issuecomment-770672107
 *
 * ATTENTION: It is necessary to point to this config file, while running lerna command.
 *
 * Example: yarn lerna version --yes --conventional-commits --changelog-preset ./changelog-preset.config.js
 */
// module.exports = Promise.resolve()
//   .then(() => require('conventional-changelog-conventionalcommits'))
//   .then((presetPromise) => presetPromise())
//   .then((preset) => {
//     console.log('preset:before', preset.writerOpts);
//     preset.writerOpts.commitUrlFormat = '{{host}}/{{owner}}/{{repository}}/commits/{{hash}}';
//     preset.writerOpts.compareUrlFormat = '{{host}}/{{owner}}/{{repository}}/compare/{{currentTag}}%0D{{previousTag}}';
//     console.log('preset:after', preset.writerOpts);
//     return preset;
//   });
// // Alternative way of using this config file
const config = require('conventional-changelog-conventionalcommits');

module.exports = config({
   commitUrlFormat: "{{host}}/{{owner}}/{{repository}}/commits/{{hash}}",
   compareUrlFormat: "{{host}}/{{owner}}/{{repository}}/branches/compare/{{currentTag}}%0D{{previousTag}}"
});