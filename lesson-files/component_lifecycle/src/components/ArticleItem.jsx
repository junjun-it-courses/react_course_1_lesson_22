import React from "react";

class ArticleItem extends React.Component {
    handleClick = (e) => {
        e.preventDefault();
        const { onClick } = this.props;
        onClick();
    }
    
    render() {
        const { name, description, link } = this.props;
        return (
            <div>
                <a href="{link}" onClick={this.handleClick}>{name}</a><br />
                <div>{description}</div>
            </div>
        );
    }
}

export default ArticleItem;