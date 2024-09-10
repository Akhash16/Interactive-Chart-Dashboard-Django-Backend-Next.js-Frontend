from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view(['GET'])
def candlestick_data(request):
    data = {
        "data": [
            {"x": "2023-01-01", "open": 30, "high": 50, "low": 20, "close": 35},
            {"x": "2023-01-02", "open": 35, "high": 45, "low": 10, "close": 20},
            {"x": "2023-01-03", "open": 40, "high": 50, "low": 20, "close": 35},
            {"x": "2023-01-04", "open": 45, "high": 45, "low": 10, "close": 20},
            {"x": "2023-01-05", "open": 50, "high": 50, "low": 20, "close": 35},
            {"x": "2023-01-06", "open": 65, "high": 95, "low": 10, "close": 80},
        ]
    }
    return Response(data)

@api_view(['GET'])
def line_chart_data(request):
    data = {
        "labels": ["Jan", "Feb", "Mar", "Apr"],
        "data": [10, 20, 30, 400]
    }
    return Response(data)

@api_view(['GET'])
def bar_chart_data(request):
    data = {
        "labels": ["Product A", "Product B", "Product C"],
        "data": [100, 150, 2000]
    }
    return Response(data)

@api_view(['GET'])
def pie_chart_data(request):
    data = {
        "labels": ["Green", "Blue", "Yellow"],
        "data": [300, 50, 100]
    }
    return Response(data)
