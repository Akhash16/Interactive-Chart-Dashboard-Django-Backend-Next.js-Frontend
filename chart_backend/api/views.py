# Importing necessary decorators and classes from Django REST Framework
from rest_framework.decorators import api_view
from rest_framework.response import Response

# API view for candlestick chart data
@api_view(['GET'])  # This view only accepts GET requests
def candlestick_data(request):
    # Sample candlestick data with date (x), open, high, low, and close prices
    data = {
        "data": [
            {"x": "2023-01-01", "open": 30, "high": 60, "low": 15, "close": 45},
            {"x": "2023-01-02", "open": 35, "high": 55, "low": 20, "close": 40},
            {"x": "2023-01-03", "open": 40, "high": 60, "low": 20, "close": 55},
            {"x": "2023-01-04", "open": 55, "high": 75, "low": 20, "close": 30},
            {"x": "2023-01-05", "open": 30, "high": 40, "low": 25, "close": 35},
            {"x": "2023-01-06", "open": 35, "high": 55, "low": 20, "close": 40},
        ]
    }
    # Returning the data as a JSON response
    return Response(data)

# API view for line chart data
@api_view(['GET'])  # This view only accepts GET requests
def line_chart_data(request):
    # Sample line chart data with labels and corresponding values
    data = {
        "labels": ["Jan", "Feb", "Mar", "Apr"],  # X-axis labels
        "data": [10, 20, 30, 40]  # Y-axis values corresponding to each label
    }
    # Returning the data as a JSON response
    return Response(data)

# API view for bar chart data
@api_view(['GET'])  # This view only accepts GET requests
def bar_chart_data(request):
    # Sample bar chart data with product labels and corresponding sales data
    data = {
        "labels": ["Product A", "Product B", "Product C"],  # X-axis labels (products)
        "data": [100, 150, 200]  # Y-axis values (sales)
    }
    # Returning the data as a JSON response
    return Response(data)

# API view for pie chart data
@api_view(['GET'])  # This view only accepts GET requests
def pie_chart_data(request):
    # Sample pie chart data with segment labels and corresponding values
    data = {
        "labels": ["Red", "Green", "Yellow"],  # Labels representing each segment
        "data": [300, 50, 100]  # Values corresponding to each label (e.g., number of votes)
    }
    # Returning the data as a JSON response
    return Response(data)
