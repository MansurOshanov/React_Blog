import React from 'react';

function PostLoadingComponent(Component) {
    return function PostLoadingComp({isLoading, ...props}) {
        if(!isLoading) return <Component {...props} />;
        return(
            <p>Post are Loading</p>
        );
    };
};

export default PostLoadingComponent;

