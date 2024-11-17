from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import StaffSerializer

# Create your views here.
class StaffListView(APIView):
    def get(self, request):
        staff_data = [
            {
                "id": 1,
                "first_name": "John",
                "last_name": "Doe",
                "email": "john.doe@example.com",
                "phone": "123456789"
            },
            {
                "id": 2,
                "first_name": "Jane",
                "last_name": "Doe",
                "email": "jane.doe@example.com",
                "phone": "987654321"
            }
        ]

        serializer = StaffSerializer(staff_data, many=True)
        return Response(serializer.data)