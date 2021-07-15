## デプロイ手順

```sh
npm run build
npx cdk synth
npx cdk diff
npx cdk deploy
```

スタックの構成を変えた場合はcloudformationのスタックを削除してから再度デプロイする必要がある
