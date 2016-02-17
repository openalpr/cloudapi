OpenALPR Cloud API Java Client
==============================

## Requirements

Building the API client library requires [Maven](https://maven.apache.org/) to be installed.

## Installation & Usage

To package the API client library into JAR, execute:

```shell
mvn package
```

To install the API client library to your local Maven repository, execute:

```shell
mvn install
```

To deploy it to a remote Maven repository instead, configure the settings of the repository and execute:

```shell
mvn deploy
```

Refer to the [official documentation](https://maven.apache.org/plugins/maven-deploy-plugin/usage.html) for more information.

After the client libarary is installed/deployed, you can use it in your Maven project by adding the following to your *pom.xml*:

```xml
<dependency>
    <groupId>io.swagger</groupId>
    <artifactId>openalpr_api</artifactId>
    <version>1.0.1</version>
    <scope>compile</scope>
</dependency>

```

## Usage

The following example loads a file (/tmp/car1.jpg) from disk and gets the vehicle color and license plate information from OpenALPR CLoud

```java

    import com.openalpr.api.DefaultApi;
    import com.openalpr.api.invoker.ApiException;
    import com.openalpr.api.models.InlineResponse200;

    import java.util.ArrayList;
    import java.util.List;
    import java.io.File;

    public class TestOpenAlprApi {

        public static void main(String[] args) {
            // Prints "Hello, World" to the terminal window.
            DefaultApi alprClient = new DefaultApi();

            List<String> tasks = new ArrayList<String>(2);
            tasks.add("plate");
            tasks.add("color");

            File imgFile = new File("/tmp/car1.jpg");
            try {
                InlineResponse200 response = alprClient.recognizePost("sk_DEMODEMODEMODEMODEMODEMO", tasks, imgFile,
                        null, null, "us", null, 0, 10, null);
                System.out.println("Color is: " + response.getColor().get(0).getValue() + " : " + response.getColor().get(0).getConfidence().toString() + "%");
                System.out.println("Plate is: " + response.getPlate().getResults().get(0).getPlate());
            }
            catch (ApiException e)
            {
                System.out.println(e.getCode());
            }
            System.out.println("Done");
        }

    }

```

## Recommendation

It's recommended to create an instance of `ApiClient` per thread in a multithreaded environment to avoid any potential issue.

## Author




