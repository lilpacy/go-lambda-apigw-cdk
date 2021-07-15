package main

import (
	"context"
	"fmt"
	"time"

	"github.com/aws/aws-lambda-go/lambda"
)

const timeFormat = "2006-01-02 15:04:05"
const messageFormat = "Hello, now is %s!"

// MyEvent ...
type MyEvent struct {
	Name string `json:"name"`
}

// HandleRequest ...
func HandleRequest(ctx context.Context) (string, error) {
	t := time.Now()
	message := createMessage(t)
	return message, nil
	// このままだとAPI Gateway経由で叩いたときに500エラーになるのでメソッドレスポンスを定義してマッピングする必要がある
	// https://docs.aws.amazon.com/ja_jp/apigateway/latest/developerguide/models-mappings.html
}

func createMessage(t time.Time) string {
	return fmt.Sprintf(messageFormat, t.Format(timeFormat))
}

func main() {
	lambda.Start(HandleRequest)
}
