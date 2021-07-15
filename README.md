## ローカル実行

```shell
# sam local invoke ResourceName -t path/to/Stack.template.json
sam local invoke GoFunction -t cdk.out/LambdaStack.template.json
```

reference: [sam local invoke](https://docs.aws.amazon.com/ja_jp/serverless-application-model/latest/developerguide/sam-cli-command-reference-sam-local-invoke.html)

## デプロイ手順

```sh
npm run build # linux向けにバイナリビルド
npx cdk synth
npx cdk diff
npx cdk deploy
```

スタックの構成を変えた場合はcloudformationのスタックを削除してから再度デプロイする必要がある

reference: [cdk workshop](https://cdkworkshop.com/20-typescript.html)
