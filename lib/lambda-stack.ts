import * as cdk from '@aws-cdk/core';
import * as lambda from '@aws-cdk/aws-lambda'
import * as apigateway from '@aws-cdk/aws-apigateway'
import { ApiStackProps } from './api-stack'

export class LambdaStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props: ApiStackProps) {
    super(scope, id, props);
    const golangLambda = new lambda.Function(this, 'GoFunction', {
      functionName: 'GoFunction',
      runtime: lambda.Runtime.GO_1_X,
      handler: 'main',
      code: lambda.Code.fromAsset('./lambda/bin')
    })
    const goGolangLambda = new lambda.Function(this, 'GoGoFunction', {
      functionName: 'GoGoFunction',
      runtime: lambda.Runtime.GO_1_X,
      handler: 'main',
      code: lambda.Code.fromAsset('./lambda/bin')
    })
    // bin配下のファイルを経由して受け取ったAPI GatewayのConstructsにLambdaを紐づける
    props.restApi.root.addMethod("GET", new apigateway.LambdaIntegration(golangLambda));
  }
}
