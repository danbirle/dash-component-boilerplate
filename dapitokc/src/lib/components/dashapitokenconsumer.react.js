import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class dashapitokenconsumer extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        window.addEventListener("message", (event) => {
            console.log('@R Debug event from origin: ', event);
            if (event.origin === this.props.originEndpoint && event.data.toString().includes('Token ')) {
                this.setProps({ token: event.data })
            }
        }, false);
    }

    render() {
        const {id} = this.props;

        return (
            <div id={id}></div>
        );
    }
}

dashapitokenconsumer.defaultProps = {};

dashapitokenconsumer.propTypes = {
    /**
     * Origins that may pass the authentication token are limited to IoTBox frontend only, for now
     */
    originEndpoint: PropTypes.string.isRequired,
    /**
     * The ID used to identify this component in Dash callbacks.
     */
    id: PropTypes.string,
    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    authToken: PropTypes.string,
    /**
     * The token used to identify any requests from the dash application.
     */
    setProps: PropTypes.func
};
