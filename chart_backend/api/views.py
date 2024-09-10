from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view(['GET'])
def candlestick_data(request):
    data = {
        "data": [
  {"x": "2024-09-01", "open": 45, "high": 65, "low": 40, "close": 50},
  {"x": "2024-09-02", "open": 50, "high": 60, "low": 48, "close": 58},
  {"x": "2024-09-03", "open": 58, "high": 62, "low": 30, "close": 46},
  {"x": "2024-09-04", "open": 46, "high": 65, "low": 25, "close": 63},
  {"x": "2024-09-05", "open": 63, "high": 70, "low": 60, "close": 68}
]

    }
    return Response(data)

@api_view(['GET'])
def line_chart_data(request):
    data = {
        "labels": ["Jan", "Feb", "Mar", "Apr"],
        "data": [10, 20, 30, 40]
    }
    return Response(data)

@api_view(['GET'])
def bar_chart_data(request):
    data = {
        "labels": ["Product A", "Product B", "Product C"],
        "data": [100, 150, 200]
    }
    return Response(data)

@api_view(['GET'])
def pie_chart_data(request):
    data = {
        "labels": ["Red", "Green", "Yellow"],
        "data": [300, 50, 100]
    }
    return Response(data)
