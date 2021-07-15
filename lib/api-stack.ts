import * as cdk from '@aws-cdk/core';
import * as apigateway from '@aws-cdk/aws-apigateway'

export class ApiStack extends cdk.Stack {
  public readonly stackProps: ApiStackProps;

  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    const restApi = new apigateway.RestApi(this, "restApi", {
      restApiName: "api-test"
    });
    this.stackProps = {restApi: restApi} as ApiStackProps;
  }
}

export interface ApiStackProps extends cdk.StackProps {
  restApi: apigateway.RestApi;
}
