import React from 'react';

const Layout = ({ children, backgroundColor }) => {
    React.useEffect(() => {
        document.body.style.backgroundColor = backgroundColor || '#bcccff'; // Default color
    }, [backgroundColor]);

    return <>{children}</>;
};

export default Layout;