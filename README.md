### react-crud
1. 数据库使用[mlab](https://mlab.com/),配合[mongoose](https://github.com/Automattic/mongoose)和[express](http://www.expressjs.com.cn/)开发后台,build后的文件部署在[netlify](https://app.netlify.com/)上。
2. 如何使用: 
```
git clone git@github.com:shenfeng1945/react-crud.git;
git checkout -b dev;
npm i;npm run build;
将build整个文件拖至netlify上，build之前，在package.json文件里修改'homepage'对应你想部署在netlify上的域名。
使用[now](https://backend-ighrpgwsiq.now.sh/api/games)部署nodejs。
```
![](https://i.loli.net/2018/08/31/5b889fc146227.png)
3. 现所有用户共用的同一张表，后续使用登录注册,待完善。
