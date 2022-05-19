rm -rf dist &&
yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m "update" &&
git branch -m main &&
git remote add origin git@github.com:lxiaox/blog-share.git &&
git push -f -u origin main &&
cd ..