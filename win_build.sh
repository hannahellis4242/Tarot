root=`pwd`

cd client
echo "building client"
npm i
npm run build
cd $root

cd web_serve
echo "building web server"
npm i
npx tsc
cd $root

cd deck
echo "building deck server"
npm i
npx tsc
cd $root

cd word
echo "building word sever"
npm i
npx tsc
cd $root

echo "done"