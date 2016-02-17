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

        File imgFile = new File("/storage/projects/alpr/samples/testing/car1.jpg");
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