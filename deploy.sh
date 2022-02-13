rm -rf dist &&
yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m "update" &&
git branch -m master &&
git remote add origin git@github.com:lxiaox/vue-blog-preview.git &&
git push -f -u origin master &&
cd ..