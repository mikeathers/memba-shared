yarn $1
git push --follow-tags origin main
yarn storybook:build
npm publish
