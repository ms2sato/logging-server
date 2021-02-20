const Koa = require('koa');
const body = require('koa-json-body')
const app = new Koa();

app
  .use(body({ limit: '10kb', fallback: true }))
  .use(async ctx => {
    console.log(ctx.request.body);
    ctx.body = 'Hello World';
    ctx.set('Access-Control-Allow-Origin', 'https://qiita.com')
  });


app.listen(3001, () => {
  console.log('これは悪い人が用意した情報収集用のサーバーだぞ！')  
});