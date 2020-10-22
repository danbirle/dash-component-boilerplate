# AUTO GENERATED FILE - DO NOT EDIT

rdashapitokenconsumer <- function(originEndpoint=NULL, id=NULL, authToken=NULL) {
    
    props <- list(originEndpoint=originEndpoint, id=id, authToken=authToken)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'dashapitokenconsumer',
        namespace = 'dapitokc',
        propNames = c('originEndpoint', 'id', 'authToken'),
        package = 'dapitokc'
        )

    structure(component, class = c('dash_component', 'list'))
}
