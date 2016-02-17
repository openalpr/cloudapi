OpenALPR Cloud API JavaScript Client
======================================


Usage: The following HTML page uses the OpenALPR JavaScript client to connect to OpenALPR Cloud API to analyze the license plate, vehicle color, and make.

```html

    <html>

    <head>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>

    <script src="src/model/AlprPlate.js"></script>
    <script src="src/model/Classification.js"></script>
    <script src="src/model/Coordinate.js"></script>
    <script src="src/model/InlineResponse200.js"></script>
    <script src="src/model/InlineResponse400.js"></script>
    <script src="src/model/PlateCandidate.js"></script>
    <script src="src/model/PlateDetails.js"></script>
    <script src="src/model/RegionOfInterest.js"></script>
    <script src="src/api/DefaultApi.js"></script>



    <script>


        $( document ).ready(function() {
            var img_url="http://cloudlakes.com/data_images/models/audi-rs4-avant/audi-rs4-avant-04.jpg";
            $("#demo_image").attr('src', img_url);
            openalpr_api = new DefaultApi();
            openalpr_api.recognizePost("sk_DEMODEMODEMODEMODEMODEMO", "plate,color,make", "", "", 
                img_url, 
                "eu", "", 0, 10, "", function(data, textStatus, jqXHR) {
                    // callback function on completion

                    $("#analysis_info").empty();
                    if (data.plate.results.length > 0)
                        $("#analysis_info").append("<p>License plate: " + data.plate.results[0].plate + "</p>");

                    $("#analysis_info").append("<p>Color: " + data.color[0].value + "</p>");
                    $("#analysis_info").append("<p>Make: " + data.make[0].value + "</p>");
                });

        });
    </script>
    </head>

    <body>

    <h1>OpenALPR Cloud API Demo</h1>

    <img id="demo_image" src="" />
    <div id="analysis_info">
    Analyzing vehicle...
    </div>
    </body>

```