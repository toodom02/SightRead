import React from 'react';
import styled from 'styled-components';

const Styles = styled.div`
    .layout {
        padding-top: 50px;
    }
`;

export const Layout = (props) => (
    <Styles>
        <div className="layout">
            {props.children}
        </div>
    </Styles>
)