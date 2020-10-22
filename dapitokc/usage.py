import dapitokc
import dash
from dash.dependencies import Input, Output
import dash_html_components as html

app = dash.Dash(__name__)

app.layout = html.Div([
    dapitokc.dashapitokenconsumer(
        id='input',
        originEndpoint='http://localhost:3000',
        authToken=''
    ),
    html.Div(id='output')
])


@app.callback(Output('output', 'children'), [Input('input', 'originEndpoint'), Input('input', 'authToken')])
def display_output(originEndpoint, authToken):
    return 'Origin endpoint: {}'.format(authToken)


if __name__ == '__main__':
    app.run_server(debug=True)
