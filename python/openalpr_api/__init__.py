from __future__ import absolute_import

# import models into sdk package
from .models.classification import Classification
from .models.coordinate import Coordinate
from .models.region_of_interest import RegionOfInterest
from .models.plate_candidate import PlateCandidate
from .models.plate_details import PlateDetails
from .models.alpr_plate import AlprPlate
from .models.inline_response_200 import InlineResponse200
from .models.inline_response_400 import InlineResponse400

# import apis into sdk package
from .apis.default_api import DefaultApi

# import ApiClient
from .api_client import ApiClient

from .configuration import Configuration

configuration = Configuration()
