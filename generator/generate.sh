#!/bin/bash

# Generate Python

PACKAGE_NAME=openalpr_api
PACKAGE_VERSION=2.0.1
PACKAGE_NAME_CAML=openAlprApi
PACKAGE_NAME_TITLE=OpenAlprApi

SWAGGER_GEN_JAR=swagger-codegen/swagger-codegen-cli.jar
SWAGGER_DEF=../cloudapi.yaml

rm -Rf clients/*

# Generate Python library
java -jar $SWAGGER_GEN_JAR generate -t swagger-codegen/modules/swagger-codegen/src/main/resources/python -i $SWAGGER_DEF -l python -o clients/python/ --additional-properties packageName=${PACKAGE_NAME},packageVersion=${PACKAGE_VERSION}

# Generate JavaScript library
java -jar $SWAGGER_GEN_JAR generate -t swagger-codegen/modules/swagger-codegen/src/main/resources/Javascript/ -i $SWAGGER_DEF -l javascript -o clients/javascript/ --additional-properties projectName=${PACKAGE_NAME},projectVersion=${PACKAGE_VERSION}

# Generate ruby library
java -jar $SWAGGER_GEN_JAR generate -t swagger-codegen/modules/swagger-codegen/src/main/resources/ruby/ -i $SWAGGER_DEF -l ruby -o clients/ruby/ --additional-properties gemName=${PACKAGE_NAME},gemVersion=${PACKAGE_VERSION},moduleName=${PACKAGE_NAME_CAML}

# Generate php library
java -jar $SWAGGER_GEN_JAR generate -t swagger-codegen/modules/swagger-codegen/src/main/resources/php/ -i $SWAGGER_DEF -l php -o clients/php/ --additional-properties packagePath=${PACKAGE_NAME_TITLE}

# Generate Node.js library
java -jar $SWAGGER_GEN_JAR generate -t swagger-codegen/modules/swagger-codegen/src/main/resources/nodejs/ -i $SWAGGER_DEF -l nodejs -o clients/nodejs/

# Generate Java library
java -jar $SWAGGER_GEN_JAR generate -t swagger-codegen/modules/swagger-codegen/src/main/resources/Java/ -i $SWAGGER_DEF -l java -o clients/java/ --additional-properties artifactId=${PACKAGE_NAME},artifactVersion=${PACKAGE_VERSION},invokerPackage=com.openalpr.api.invoker,modelPackage=com.openalpr.api.models,apiPackage=com.openalpr.api

# Generate .Net library
java -jar $SWAGGER_GEN_JAR generate -t swagger-codegen/modules/swagger-codegen/src/main/resources/csharp/ -i $SWAGGER_DEF -l csharp -o clients/csharp/ --additional-properties packageName=${PACKAGE_NAME_TITLE},packageVersion=${PACKAGE_VERSION}

# Generate iPhone libraries
java -jar $SWAGGER_GEN_JAR generate -t swagger-codegen/modules/swagger-codegen/src/main/resources/objc/ -i $SWAGGER_DEF -l objc -o clients/objc/ 
java -jar $SWAGGER_GEN_JAR generate -t swagger-codegen/modules/swagger-codegen/src/main/resources/swift/ -i $SWAGGER_DEF -l swift -o clients/swift/ 


#java -jar $SWAGGER_GEN_JAR generate -t swagger-codegen/modules/swagger-codegen/src/main/resources/python -i $SWAGGER_DEF -l html -o clients/doc

#sed -i 's|self.host =.*|self.host = "http://localhost:8888/v2"|' clients/python/openalpr_api/configuration.py
#sed -i 's|private String basePath =.*|private String basePath = "http://localhost:8888/v2";|' clients/java/src/main/java/com/openalpr/api/invoker/ApiClient.java
