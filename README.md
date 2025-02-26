# setup

## 1. openapi仕様書をプロジェクトトップに配置
```
openapi.yaml
```

## 2. openapi-generatorを使用して、API Clientを作る準備をします。

オフィシャルのdocker-imageを使用。作業ディレクトリで以下コマンドを叩く。
```shell
docker run --rm \
  -v "${PWD}:/local" \
  openapitools/openapi-generator-cli:latest generate \
  -i /local/openapi.yaml \
  -g typescript-axios \
  -o /local/generated-api \
  --additional-properties=typescriptThreePlus=true,withInterfaces=true
```

/generated-api が生成され、これで準備完了🎉

## 3. install package
```shell
npm install
```

## 4. prism を使用して opemapi.yaml から mock server を立ち上げます。
```shell
prism mock openapi.yaml
```

モックサーバーからダミーのユーザー情報が取得できるはずです。
- http://127.0.0.1:4010/users

## 5. apiClient を作成

以下ファイル参照
- lib/apiClient.ts
- routes/

## 6. 動作確認

```shell
npm run dev
```
- http://localhost:5173

⚙️

- [openapi 3.0.0](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.0.md)
- [openapi-generator](https://github.com/OpenAPITools/openapi-generator)
- [prism](https://github.com/stoplightio/prism)