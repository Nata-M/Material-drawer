import React from 'react';



function HeaderTopLink(props) {
    const text = props.text;
    const Icon = props.icon;
    const Avatar = props.avatar;
    return (
        <div style={{ color: props.color, textDecoration: props.textDecoration ? props.textDecoration : '' }}>
            {Icon ? <Icon /> : null}
            {Avatar ? <Avatar /> : null}
            {text}
        </div>
    )
}
export default HeaderTopLink