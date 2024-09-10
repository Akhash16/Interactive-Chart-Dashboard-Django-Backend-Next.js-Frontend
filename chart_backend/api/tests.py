from django.urls import reverse
from rest_framework.test import APIClient, APITestCase
from rest_framework import status

class ChartDataTests(APITestCase):
    def setUp(self):
        # Initialize the APIClient for making requests
        self.client = APIClient()

    def test_candlestick_data(self):
        # Make a GET request to the candlestick_data view
        url = reverse('candlestick-data')  # Assuming you've named your URL pattern
        response = self.client.get(url)

        # Check the status code
        self.assertEqual(response.status_code, status.HTTP_200_OK)

        # Check the response data
        expected_data = {
            "data": [
                {"x": "2023-01-01", "open": 30, "high": 50, "low": 20, "close": 35},
                {"x": "2023-01-02", "open": 35, "high": 45, "low": 10, "close": 20},
            ]
        }
        self.assertEqual(response.data, expected_data)

    def test_line_chart_data(self):
        # Make a GET request to the line_chart_data view
        url = reverse('line-chart-data')  # Assuming you've named your URL pattern
        response = self.client.get(url)

        # Check the status code
        self.assertEqual(response.status_code, status.HTTP_200_OK)

        # Check the response data
        expected_data = {
            "labels": ["Jan", "Feb", "Mar", "Apr"],
            "data": [10, 20, 30, 40]
        }
        self.assertEqual(response.data, expected_data)

    def test_bar_chart_data(self):
        # Make a GET request to the bar_chart_data view
        url = reverse('bar-chart-data')  # Assuming you've named your URL pattern
        response = self.client.get(url)

        # Check the status code
        self.assertEqual(response.status_code, status.HTTP_200_OK)

        # Check the response data
        expected_data = {
            "labels": ["Product A", "Product B", "Product C"],
            "data": [100, 150, 200]
        }
        self.assertEqual(response.data, expected_data)

    def test_pie_chart_data(self):
        # Make a GET request to the pie_chart_data view
        url = reverse('pie-chart-data')  # Assuming you've named your URL pattern
        response = self.client.get(url)

        # Check the status code
        self.assertEqual(response.status_code, status.HTTP_200_OK)

        # Check the response data
        expected_data = {
            "labels": ["Green", "Blue", "Yellow"],
            "data": [300, 50, 100]
        }
        self.assertEqual(response.data, expected_data)
